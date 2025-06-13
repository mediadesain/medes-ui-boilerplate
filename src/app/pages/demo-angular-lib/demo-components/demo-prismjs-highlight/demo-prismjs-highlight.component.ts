import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsHightlightPrismModule }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-prismjs-highlight',
  templateUrl: './demo-prismjs-highlight.component.html',
  styleUrls: ['./demo-prismjs-highlight.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class DemoPrismjsHighlightComponent {
  tableHeader = [
    {prop: 'attribute', title: 'Function'},
    {prop: 'value', title: 'Data Type'},
    {prop: 'default', title: 'Default Value'},
    {prop: 'description', title: 'Description'},
    {prop: 'version', title: 'Support Version'}
  ];

  tableContent = [
    {attribute: 'code', value: 'string', default: '', description: 'Code to hightlight', version: 'medes-ui@1.13.0 >'},
    {attribute: 'language', value: 'Spesific string, options are:<br/><i>\'html\' | \'markup\' | \'javascript\' | \'typescript\' | \'java\' | \'css\' | \'sass\' | \'scss\' | \'ruby\' | \'swift\' | \'sql\' | \'python\'</i> ', default: '', description: 'Language type to show as prevew code',version: 'medes-ui@1.13.0 >'},
    {attribute: 'heightHighlight?', value: 'number', default: '∞', description: 'Maximal height', version: 'medes-ui@1.14.1 >'}
  ];

  importModuleCode = `
import { MdsHightlightPrismModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsHightlightPrismModule
  ]
})`;
importcompnent = `
<mds-hightlight-prism [code]="importModuleCode" language="javascript" [heightHighlight]="500"></mds-hightlight-prism>`;

  // constructor() { }


}
