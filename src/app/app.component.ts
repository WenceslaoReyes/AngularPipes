import { Component, resolveForwardRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullName  :string   = 'wEnceSlaO ReYeS espINoZa';
  password:string   = 'wenceslao+reyes';
  name      :string   = 'Wenceslao';
  url       :string   = "https://www.youtube.com/embed/2lUZ58Zyu3w";
  language  :string   = 'en';
  pi        : number  = Math.PI;
  percent   : number  = 0.234;
  pay       : number  = 123.4;
  arr       :Array<number> = [1,2,3,4,5,6,7,8,9,10];
  date      :Date = new Date();
  activated :boolean = false;
  avenger   :any = 
  {
    name:'spider-man',
    age:34,
    brand: 'MV',
    address: {
      street: 'hero',
      number:29
    }
  };

  promise     :Promise<string> = new Promise<string>((resolve,reject) => {
    setTimeout(()=>{
      resolve('Transmission was finished properly');
    },4500);
  });

  ChangeLanguage(lang:string):any{
    this.language = lang;
  }
}

