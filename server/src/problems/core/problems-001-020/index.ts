import * as fs from 'node:fs';
import * as path from 'node:path';

import { EulerProblem } from '@problems/core/types/euler-problem';

import { euler001 } from './euler001';
import { euler002 } from './euler002';
import { euler003 } from './euler003';
import { euler004 } from './euler004';
import { euler005 } from './euler005';
import { euler006 } from './euler006';
import { euler007 } from './euler007';
import { euler008 } from './euler008';
import { euler009 } from './euler009';
import { euler010 } from './euler010';
import { euler011 } from './euler011';
import { euler012 } from './euler012';
import { euler013 } from './euler013';
import { euler014 } from './euler014';
import { euler015 } from './euler015';
import { euler016 } from './euler016';
import { euler017 } from './euler017';
import { euler018 } from './euler018';
import { euler019 } from './euler019';
import { euler020 } from './euler020';

function getCode(filePath: string) {
  filePath = path.resolve(__dirname, filePath);
  return fs.readFileSync(filePath, 'utf-8');
}

export const problemsPack1: EulerProblem[] = [
  { id: 1, solver: euler001, code: getCode('./euler001.ts') },
  { id: 2, solver: euler002, code: getCode('./euler002.ts') },
  { id: 3, solver: euler003, code: getCode('./euler003.ts') },
  { id: 4, solver: euler004, code: getCode('./euler004.ts') },
  { id: 5, solver: euler005, code: getCode('./euler005.ts') },
  { id: 6, solver: euler006, code: getCode('./euler006.ts') },
  { id: 7, solver: euler007, code: getCode('./euler007.ts') },
  { id: 8, solver: euler008, code: getCode('./euler008.ts') },
  { id: 9, solver: euler009, code: getCode('./euler009.ts') },
  { id: 10, solver: euler010, code: getCode('./euler010.ts') },
  { id: 11, solver: euler011, code: getCode('./euler011.ts') },
  { id: 12, solver: euler012, code: getCode('./euler012.ts') },
  { id: 13, solver: euler013, code: getCode('./euler013.ts') },
  { id: 14, solver: euler014, code: getCode('./euler014.ts') },
  { id: 15, solver: euler015, code: getCode('./euler015.ts') },
  { id: 16, solver: euler016, code: getCode('./euler016.ts') },
  { id: 17, solver: euler017, code: getCode('./euler017.ts') },
  { id: 18, solver: euler018, code: getCode('./euler018.ts') },
  { id: 19, solver: euler019, code: getCode('./euler019.ts') },
  { id: 20, solver: euler020, code: getCode('./euler020.ts') },
];
