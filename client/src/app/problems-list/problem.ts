enum Status {
  toSolve,
  notAvailable,
  solving,
  solved,
}

export class Solution {
  time: string;
  value: number;
}

export class ApiProblem {
  id: number;
  name: string;
  status: Status;
}

export class Problem {
  id: number;
  name: string;
  private status: Status;

  constructor(p: ApiProblem) {
    this.id = p.id;
    this.name = p.name;
    this.status = p.status;
  }

  private pSolution: Solution;

  get solution(): Solution {
    return this.pSolution;
  }

  set solution(s: Solution) {
    this.pSolution = s;
    this.status = Status.solved;
  }

  get isNotAvailable(): boolean {
    return this.status === Status.notAvailable;
  }

  get isAvailable(): boolean {
    return this.status !== Status.notAvailable;
  }

  get isSolved(): boolean {
    return this.status === Status.solved;
  }

  get isSolving(): boolean {
    return this.status === Status.solving;
  }

  set isSolving(v: boolean) {
    if (v) {
      this.status = Status.solving;
    }
  }

  get isToSolve(): boolean {
    return this.status === Status.toSolve;
  }
}
