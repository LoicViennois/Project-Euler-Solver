import * as fs from 'node:fs';
import * as path from 'node:path';

import { EulerProblem } from '@problems/core/types/euler-problem';

import { euler061 } from './euler061';
import { euler062 } from './euler062';
import { euler063 } from './euler063';
import { euler064 } from './euler064';
import { euler065 } from './euler065';
import { euler066 } from './euler066';
import { euler067 } from './euler067';

function getCode(filePath: string) {
  filePath = path.resolve(__dirname, filePath);
  return fs.readFileSync(filePath).toString();
}

export const problemsPack4: EulerProblem[] = [
  { id: 61, solver: euler061, code: getCode('./euler061.ts') },
  { id: 62, solver: euler062, code: getCode('./euler062.ts') },
  { id: 63, solver: euler063, code: getCode('./euler063.ts') },
  { id: 64, solver: euler064, code: getCode('./euler064.ts') },
  { id: 65, solver: euler065, code: getCode('./euler065.ts') },
  { id: 66, solver: euler066, code: getCode('./euler066.ts') },
  { id: 67, solver: euler067, code: getCode('./euler067.ts') },
  { id: 68, solver: null, code: '' },
  { id: 69, solver: null, code: '' },
  { id: 70, solver: null, code: '' },
  { id: 71, solver: null, code: '' },
  { id: 72, solver: null, code: '' },
  { id: 73, solver: null, code: '' },
  { id: 74, solver: null, code: '' },
  { id: 75, solver: null, code: '' },
  { id: 76, solver: null, code: '' },
  { id: 77, solver: null, code: '' },
  { id: 78, solver: null, code: '' },
  { id: 79, solver: null, code: '' },
  { id: 80, solver: null, code: '' },
];
