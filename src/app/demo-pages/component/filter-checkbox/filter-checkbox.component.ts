import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'medes-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
})
export class FilterCheckboxComponent implements OnInit {

componentdemo = `<!-- Multiple Filter Component -->
<mds-filter-checkbox
  class="d-flex flex-column"
  [titlegroup]="'Filter by'"
  [classgroup]="'mb-3'"
  [resetgroup]="'✕'"
  [reset]="'Reset All'"
  [filterData]="sampledata"
  [filterBy]="keys"
  [filterSelected]="filteritems"
>
</mds-filter-checkbox>

<!-- Multiple Filter Pipe -->
<small *ngIf="(sampledata|filter:filteritems).length === 0 && (filteritems|json)=='{}'">No Data Found</small>
<small *ngIf="(sampledata|filter:filteritems).length === 0 && (filteritems|json)!='{}'">Filtered data not found</small>
<ul *ngIf="(sampledata|filter:filteritems).length > 0">
    <li *ngFor="let item of (sampledata|filter:filteritems)">{{item.type}} - {{item.category}}</li>
</ul>`;

importmodule = `import { MdsFilterCheckboxModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsFilterCheckboxModule
  ]
})`;
  // Sample Data
  sampledata: any = [
    { category: 'eastern food', type: 'food', country: 'unknow' },
    { category: 'western food', type: 'drink', country: 'unknow' },
    { category: 'middle east food', type: 'snack', country: 'unknow' },
    { category: 'eastern food', type: 'drink', country: 'unknow' },
    { category: 'western food', type: 'snack,food,branch', country: 'unknow' }
  ];
  // Filter category prop/key 'country' only have one value which is 'unknow', filter list will not shwoing 
  keys: string[] = ['category', 'type','country'];
  // Filter key/prop selected
  filteritems: {[key: string]: string[]} = {};


samplecomponent = `export class MyComponent implements OnInit {
...
  // Sample datas, keys to filter and filter selected
  sampledata: any[] = ${JSON.stringify(this.sampledata)}
  keys: string[] = ${JSON.stringify(this.keys)};
  filteritems: {[key: string]: string[]} = ${JSON.stringify(this.filteritems)};
...
}`

  constructor() {}

  ngOnInit(): void {
  }

}
