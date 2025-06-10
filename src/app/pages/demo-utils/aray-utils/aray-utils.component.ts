import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsArrayUtils, MdsHightlightPrismModule }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-aray-utils',
  templateUrl: './aray-utils.component.html',
  styleUrls: ['./aray-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class ArrayUtilsComponent {
  tableHeader = [
    {prop: 'attribute', title: 'Function'},
    {prop: 'value', title: 'Data Type'},
    {prop: 'default', title: 'Default Value'},
    {prop: 'description', title: 'Description'},
    {prop: 'version', title: 'Support Version'}
  ];

  tableContent = [
    {attribute: 'countUniqueValues( <b>Array</b> )', 'value':'Array of string', 'default': '∞', description: 'Count unique value inside string of array', version: 'medes-ui@0.0.1 >'},
    {attribute: 'sumValues( <b>Array</b> )', 'value':'Array of number', 'default': '∞', description: 'Sum all number inside of array', version: 'medes-ui@0.0.1 >'},
    {attribute: 'filterMultiple( <b>Array</b>, <b>string</b>, <b>Array</b> )', 'value':'<ul><li>Array</li><li>string</li><li>Array of string</li></ul>', 'default': '<ul><li>∞</li><li>∞</li><li>∞</li></ul>',description: '<ul><li>Sample data list</li><li>String of Key/prop to show on filter list</li><li>Values will show base on key/prop</li></ul>', version: 'medes-ui@0.0.1 >'},
    {attribute: 'groupValues( <b>Array</b>, <b>string</b> )', 'value':'<ul><li>Array</li><li>string</li></ul>', 'default': '<ul><li>∞</li><li>∞</li></ul>', description: '<ul><li>Sample data list</li><li>String of Key/prop to make it as key</li></ul>', version: 'medes-ui@0.0.1 >'},
    {attribute: 'arrayTolistObject( <b>Array</b>, <b>string</b> )', 'value':'<ul><li>Array</li><li>string</li></ul>', 'default': '<ul><li>∞</li><li>∞</li></ul>', description: '<ul><li>Sample data list</li><li>String of Key/prop to make it as Object Key</li></ul>', version: 'medes-ui@0.0.1 >'},
    {
        attribute: 'exportToCsv( <b>Array</b>, <b>string?</b> ) <span class=\'new-beadge margin-l-1\'>New</span>',
        'value': '<ul><li>Array of Array string</li><li>string</li></ul>',
        'default': '<ul><li>∞</li><li>\'download\'</li></ul>',
        description: '<ul><li>Put which Arrat to convert CSV file, sample already on code below</li><li>Put filename, this part is optional if no value will use default value download.csv</li></ul>',
        version: 'medes-ui@1.15.1 >'
    }
  ];

import = `
import { MdsArrayUtils } from 'medes-ui';`;
demo = `
MdsArrayUtils.countUniqueValues(["Web","Web","Web","Web","iOS","iOS","Android","Android","Android"])
// output {Web: 4, iOS: 2, Android: 3}

MdsArrayUtils.sumValues([5,3,4,56,6,7]);
// output 81

// Sample data
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
}*/

// Sample data
const sampleDataExport = [
  ['name', 'age', 'gender'],
  ['John', 23, 'male'],
  ['Doe', 25, 'male'],
  ['Jesica', 19, 'female']
]

MdsArrayUtils.exportToCsv('my-file-name', sampleDataExport)
/* For output click button Download CSV below`;

  data = [
    { manufucture: 'audi', model: 'r8', year: '2012' },
    { manufucture: 'audi', model: 'rs5', year: '2013' },
    { manufucture: 'ford', model: 'mustang', year: '2012' },
    { manufucture: 'ford', model: 'fusion', year: '2015' },
    { manufucture: 'kia', model: 'optima', year: '2012' }
  ];

  constructor() {}

  downloadCsv(): void {
    const sampleDataExport = [
      ['name', 'age', 'gender'],
      ['John', 23, 'male'],
      ['Doe', 25, 'male'],
      ['Jesica', 19, 'female']
    ]
    MdsArrayUtils.exportToCsv(sampleDataExport, 'my-file-name');
  }


}
