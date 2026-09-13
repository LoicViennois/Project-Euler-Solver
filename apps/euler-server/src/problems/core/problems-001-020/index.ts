import * as path from 'node:path';

import { EulerProblem } from '../types/euler-problem.js';

import { euler001 } from './euler001.js';
import { euler002 } from './euler002.js';
import { euler003 } from './euler003.js';
import { euler004 } from './euler004.js';
import { euler005 } from './euler005.js';
import { euler006 } from './euler006.js';
import { euler007 } from './euler007.js';
import { euler008 } from './euler008.js';
import { euler009 } from './euler009.js';
import { euler010 } from './euler010.js';
import { euler011 } from './euler011.js';
import { euler012 } from './euler012.js';
import { euler013 } from './euler013.js';
import { euler014 } from './euler014.js';
import { euler015 } from './euler015.js';
import { euler016 } from './euler016.js';
import { euler017 } from './euler017.js';
import { euler018 } from './euler018.js';
import { euler019 } from './euler019.js';
import { euler020 } from './euler020.js';

export const problemsPack1: EulerProblem[] = [
  {
    id: 1,
    solver: euler001,
    codeFilePath: path.join(import.meta.dirname, './euler001.ts'),
  },
  {
    id: 2,
    solver: euler002,
    codeFilePath: path.join(import.meta.dirname, './euler002.ts'),
  },
  {
    id: 3,
    solver: euler003,
    codeFilePath: path.join(import.meta.dirname, './euler003.ts'),
  },
  {
    id: 4,
    solver: euler004,
    codeFilePath: path.join(import.meta.dirname, './euler004.ts'),
  },
  {
    id: 5,
    solver: euler005,
    codeFilePath: path.join(import.meta.dirname, './euler005.ts'),
  },
  {
    id: 6,
    solver: euler006,
    codeFilePath: path.join(import.meta.dirname, './euler006.ts'),
  },
  {
    id: 7,
    solver: euler007,
    codeFilePath: path.join(import.meta.dirname, './euler007.ts'),
  },
  {
    id: 8,
    solver: euler008,
    codeFilePath: path.join(import.meta.dirname, './euler008.ts'),
  },
  {
    id: 9,
    solver: euler009,
    codeFilePath: path.join(import.meta.dirname, './euler009.ts'),
  },
  {
    id: 10,
    solver: euler010,
    codeFilePath: path.join(import.meta.dirname, './euler010.ts'),
  },
  {
    id: 11,
    solver: euler011,
    codeFilePath: path.join(import.meta.dirname, './euler011.ts'),
  },
  {
    id: 12,
    solver: euler012,
    codeFilePath: path.join(import.meta.dirname, './euler012.ts'),
  },
  {
    id: 13,
    solver: euler013,
    codeFilePath: path.join(import.meta.dirname, './euler013.ts'),
  },
  {
    id: 14,
    solver: euler014,
    codeFilePath: path.join(import.meta.dirname, './euler014.ts'),
  },
  {
    id: 15,
    solver: euler015,
    codeFilePath: path.join(import.meta.dirname, './euler015.ts'),
  },
  {
    id: 16,
    solver: euler016,
    codeFilePath: path.join(import.meta.dirname, './euler016.ts'),
  },
  {
    id: 17,
    solver: euler017,
    codeFilePath: path.join(import.meta.dirname, './euler017.ts'),
  },
  {
    id: 18,
    solver: euler018,
    codeFilePath: path.join(import.meta.dirname, './euler018.ts'),
  },
  {
    id: 19,
    solver: euler019,
    codeFilePath: path.join(import.meta.dirname, './euler019.ts'),
  },
  {
    id: 20,
    solver: euler020,
    codeFilePath: path.join(import.meta.dirname, './euler020.ts'),
  },
];
