import { Request, RequestHandler, Response } from 'express'

export const healthCheck: RequestHandler = (req: Request, res: Response) => {
  console.log('Health check')
  return res.send('Euler server is running')
}
