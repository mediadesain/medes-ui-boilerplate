import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LibraryTypeService {
    selected = 'angular';

    constructor(){
        if (!localStorage.getItem('libraryType')) {
            localStorage.setItem('libraryType', 'angular');
        }
        this.selected = localStorage.getItem('libraryType');
    }

    setType(value: string): void {
        this.selected = value;
        localStorage.setItem('libraryType', value);
    }
}