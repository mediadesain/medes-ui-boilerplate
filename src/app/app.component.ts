import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


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

}
