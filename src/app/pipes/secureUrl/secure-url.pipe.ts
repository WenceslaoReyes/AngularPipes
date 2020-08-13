import {Pipe, PipeTransform} from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
    name : 'secureUrl'
})
export class SecureUrlPipe implements PipeTransform{
    constructor(private domSanitizer: DomSanitizer)  {        
    }
    transform(value: string, ...args: any[]) : SafeResourceUrl {
        return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
    }
}