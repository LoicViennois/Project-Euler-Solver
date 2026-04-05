export default () => {
  const branch = process.env.VERCEL_GIT_COMMIT_REF || 'master';
  const prefix =
    process.env.GITHUB_CODE_URL_PREFIX ||
    `https://github.com/LoicViennois/Project-Euler-Solver/blob/${branch}/apps/euler-server/src`;

  return {
    github: {
      branch,
      prefix,
    },
  };
};
