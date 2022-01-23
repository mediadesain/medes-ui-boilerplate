import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
})
export class FilterCheckboxComponent implements OnInit {

  constructor(
    public router: Router
  ) {}

  ngOnInit(): void {
  }

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
</mds-filter-checkbox>`

  sampledata = [
    {category: 'eastern food', type:'food'},
    {category: 'western food', type:'drink'},
    {category: 'middle east food', type:'snack'},
    {category: 'eastern food', type:'drink'},
    {category: 'western food', type:'snack'}
  ];
  
  filteritems = {
    category:[ 'eastern food', 'western food'],
    type:['food', 'drink']
  }

  reset(filter){
    this.router.navigate([], { queryParams: {} })
  }
}
