export function constructAngularCode(importMdsCore: string, importMdsAngular: string, imports?: string, providers?: string, valuesComponent?: string): string {
return `
import { Component } from '@angular/core';
import { ${importMdsCore} } from '@medes-ui/core';
import { ${importMdsAngular} } from '@medes-ui/angular';

@Component({
  selector: 'mds-app',
  templateUrl: './mds-app.component.html',
  styleUrls: ['./mds-app.component.scss'],
  imports: [${imports}]${providers ? `,
  providers: [${providers}]`: ''}
})

export class MdsAppComponent {
  ${valuesComponent}
}`;}

export function constructReactCode(importMdsCore: string, importMdsReact: string, valuesComponent?: string): string {
return `
import React from 'react';
import { ${importMdsCore} } from '@medes-ui/core';
import { ${importMdsReact} } from '@medes-ui/react';

function MdsApp() {
  ${valuesComponent}
}
  
export default MdsApp;`;}