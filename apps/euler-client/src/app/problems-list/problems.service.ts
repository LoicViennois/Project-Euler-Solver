import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EMPTY } from 'rxjs/internal/observable/empty';

import { ApiProblem, Problem, Solution } from './problem';
import { codeUrl, problemsUrl, solveUrl } from '../urls';


@Injectable()
export class ProblemsService {
  private problems: Problem[];
  private code = new Map<number, string>();

  constructor(private http: HttpClient) {
  }

  solve(problem: Problem): Observable<Solution> {
    if (problem.isNotAvailable) {
      return EMPTY;
    }
    problem.isSolving = true;
    const url = `${solveUrl}/${problem.id}`;
    return this.http.get<Solution>(url);
  }

  getProblems(): Observable<Problem[]> {
    if (this.problems) {
      return of(this.problems);
    }
    return this.http.get<ApiProblem[]>(problemsUrl).pipe(
      map(pList => {
        this.problems = pList.map(p => new Problem(p));
        return this.problems;
      }),
    );
  }

  getCode(id: number): Observable<string> {
    if (this.code.has(id)) {
      return of(this.code.get(id));
    }
    const url = `${codeUrl}/${id}`;
    return this.http.get<string>(url).pipe(
      map(code => {
        this.code.set(id, code);
        return code;
      }),
    );
  }

}
