import { Pipe, PipeTransform } from '@angular/core'
import * as hljs from 'highlight.js'

@Pipe({
  name: 'formatCode'
})
export class FormatCodePipe implements PipeTransform {

  transform (value: string, lang?: string): any {
    if (lang) {
      return hljs.highlight(lang, value).value
    } else {
      return hljs.highlightAuto(value).value
    }
  }

}
