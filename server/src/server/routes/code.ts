import { Request, RequestHandler, Response } from 'express';
import * as fs from 'fs';

export const getCode: RequestHandler = (req: Request, res: Response) => {
  const name: string = req.params.id;
  let filePath: string = null;

  console.log(`Get code for ${name}`);

  const regex = /^euler(\d{3})$/;

  if (name === 'maths' || name === 'utils') {
    // maths or utils
    filePath = `./src/problems/${name}.ts`;
  } else if (regex.test(name)) {
    // problems
    const id = +regex.exec(name)[1];
    if (id <= 20) {
      filePath = `./src/problems/001-020/${name}.ts`;
    } else if (id <= 40) {
      filePath = `./src/problems/021-040/${name}.ts`;
    } else if (id <= 60) {
      filePath = `./src/problems/041-060/${name}.ts`;
    } else if (id <= 80) {
      filePath = `./src/problems/061-080/${name}.ts`;
    }
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.log(`Code for ${name} not found`);
      res.status(500).json('Not found');
      return;
    }
    res.json(data);
    console.log(`Code for ${name} sent`);
  });

};
