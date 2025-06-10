import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterCheckboxComponent, MdsHightlightPrismModule }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';
import { SelectedFilterInterface }
/*-public-mode-*/ from 'medes-ui/lib/mds-filter/mds-filter.interface';
//*-dev-mode-*/ from 'projects/medes-ui/src/lib/mds-filter/mds-filter.interface';

@Component({
  selector: 'mds-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsFilterCheckboxComponent]
})

export class CheckboxesComponent {
  // Required
  sampledata: ProductDataModel[] = SampleProductsData.data; // filterData
  peropKey: string = 'category'; // filterBy
  selected: SelectedFilterInterface = {}; // filterSelected

  // Optional Configuration
  label: string = 'Filter by Category'; // titlegroup
  resetElement: string = '✕' // reset
  isHideCounter: boolean = false; // hideCounter
  
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
import { MdsFilterCheckboxComponent } from 'medes-ui';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';

@Component({
  selector: 'mds-my-component',
  templateUrl: './mds-my-component.component.html',
  styleUrls: ['./mds-my-component.component.scss'],
  standalone: true,
  imports: [MdsFilterCheckboxComponent] // import here if standalone component is true
})

export class MyComponent {
  ...
  //----- Required -----
  // filterData
  sampledata: ProductDataModel[] = [
    { "brand": "puma", "category": "tshirt", "color": "brown", "gender": "unisex", "id": "62122871cb242f1f01d916f9", "picture": "https://picsum.photos/400?image=172", "price": 1851.141, "name": "Herminia Ray" },
    { "brand": "puma", "category": "accesoriss", "color": "purple,brown", "gender": "women", "id": "621228716682ceb404a69e75", "picture": "https://picsum.photos/400?image=702", "price": 1513.896, "name": "Brittany Neal" },
    { "brand": "puma", "category": "tshirt", "color": "blue sky", "gender": "men", "id": "62122871b37e4c94421a90b9", "picture": "https://picsum.photos/400?image=665", "price": 1879.761, "name": "Mamie Ballard" },
    ... //Full data https://github.com/mediadesain/medes-ui-boilerplate/blob/main/src/app/shared/constant/products.ts
  ];
  // filterBy
  peropKey: string = 'category';
  // filterSelected
  selected: SelectedFilterInterface = {};

  //----- Optional Configuration -----
  label: string = 'Filter by Category'; // titlegroup
  resetElement: string = '✕' // reset
  isHideCounter: boolean = false; // hideCounter
  ...
}`;
htmlCode = `
<!-- Filter Checkboxes Component -->
<mds-filter-checkbox
  [filterData]="sampledata"
  [filterBy]="peropKey"
  [filterSelected]="selected"
  [titlegroup]="label"
  [reset]="resetElement"
  [hideCounter]="isHideCounter"
></mds-filter-checkbox>`;

}
