import * as fs from 'node:fs';
import * as path from 'node:path';

import { EulerProblem } from '@problems/core/types/euler-problem';

import { euler041 } from './euler041';
import { euler042 } from './euler042';
import { euler043 } from './euler043';
import { euler044 } from './euler044';
import { euler045 } from './euler045';
import { euler046 } from './euler046';
import { euler047 } from './euler047';
import { euler048 } from './euler048';
import { euler049 } from './euler049';
import { euler050 } from './euler050';
import { euler051 } from './euler051';
import { euler052 } from './euler052';
import { euler053 } from './euler053';
import { euler054 } from './euler054';
import { euler055 } from './euler055';
import { euler056 } from './euler056';
import { euler057 } from './euler057';
import { euler058 } from './euler058';
import { euler059 } from './euler059';
import { euler060 } from './euler060';

function getCode(filePath: string) {
  filePath = path.resolve(__dirname, filePath);
  return fs.readFileSync(filePath).toString();
}

export const problemsPack3: EulerProblem[] = [
  { id: 41, solver: euler041, code: getCode('./euler041.ts') },
  { id: 42, solver: euler042, code: getCode('./euler042.ts') },
  { id: 43, solver: euler043, code: getCode('./euler043.ts') },
  { id: 44, solver: euler044, code: getCode('./euler044.ts') },
  { id: 45, solver: euler045, code: getCode('./euler045.ts') },
  { id: 46, solver: euler046, code: getCode('./euler046.ts') },
  { id: 47, solver: euler047, code: getCode('./euler047.ts') },
  { id: 48, solver: euler048, code: getCode('./euler048.ts') },
  { id: 49, solver: euler049, code: getCode('./euler049.ts') },
  { id: 50, solver: euler050, code: getCode('./euler050.ts') },
  { id: 51, solver: euler051, code: getCode('./euler051.ts') },
  { id: 52, solver: euler052, code: getCode('./euler052.ts') },
  { id: 53, solver: euler053, code: getCode('./euler053.ts') },
  { id: 54, solver: euler054, code: getCode('./euler054.ts') },
  { id: 55, solver: euler055, code: getCode('./euler055.ts') },
  { id: 56, solver: euler056, code: getCode('./euler056.ts') },
  { id: 57, solver: euler057, code: getCode('./euler057.ts') },
  { id: 58, solver: euler058, code: getCode('./euler058.ts') },
  { id: 59, solver: euler059, code: getCode('./euler059.ts') },
  { id: 60, solver: euler060, code: getCode('./euler060.ts') },
];
