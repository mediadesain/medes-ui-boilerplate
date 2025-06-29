export function constructComponentCode(importMdsCore: string, importMdsAngular: string, imports?: string, providers?: string, valuesComponent?: string): string {
return `
import { Component } from '@angular/core';
import { ${importMdsCore} } from '@mediadesain/core';
import { ${importMdsAngular} } from '@mediadesain/angular';

@Component({
  selector: 'mds-app',
  templateUrl: './mds-app.component.html',
  styleUrls: ['./mds-app.component.scss'],
  standalone: true,
  imports: [${imports}]${providers ? `,
  providers: [${providers}]`: ''}
})

export class MdsAppComponent {
  ${valuesComponent}
}`;
}