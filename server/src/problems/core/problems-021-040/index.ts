import * as fs from 'node:fs';
import * as path from 'node:path';

import { EulerProblem } from '@problems/core/types/euler-problem';

import { euler021 } from './euler021';
import { euler022 } from './euler022';
import { euler023 } from './euler023';
import { euler024 } from './euler024';
import { euler025 } from './euler025';
import { euler026 } from './euler026';
import { euler027 } from './euler027';
import { euler028 } from './euler028';
import { euler029 } from './euler029';
import { euler030 } from './euler030';
import { euler031 } from './euler031';
import { euler032 } from './euler032';
import { euler033 } from './euler033';
import { euler034 } from './euler034';
import { euler035 } from './euler035';
import { euler036 } from './euler036';
import { euler037 } from './euler037';
import { euler038 } from './euler038';
import { euler039 } from './euler039';
import { euler040 } from './euler040';

function getCode(filePath: string) {
  filePath = path.resolve(__dirname, filePath);
  return fs.readFileSync(filePath).toString();
}

export const problemsPack2: EulerProblem[] = [
  { id: 21, solver: euler021, code: getCode('./euler021.ts') },
  { id: 22, solver: euler022, code: getCode('./euler022.ts') },
  { id: 23, solver: euler023, code: getCode('./euler023.ts') },
  { id: 24, solver: euler024, code: getCode('./euler024.ts') },
  { id: 25, solver: euler025, code: getCode('./euler025.ts') },
  { id: 26, solver: euler026, code: getCode('./euler026.ts') },
  { id: 27, solver: euler027, code: getCode('./euler027.ts') },
  { id: 28, solver: euler028, code: getCode('./euler028.ts') },
  { id: 29, solver: euler029, code: getCode('./euler029.ts') },
  { id: 30, solver: euler030, code: getCode('./euler030.ts') },
  { id: 31, solver: euler031, code: getCode('./euler031.ts') },
  { id: 32, solver: euler032, code: getCode('./euler032.ts') },
  { id: 33, solver: euler033, code: getCode('./euler033.ts') },
  { id: 34, solver: euler034, code: getCode('./euler034.ts') },
  { id: 35, solver: euler035, code: getCode('./euler035.ts') },
  { id: 36, solver: euler036, code: getCode('./euler036.ts') },
  { id: 37, solver: euler037, code: getCode('./euler037.ts') },
  { id: 38, solver: euler038, code: getCode('./euler038.ts') },
  { id: 39, solver: euler039, code: getCode('./euler039.ts') },
  { id: 40, solver: euler040, code: getCode('./euler040.ts') },
];
