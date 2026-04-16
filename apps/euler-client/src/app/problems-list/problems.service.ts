import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { EMPTY } from 'rxjs/internal/observable/empty';

import { ApiProblem, Problem, Solution } from './problem';
import { UrlBuilderService } from './url-builder.service';


@Injectable()
export class ProblemsService {
  private http = inject(HttpClient);
  private urlBuilder = inject(UrlBuilderService);
  private problems: Problem[];

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

}
