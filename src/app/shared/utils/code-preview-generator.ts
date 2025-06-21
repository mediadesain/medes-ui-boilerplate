
export function constructImportModuleCode(modules: string): string {
return `
import { NgModule } from '@angular/core';
import { ${modules} } from 'medes-ui';

@NgModule({
    declarations: [ ... ],
    imports: [
        ${modules}
    ]
})
}

export class MyModule { }`;
}

export function constructComponentCode(importMdsUi: string, valuesComponent: string): string {
return `
import { Component } from '@angular/core';
import { ${importMdsUi} } from 'medes-ui';

@Component({
  selector: 'mds-app',
  templateUrl: './mds-app.component.html',
  styleUrls: ['./mds-app.component.scss'],
  standalone: true
})

export class MdsAppComponent {
  ${valuesComponent}
}`;
}