import { Request, RequestHandler, Response } from 'express';
import { execTime } from '../../problems/utils';
import { Solution } from '../models/solution';
import { problems } from './problems';

export const solve: RequestHandler = (req: Request, res: Response) => {
  const id = +req.params.id;

  console.log(`Solving problem ${id}`);

  // No solution
  if (!problems.has(id)) {
    console.log(`Problem ${id} not available`);
    res.status(500).json('Not solved');
    return;
  }

  // A solution
  const euler = problems.get(id);
  const [v, t] = execTime(euler);
  const solution: Solution = {
    time: t,
    value: v,
  };

  console.log(`Problem ${id} solved`);

  res.json(solution);
};
