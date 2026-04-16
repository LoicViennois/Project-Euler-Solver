const fs = require('fs');
const { withRelatedProject } = require('@vercel/related-projects');

function extractClientUrl() {
  const clientUrl = withRelatedProject({
    projectName: 'project-euler-client',
    defaultHost: process.env.EULER_CLIENT_URL,
  });

  if (clientUrl) {
    // Ensure the URL has a protocol
    process.env.EULER_CLIENT_URL = clientUrl.startsWith('http')
      ? clientUrl
      : `https://${clientUrl}`;
  }
  console.log(`Using EULER_CLIENT_URL: ${process.env.EULER_CLIENT_URL}`);
}

/**
 * Replaces environment variables in index.html, similar to envsubst.
 */
function substituteEnvVars() {
  const mainDst = process.env.INDEX_DST || './dist/main.js';

  if (!fs.existsSync(mainDst)) {
    console.warn(
      `Warning: File not found at ${mainDst}. Skipping environment variable substitution.`,
    );
    return;
  }

  try {
    let content = fs.readFileSync(mainDst, 'utf8');

    // Matches ${VAR_NAME}
    const replacedContent = content.replace(/\${(\w+)}/g, (match, p1, p2) => {
      const varName = p1 || p2;
      const value = process.env[varName];
      // If the environment variable exists, replace it. Otherwise, keep the original match.
      return value !== undefined ? value : match;
    });

    if (content !== replacedContent) {
      fs.writeFileSync(mainDst, replacedContent);
      console.log(`Successfully processed environment variables in ${mainDst}`);
    } else {
      console.log(`No environment variables to substitute in ${mainDst}`);
    }
  } catch (error) {
    console.error(`Error processing ${mainDst}:`, error);
    process.exit(1);
  }
}

extractClientUrl();
substituteEnvVars();
