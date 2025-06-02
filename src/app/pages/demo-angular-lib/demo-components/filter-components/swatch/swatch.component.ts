import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
/*-- Import medes-ui --*/ import { MdsFilterSwatchComponent, MdsHightlightPrismModule } from 'medes-ui';
/*-- Import medes-ui --*/ import { SelectedFilterInterface } from 'medes-ui/lib/mds-filter/mds-filter.interface';
// /*-- Medes Team Only --*/ import { MdsFilterSwatchComponent, MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';
// /*-- Medes Team Only --*/ import { SelectedFilterInterface } from 'projects/medes-ui/src/lib/mds-filter/mds-filter.interface';

@Component({
  selector: 'mds-swatch',
  templateUrl: './swatch.component.html',
  styleUrls: ['./swatch.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule, MdsFilterSwatchComponent]
})
export class SwatchComponent implements OnInit {
  sampledata: ProductDataModel[];
  selected: SelectedFilterInterface = {};
  peropKey = 'color';
  colormap: {[key: string]: string} = {
    'blue-sky': '#66ccdd',
    maroon: '#bb6a66',
    brown: '#6b6a6b',
    black: '#000000',
    purple: '#6a66bb',
    gold: '#b6ab66'
  };

  importmodule = `
import { MdsFilterModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsFilterModule  // Ignore importing module if using standalone component
  ]
})

export class MyModule { }`;

samplecomponent = `
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
  // Sample datas, key to filter and filter selected
  sampledata: ProductDataModel[] = [
    { "brand": "puma", "category": "tshirt", "color": "brown", "gender": "unisex", "id": "62122871cb242f1f01d916f9", "picture": "https://picsum.photos/400?image=172", "price": 1851.141, "name": "Herminia Ray" },
    { "brand": "puma", "category": "accesoriss", "color": "purple,brown", "gender": "women", "id": "621228716682ceb404a69e75", "picture": "https://picsum.photos/400?image=702", "price": 1513.896, "name": "Brittany Neal" },
    { "brand": "puma", "category": "tshirt", "color": "blue sky", "gender": "men", "id": "62122871b37e4c94421a90b9", "picture": "https://picsum.photos/400?image=665", "price": 1879.761, "name": "Mamie Ballard" },
    ...
  ]; // Full data https://github.com/mediadesain/medes-ui-boilerplate/blob/main/src/app/shared/constant/products.ts
  peropKey: string = 'color';
  selected: SelectedFilterInterface = ${JSON.stringify(this.selected)};
  colormap: {[key: string]: string} = {
    'blue-sky': '#66ccdd',
    maroon: '#bb6a66',
    brown: '#6b6a6b',
    black: '#000000',
    purple: '#6a66bb',
    gold: '#b6ab66'
  };
...
}`;
componentdemo = `
<!-- Filter Swatch Component -->
<mds-filter-swatch
  [titlegroup]="'Filter by Color'"
  [filterData]="sampledata"
  [filterBy]="peropKey"
  [filterSelected]="selected"
  [swatchMapping]="colormap"
  [swatchSize]="30"
  [swatchRadius]="25"
></mds-filter-swatch>`;

  ngOnInit(): void {
    this.sampledata = SampleProductsData.data;
  }

}
