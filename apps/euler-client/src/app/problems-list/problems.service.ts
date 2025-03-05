import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EMPTY } from 'rxjs/internal/observable/empty';

import { ApiProblem, Problem, Solution } from './problem';
import { UrlBuilderService } from './url-builder.service';


@Injectable()
export class ProblemsService {
  private problems: Problem[];
  private code = new Map<number, string>();

  constructor(private http: HttpClient,
              private urlBuilder: UrlBuilderService) {
  }

  solve(problem: Problem): Observable<Solution> {
    if (problem.isNotAvailable) {
      return EMPTY;
    }
    problem.isSolving = true;
    const url = this.urlBuilder.getSolveUrl(problem.id);
    return this.http.get<Solution>(url);
  }

  getProblems(): Observable<Problem[]> {
    if (this.problems) {
      return of(this.problems);
    }
    const url = this.urlBuilder.getProblemsUrl();
    return this.http.get<ApiProblem[]>(url).pipe(
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
    const url = this.urlBuilder.getCodeUrl(id);
    return this.http.get<string>(url).pipe(
      map(code => {
        this.code.set(id, code);
        return code;
      }),
    );
  }

}
