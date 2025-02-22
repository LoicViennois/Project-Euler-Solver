import type { Request, RequestHandler, Response } from 'express';
import * as fs from 'fs';

export const getCode: RequestHandler = (req: Request, res: Response) => {
  const name: string = req.params.id;
  let filePath: string = null;

  const pathPrefix = './src/problems/';

  console.log(`Get code for ${name}`);

  const regex = /^euler(\d{3})$/;

  if (name === 'maths' || name === 'utils') {
    // maths or utils
    filePath = `${pathPrefix}/${name}.ts`;
  } else if (regex.test(name)) {
    // problems
    const id = +regex.exec(name)[1];
    if (id <= 20) {
      filePath = `${pathPrefix}/001-020/${name}.ts`;
    } else if (id <= 40) {
      filePath = `${pathPrefix}/021-040/${name}.ts`;
    } else if (id <= 60) {
      filePath = `${pathPrefix}/041-060/${name}.ts`;
    } else if (id <= 80) {
      filePath = `${pathPrefix}/061-080/${name}.ts`;
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
