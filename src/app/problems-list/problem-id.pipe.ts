import { Pipe, PipeTransform } from '@angular/core'
import { Problem } from './problem'

@Pipe({
  name: 'firstId'
})
export class FirstIdPipe implements PipeTransform {

  transform (problems: Problem[]): any {
    return problems[0].id
  }

}

@Pipe({
  name: 'lastId'
})
export class LastIdPipe implements PipeTransform {

  transform (problems: Problem[]): any {
    return problems[problems.length - 1].id
  }

}
