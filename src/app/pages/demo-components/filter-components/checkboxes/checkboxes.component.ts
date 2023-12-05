import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterCheckboxComponent, MdsHightlightPrismModule } from 'medes-ui';
import { SelectedFilterInterface } from 'medes-ui/lib/mds-filter/mds-filter.interface';

@Component({
  selector: 'mds-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsFilterCheckboxComponent]
})

export class CheckboxesComponent implements OnInit {
  sampledata: ProductDataModel[];
  selected: SelectedFilterInterface = {};
  peropKeys: string[] = ['gender', 'category'];

samplecomponent = `
import { MdsFilterCheckboxComponent } from 'medes-ui';

@Component({
  selector: 'mds-my-component',
  templateUrl: './mds-my-component.component.html',
  styleUrls: ['./mds-my-component.component.scss'],
  standalone: true,
  imports: [MdsFilterCheckboxComponent] // import here if standalone component is true
})

export class MyComponent {
...
  // Sample datas, keys to filter and filter selected
  sampledata: ProductDataModel[] = [
    { "brand": "puma", "category": "tshirt", "color": "brown", "gender": "unisex", "id": "62122871cb242f1f01d916f9", "picture": "https://picsum.photos/400?image=172", "price": 1851.141, "name": "Herminia Ray" },
    { "brand": "puma", "category": "accesoriss", "color": "purple,brown", "gender": "women", "id": "621228716682ceb404a69e75", "picture": "https://picsum.photos/400?image=702", "price": 1513.896, "name": "Brittany Neal" },
    { "brand": "puma", "category": "tshirt", "color": "blue sky", "gender": "men", "id": "62122871b37e4c94421a90b9", "picture": "https://picsum.photos/400?image=665", "price": 1879.761, "name": "Mamie Ballard" },
    ...
  ]; // Full data https://github.com/mediadesain/medes-ui-boilerplate/blob/main/src/app/shared/constant/products.ts
  selected: SelectedFilterInterface = ${JSON.stringify(this.selected)};
  peropKeys: string[] = ['gender','category'];
...
}`;
componentdemo = `
<!-- Filter Checkboxes Component -->
<mds-filter-checkbox
  [titlegroup]="'Filter by'"
  [filterData]="sampledata"
  [filterBy]="peropKeys"
  [filterSelected]="selected"
  [reset]="'✕'"
  [hideCounter]="false"
></mds-filter-checkbox>`;

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
