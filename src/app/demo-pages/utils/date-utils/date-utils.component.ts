import { Component, OnInit } from '@angular/core';
// import { MdsDateUtils } from 'medes-ui';
import { MdsDateUtils } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'medes-date-utils',
  templateUrl: './date-utils.component.html',
  styleUrls: ['./date-utils.component.scss']
})
export class DateUtilsComponent implements OnInit {
tabledetail = [
  {'attribute':'untilNow( <b>number</b>, <b>array?</b>, <b>string?\'</b> )', 'value':'<ul><li>number*</li><li>array of string</li><li>string</li></ul>', 'default':'<ul><li>~</li><li>[year, month, day, hour, minute, second]</li><li>ago</li></ul>', 'description':'<ul><li>Sample data timestamp</li><li>String of times.</li><li>Prefix</li></ul>'}
];

import = `import { MdsDateUtils } from 'medes-ui';`;
demo = `MdsDateUtils.untilNow(1644684102000, ['tahun','bulan','hari','jam','menit','detik'], 'lalu')
// output ${MdsDateUtils.untilNow(1644684102000, ['tahun', 'bulan', 'hari', 'jam', 'menit', 'detik'], 'lalu')}`;

  constructor() { }

  ngOnInit(): void {
  }

}
