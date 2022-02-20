import { Component, OnInit } from '@angular/core';
import { SampleProductsData } from 'src/app/shared/constant/proucts';

@Component({
  selector: 'medes-filter-components',
  templateUrl: './filter-components.component.html',
  styleUrls: ['./filter-components.component.scss']
})
export class FilterComponentsComponent implements OnInit {
  selected = {};
  sampledata = [];
  colormap = {
      'blue-sky': '#66ccdd',
      maroon: '#bb6a66',
      brown: '#6b6a6b',
      black: '#000000',
      purple: '#6a66bb',
      gold: '#b6ab66'
  }

importmodule = `import { MdsFilterModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsFilterModule
  ]
})`;

  constructor() { }

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
