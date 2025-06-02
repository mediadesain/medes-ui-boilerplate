import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
/*-- Import medes-ui --*/ import { MdsHightlightPrismModule } from 'medes-ui';
// /*-- Medes Team Only --*/ import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-prismjs-highlight',
  templateUrl: './prismjs-highlight.component.html',
  styleUrls: ['./prismjs-highlight.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class DemoPrismjsHighlightComponent {
  importmodule = `
import { MdsHightlightPrismModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsHightlightPrismModule
  ]
})`;
importcompnent = `
<mds-hightlight-prism [code]="importmodule" language="typescript" [heightHighlight]="500"></mds-hightlight-prism>`;

  // constructor() { }


}
