import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'medes-checkboxes',
  templateUrl: './checkboxes.component.html',
  styleUrls: ['./checkboxes.component.scss']
})
export class CheckboxesComponent implements OnInit {
componentdemo = `<!-- Filter Checkboxes Component -->
<mds-filter-checkbox
    [titlegroup]="'Filter by'"
    [filterData]="sampledata"
    [filterBy]="['gender','category']"
    [filterSelected]="selected"
    [reset]="'✕'"
    [hideCounter]="false"
></mds-filter-checkbox>`;
  constructor() { }

  ngOnInit(): void {
  }

}
