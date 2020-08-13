import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidePassword'
})
export class HidePasswordPipe implements PipeTransform {

  transform(value: string, activated : boolean): string {
    // if(activated)
    // {
    //   let result:string = Array.from(value).map(letter => '*').join('');
    //   return result;
    // }
    // return value;
    return (activated) ? '*'.repeat(value.length) : value;
  }

}
