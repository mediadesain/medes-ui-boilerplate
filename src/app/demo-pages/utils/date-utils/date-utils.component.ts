import { Component, OnInit } from '@angular/core';
// import { MdsDateUtils } from 'medes-ui';
import { MdsDateUtils } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'medes-date-utils',
  templateUrl: './date-utils.component.html',
  styleUrls: ['./date-utils.component.scss']
})
export class DateUtilsComponent implements OnInit {
import = `import { MdsDateUtils } from 'medes-ui';`;
demo = `MdsDateUtils.untilNow(1644684102000, ['tahun','bulan','hari','jam','menit','detik'], 'lalu') // output ${MdsDateUtils.untilNow(1644684102000, ['tahun','bulan','hari','jam','menit','detik'], 'lalu')}`;

  constructor() { }

  ngOnInit(): void {
    const test = 24*60*60*1000;
    const date = new Date();
    console.log(
      MdsDateUtils.untilNow(1644684102000, ['tahun','bulan','hari','jam','menit','detik'], 'lalu')
    )
  }

}
