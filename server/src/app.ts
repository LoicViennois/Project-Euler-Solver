import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { getProblems } from './server/routes/problems';
import { solve } from './server/routes/solve';
import { getCode } from './server/routes/code';

export const app = express();

app.use(cors({
  origin: [
    'http://localhost:4200',
    process.env.EULER_CLIENT_URL
  ]
}));
app.use(morgan('tiny'));

app.route('/solve/:id').get(solve);
app.route('/code/:id').get(getCode);
app.route('/problems').get(getProblems);
