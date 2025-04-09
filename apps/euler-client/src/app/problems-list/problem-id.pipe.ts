import { Pipe, PipeTransform } from '@angular/core';
import { Problem } from './problem';

@Pipe({
  name: 'firstId',
  standalone: false,
})
export class FirstIdPipe implements PipeTransform {

  transform(problems: Problem[]): number {
    return problems[0].id;
  }

}

@Pipe({
  name: 'lastId',
  standalone: false,
})
export class LastIdPipe implements PipeTransform {

  transform(problems: Problem[]): number {
    return problems[problems.length - 1].id;
  }

}
