import * as express from 'express';
import * as cors from 'cors';
import * as morgan from 'morgan';

import { getProblems } from './server/routes/problems';
import { solve } from './server/routes/solve';
import { getCode } from './server/routes/code';
import { healthCheck } from './server/routes/healthz';

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

// Docker HEALTHCHECK
app.route('/healthz').get(healthCheck);
