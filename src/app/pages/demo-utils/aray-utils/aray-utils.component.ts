import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
/*-- Import medes-ui --*/ import { MdsHightlightPrismModule } from 'medes-ui';
// /*-- Medes Team Only --*/ import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-aray-utils',
  templateUrl: './aray-utils.component.html',
  styleUrls: ['./aray-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class ArrayUtilsComponent {
import = `
import { MdsArrayUtils } from 'medes-ui';`;
demo = `
MdsArrayUtils.countUniqueValues(["Web","Web","Web","Web","iOS","iOS","Android","Android","Android"])
// output {Web: 4, iOS: 2, Android: 3}

MdsArrayUtils.sumValues([5,3,4,56,6,7]);
// output 81

//sample data
data = [
  { "manufucture": "audi", "model": "r8", "year": "2012" },
  { "manufucture": "audi", "model": "rs5", "year": "2013" },
  { "manufucture": "ford", "model": "mustang", "year": "2012" },
  { "manufucture": "ford", "model": "fusion", "year": "2015" },
  { "manufucture": "kia", "model": "optima", "year": "2012" }
]

MdsArrayUtils.filterMultiple(this.data, manufucture, ['ford','audi']);
/* output
[
  {manufucture: 'audi', model: 'r8', year: '2012'}
  {manufucture: 'audi', model: 'rs5', year: '2013'}
  {manufucture: 'ford', model: 'mustang', year: '2012'}
  {manufucture: 'ford', model: 'fusion', year: '2015'}
]*/

MdsArrayUtils.groupValues(this.data, manufucture);
/* output
{
  audi: [
    { "manufucture": "audi", "model": "r8", "year": "2012" },
    { "manufucture": "audi", "model": "rs5", "year": "2013" },
  ],
  ford: [
    { "manufucture": "ford", "model": "mustang", "year": "2012" },
    { "manufucture": "ford", "model": "fusion", "year": "2015" },
  ]
}*/

MdsArrayUtils.arrayTolistObject(this.data, manufucture);
/* output
{
  audi: {manufucture: 'audi', model: 'rs5', year: '2013'}
  ford: {manufucture: 'ford', model: 'fusion', year: '2015'}
  kia: {manufucture: 'kia', model: 'optima', year: '2012'}
}*/`;


data = [
  { manufucture: 'audi', model: 'r8', year: '2012' },
  { manufucture: 'audi', model: 'rs5', year: '2013' },
  { manufucture: 'ford', model: 'mustang', year: '2012' },
  { manufucture: 'ford', model: 'fusion', year: '2015' },
  { manufucture: 'kia', model: 'optima', year: '2012' }
];

  // constructor() { }


}
