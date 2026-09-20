import { gitInfo } from './git-info';

interface WindowEnv {
  production?: boolean;
  apiUrl?: string;
}

const windowEnv = (window as unknown as { env?: WindowEnv }).env;

export const environment = {
  production: true,
  apiUrl: '',
  ...windowEnv,
  commitSha: gitInfo.commitSha,
  shortSha: gitInfo.shortSha,
};

