const fs = require('fs');
const { withRelatedProject } = require('@vercel/related-projects');

/**
 * Replaces environment variables in index.html, similar to envsubst.
 */
function substituteEnvVars() {
  const indexDst = process.env.INDEX_DST || './dist/project-euler-solver/browser/index.html';

  if (!fs.existsSync(indexDst)) {
    console.warn(`Warning: File not found at ${indexDst}. Skipping environment variable substitution.`);
    return;
  }

  // Determine EULER_SERVER_URL using @vercel/related-projects if in Vercel
  if (process.env.VERCEL) {
    const apiUrl = withRelatedProject({
      projectName: 'project-euler-server',
      defaultHost: process.env.EULER_SERVER_URL,
    });

    if (apiUrl) {
      // Ensure the URL has a protocol
      process.env.EULER_SERVER_URL = apiUrl.startsWith('http') ? apiUrl : `https://${apiUrl}`;
    }
    console.log(`Using EULER_SERVER_URL: ${apiUrl}`);
  }

  try {
    let content = fs.readFileSync(indexDst, 'utf8');

    // Matches ${VAR_NAME}
    const replacedContent = content.replace(/\${(\w+)}/g, (match, p1, p2) => {
      const varName = p1 || p2;
      const value = process.env[varName];
      // If the environment variable exists, replace it. Otherwise, keep the original match.
      return value !== undefined ? value : match;
    });

    if (content !== replacedContent) {
      fs.writeFileSync(indexDst, replacedContent);
      console.log(`Successfully processed environment variables in ${indexDst}`);
    } else {
      console.log(`No environment variables to substitute in ${indexDst}`);
    }
  } catch (error) {
    console.error(`Error processing ${indexDst}:`, error);
    process.exit(1);
  }
}

substituteEnvVars();
