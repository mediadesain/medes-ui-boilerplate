import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterSwatchComponent, MdsHightlightPrismModule, SelectedFilterInterface }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-swatch',
  templateUrl: './demo-swatch.component.html',
  styleUrls: ['./demo-swatch.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsFilterSwatchComponent]
})
export class DemoSwatchComponent {
  //----- Required -----
  // filterData
  sampledata: ProductDataModel[];
  // filterBy
  peropKey: string;
  // filterSelected
  selected: SelectedFilterInterface = {};
  // swatchMapping
  colormap: {[key: string]: string};

  //----- Optional Configuration -----
  label: string; // titlegroup by default Color
  totalSize: number; // swatchSize by default 30
  totalRadius: number; // swatchRadius by default 0

  constructor(){
    this.sampledata = SampleProductsData.data;
    this.peropKey = 'color';
    this.colormap = {
      'blue-sky': '#66ccdd',
      'maroon': '#bb6a66',
      'brown': '#6b6a6b',
      'black': '#000000',
      'purple': '#6a66bb',
      'gold': '#b6ab66'
    };
  }

  importModuleCode = `
import { MdsFilterModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsFilterModule  // Ignore importing module if using standalone component
  ]
})

export class MyModule { }`;

componentCode = `
import { MdsFilterSwatchComponent } from 'medes-ui';

@Component({
  selector: 'mds-my-component',
  templateUrl: './mds-my-component.component.html',
  styleUrls: ['./mds-my-component.component.scss'],
  standalone: true,
  imports: [MdsFilterSwatchComponent] // import here if standalone component is true
})

export class MyComponent {
...
  //----- Required -----
  // filterData
  sampledata: ProductDataModel[];
  // filterBy
  peropKey: string = 'color';
  // filterSelected
  selected: SelectedFilterInterface = {};
  // swatchMapping
  colormap: {[key: string]: string} = {
    'blue-sky': '#66ccdd',
    'maroon': '#bb6a66',
    'brown': '#6b6a6b',
    'black': '#000000',
    'purple': '#6a66bb',
    'gold': '#b6ab66'
  };

  //----- Optional Configuration -----
  label: string; // titlegroup by default Color
  totalSize: number; // swatchSize by default 30
  totalRadius: number; // swatchRadius by default 0
...
}`;
htmlCode = `
<!-- Medes Filter Swatch Component -->
<mds-filter-swatch
  [filterData]="sampledata"
  [filterBy]="peropKey"
  [filterSelected]="selected"
  [swatchMapping]="colormap"
  [titlegroup]="label"
  [swatchSize]="totalSize"
  [swatchRadius]="totalRadius"
></mds-filter-swatch>`;

}
