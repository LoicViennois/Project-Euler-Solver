import * as path from 'node:path';

import { EulerProblem } from '@problems/core/types/euler-problem';

import { euler061 } from './euler061';
import { euler062 } from './euler062';
import { euler063 } from './euler063';
import { euler064 } from './euler064';
import { euler065 } from './euler065';
import { euler066 } from './euler066';
import { euler067 } from './euler067';

export const problemsPack4: EulerProblem[] = [
  {
    id: 61,
    solver: euler061,
    codeFilePath: path.join(__dirname, './euler061.ts'),
  },
  {
    id: 62,
    solver: euler062,
    codeFilePath: path.join(__dirname, './euler062.ts'),
  },
  {
    id: 63,
    solver: euler063,
    codeFilePath: path.join(__dirname, './euler063.ts'),
  },
  {
    id: 64,
    solver: euler064,
    codeFilePath: path.join(__dirname, './euler064.ts'),
  },
  {
    id: 65,
    solver: euler065,
    codeFilePath: path.join(__dirname, './euler065.ts'),
  },
  {
    id: 66,
    solver: euler066,
    codeFilePath: path.join(__dirname, './euler066.ts'),
  },
  {
    id: 67,
    solver: euler067,
    codeFilePath: path.join(__dirname, './euler067.ts'),
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
