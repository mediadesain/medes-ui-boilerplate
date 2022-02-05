import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'medes-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
})
export class FilterCheckboxComponent implements OnInit {

  componentdemo = `<mds-filter-checkbox
  class="d-flex flex-column"
  [titlegroup]="'Filter by'"
  [classgroup]="'mb-3'"
  [resetgroup]="'✕'"
  [reset]="'Reset All'"
  [filterData]="sampledata"
  [filterBy]="['category','type']"
  [filterSelected]="filteritems"
>
</mds-filter-checkbox>`;

importmodule = `import { MdsFilterCheckboxModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsFilterCheckboxModule
  ]
})`;
  sampledata: any = [
    { category: 'eastern food', type: 'food' },
    { category: 'western food', type: 'drink' },
    { category: 'middle east food', type: 'snack' },
    { category: 'eastern food', type: 'drink' },
    { category: 'western food', type: 'snack,food,branch' }
  ];

  keys: string[] = ['category', 'type'];

  filteritems: {[key: string]: string[]} = {};

  constructor() {}

  ngOnInit(): void {
  }

}
