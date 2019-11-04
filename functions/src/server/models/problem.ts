export enum Status {
  toSolve,
  notAvailable,
}

export class Problem {
  id: number
  name: string
  status: Status
}
