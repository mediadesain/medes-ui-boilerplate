import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.scss']
})
export class FilterCheckboxComponent implements OnInit {
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
  
  constructor() { }

  ngOnInit(): void {
  }

}
