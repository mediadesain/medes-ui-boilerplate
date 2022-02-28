import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medes-prismjs-highlight',
  templateUrl: './prismjs-highlight.component.html',
  styleUrls: ['./prismjs-highlight.component.scss']
})
export class PrismjsHighlightComponent implements OnInit {
  importmodule = `import { MdsHightlightPrismModule } from 'medes-ui';
@NgModule({
  declarations: [ ... ],
  imports: [
    MdsHightlightPrismModule
  ]
})`;
importcompnent = `<mds-hightlight-prism [code]="importmodule" language="typescript"></mds-hightlight-prism>`;

  constructor() { }

  ngOnInit(): void {
  }

}
