import { PipeTransform } from '@angular/core';
export declare class SearchPipe implements PipeTransform {
    transform(items: any[], search: {
        objkey: string;
        keyword: string;
    }): any[];
}
