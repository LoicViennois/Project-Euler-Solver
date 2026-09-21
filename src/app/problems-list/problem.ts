import { signal } from '@angular/core';

export enum Status {
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
  readonly id: number;
  readonly name: string;
  private readonly status = signal<Status>(Status.toSolve);
  private readonly pSolution = signal<Solution | undefined>(undefined);

  constructor(p: ApiProblem) {
    this.id = p.id;
    this.name = p.name;
    this.status.set(p.status);
  }

  get solution(): Solution | undefined {
    return this.pSolution();
  }

  set solution(s: Solution | undefined) {
    this.pSolution.set(s);
    if (s) {
      this.status.set(Status.solved);
    }
  }

  get isNotAvailable(): boolean {
    return this.status() === Status.notAvailable;
  }

  get isAvailable(): boolean {
    return this.status() !== Status.notAvailable;
  }

  get isSolved(): boolean {
    return this.status() === Status.solved;
  }

  get isSolving(): boolean {
    return this.status() === Status.solving;
  }

  set isSolving(v: boolean) {
    if (v) {
      this.status.set(Status.solving);
    }
  }

  get isToSolve(): boolean {
    return this.status() === Status.toSolve;
  }
}
