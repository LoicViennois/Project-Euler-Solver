import { gitInfo } from './git-info';

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  commitSha: gitInfo.commitSha,
  shortSha: gitInfo.shortSha,
};

