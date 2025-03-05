import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class UrlBuilderService {
  private readonly baseUrl = environment.apiUrl;
  private readonly problemsEndpoint = 'problems';

  getProblemsUrl(): string {
    return `${this.baseUrl}/${this.problemsEndpoint}`;
  }

  getSolveUrl(id: number): string {
    return `${this.baseUrl}/${this.problemsEndpoint}/${id}/solve`;
  }

  getCodeUrl(id: number): string {
    return `${this.baseUrl}/${this.problemsEndpoint}/${id}/code`;
  }
}
