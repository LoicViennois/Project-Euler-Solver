import { Request, RequestHandler, Response } from 'express'
import { problems as p1 } from '../../problems/001-020/list'
import { problems as p2 } from '../../problems/021-040/list'
import { problems as p3 } from '../../problems/041-060/list'
import { problems as p4 } from '../../problems/061-080/list'
import { Problem, Status } from '../models/problem'

const problemsList: Problem[] = []
export const problems = new Map<number, () => number>()

const pbCreator = (f, n) => {
  const pb: Problem = {
    id: n,
    name: f ? f.name : null,
    status: f ? Status.toSolve : Status.notAvailable,
  }
  problemsList.push(pb)
  problems.set(pb.id, f)
}

p1.forEach(pbCreator)
p2.forEach(pbCreator)
p3.forEach(pbCreator)
p4.forEach(pbCreator)

export const getProblems: RequestHandler = (req: Request, res: Response) => {
  console.log('Get problems')
  return res.json(problemsList)
}
