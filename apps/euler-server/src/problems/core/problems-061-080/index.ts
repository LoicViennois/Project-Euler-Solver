import * as path from 'node:path';

import { EulerProblem } from '../types/euler-problem.js';

import { euler061 } from './euler061.js';
import { euler062 } from './euler062.js';
import { euler063 } from './euler063.js';
import { euler064 } from './euler064.js';
import { euler065 } from './euler065.js';
import { euler066 } from './euler066.js';
import { euler067 } from './euler067.js';

export const problemsPack4: EulerProblem[] = [
  {
    id: 61,
    solver: euler061,
    codeFilePath: path.join(import.meta.dirname, './euler061.ts'),
  },
  {
    id: 62,
    solver: euler062,
    codeFilePath: path.join(import.meta.dirname, './euler062.ts'),
  },
  {
    id: 63,
    solver: euler063,
    codeFilePath: path.join(import.meta.dirname, './euler063.ts'),
  },
  {
    id: 64,
    solver: euler064,
    codeFilePath: path.join(import.meta.dirname, './euler064.ts'),
  },
  {
    id: 65,
    solver: euler065,
    codeFilePath: path.join(import.meta.dirname, './euler065.ts'),
  },
  {
    id: 66,
    solver: euler066,
    codeFilePath: path.join(import.meta.dirname, './euler066.ts'),
  },
  {
    id: 67,
    solver: euler067,
    codeFilePath: path.join(import.meta.dirname, './euler067.ts'),
  },
  { id: 68, solver: null, codeFilePath: '' },
  { id: 69, solver: null, codeFilePath: '' },
  { id: 70, solver: null, codeFilePath: '' },
  { id: 71, solver: null, codeFilePath: '' },
  { id: 72, solver: null, codeFilePath: '' },
  { id: 73, solver: null, codeFilePath: '' },
  { id: 74, solver: null, codeFilePath: '' },
  { id: 75, solver: null, codeFilePath: '' },
  { id: 76, solver: null, codeFilePath: '' },
  { id: 77, solver: null, codeFilePath: '' },
  { id: 78, solver: null, codeFilePath: '' },
  { id: 79, solver: null, codeFilePath: '' },
  { id: 80, solver: null, codeFilePath: '' },
];
