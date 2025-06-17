import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsHightlightPrismModule }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-number-utils',
  templateUrl: './number-utils.component.html',
  styleUrls: ['./number-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class NumberUtilsComponent {
  tableHeader = [
    {prop: 'attribute', title: 'Function'},
    {prop: 'value', title: 'Data Type'},
    {prop: 'default', title: 'Default Value'},
    {prop: 'description', title: 'Description'},
    {prop: 'version', title: 'Support Version'}
  ];

  tableContent = [
    {
      attribute: 'shortNumber( <b>number</b>, <b>Array?</b> )',
      'value':'<ul><li>number</li><li>Array&lt;string&gt;</li></ul>',
      default: '<ul><li>∞</li><li>[\'k\', \'m\', \'b\', \'t\']</li></ul>',
      description: '<ul><li>Number will sorting</li><li>Sample custom prefix.</li></ul>',
      version: 'medes-ui@0.0.1 > Latest version'
    },
    {
      attribute: 'toCurrency( <b>number</b>, <b>string</b>, <b>number?</b> )',
      'value':'<ul><li>number</li><li>string of option:<br/><i>IDR | JYP | EUR | USD</i></li><li>number</li></ul>',
      default: '<ul><li>∞</li><li>\'USD\'</li><li>∞</li></ul>',
      description: '<ul><li>Number will sorting</li><li>Type Currency</li><li>Set decimal</li></ul>',
      version: 'medes-ui@0.0.1 > Latest version'
    },
    {
      attribute: 'getMinMax( <b>number[]</b> )',
      'value': 'Array&lt;number&gt;',
      default: '∞',
      description: 'Array of number and will find the min max value',
      version: 'medes-ui@1.14.2 > Latest version'
    }
  ];

import = `
import { MdsNumberUtils } from 'medes-ui';`;
demo = `
MdsNumberUtils.shortNumber(15320); // output 15k
MdsNumberUtils.shortNumber(15320, ['rb','jt','mil','tr']); // output 15rb

MdsNumberUtils.toCurrency(15320, 'USD'); // output $15,320
MdsNumberUtils.toCurrency(15320, 'IDR', 2); // output Rp 15.320,00

MdsNumberUtils.getMinMax([3321,6410,1200,567,38,90,404]) // output {min: 38, max: 6410}`;
    // constructor() { }


}
