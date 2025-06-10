import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterSwatchComponent, MdsHightlightPrismModule }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';
import { SelectedFilterInterface }
/*-public-mode-*/ from 'medes-ui/lib/mds-filter/mds-filter.interface';
//*-dev-mode-*/ from 'projects/medes-ui/src/lib/mds-filter/mds-filter.interface';

@Component({
  selector: 'mds-swatch',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsFilterSwatchComponent]
})
export class SwatchComponent implements OnInit {
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

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
