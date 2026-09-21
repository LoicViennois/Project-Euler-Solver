import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';

import { allProblems } from '../../problems/index';
import { ProblemFunction } from '../../problems/types/problem-function';
import { Problem, Solution, Status } from './problem';

@Injectable()
export class ProblemsService {
  private http = inject(HttpClient);
  private problems: Problem[] | null = null;
  private code = new Map<number, string>();

  getProblems(): Observable<Problem[]> {
    if (this.problems) {
      return of(this.problems);
    }
    this.problems = allProblems.map(
      (p) =>
        new Problem({
          id: p.id,
          name: p.solver ? p.solver.name : '',
          status: p.solver ? Status.toSolve : Status.notAvailable,
        }),
    );
    return of(this.problems);
  }

  solve(problem: Problem): Observable<Solution> {
    if (problem.isNotAvailable) {
      return EMPTY;
    }
    problem.isSolving = true;
    return timer(0).pipe(
      map(() => {
        const solution = this.solveProblem(problem.id);
        problem.solution = solution;
        return solution;
      }),
    );
  }

  getCode(id: number): Observable<string> {
    if (this.code.has(id)) {
      return of(this.code.get(id)!);
    }
    const padId = id.toString().padStart(3, '0');
    return this.http
      .get(`assets/problems/euler${padId}.ts`, { responseType: 'text' })
      .pipe(
        map((code) => {
          this.code.set(id, code);
          return code;
        }),
      );
  }

  private solveProblem(id: number): Solution {
    const problem = allProblems.find((ps) => ps.id === id);

    if (!problem) {
      throw new Error(`Problem ${id} is not found`);
    }

    if (!problem.solver) {
      throw new Error(`Problem ${id} is not solved yet`);
    }

    const [value, time] = this.executionTime(problem.solver);

    return {
      time,
      value,
    };
  }

  private executionTime(func: ProblemFunction): [number, string] {
    const start = performance.now();
    const result = func();
    const end = performance.now();
    return [result, this.millisecondsToTimeString(end - start)];
  }

  private millisecondsToTimeString(milliseconds: number): string {
    const ms = Math.floor(milliseconds % 1000);
    const totalSecs = Math.floor(milliseconds / 1000);
    const secs = totalSecs % 60;
    const mins = Math.floor(totalSecs / 60);

    const s1 = mins ? `${mins}m ` : '';
    const s2 = secs ? `${secs}s ` : '';
    const s3 = ms ? `${ms}ms` : '<1ms';
    return s1 + s2 + s3;
  }
}
