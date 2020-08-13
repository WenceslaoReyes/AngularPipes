import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: string, all:boolean = true): string {
    console.log(typeof(all));
    const newValue = value.toLocaleLowerCase();
    let words:string[] = newValue.split(' ');
    if(all){
      words = words.map(word => {
        return word[0].toUpperCase() + word.substring(1);
      });
      return words.join(' ');
    }
    else{
      words[0] = words[0][0].toUpperCase() + words[0].substring(1);
      return words.join(' ');
    }
  }

}
