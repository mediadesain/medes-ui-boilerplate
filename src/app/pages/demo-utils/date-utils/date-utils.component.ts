import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsDateUtils }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule }
//*-public-mode-*/ from 'medes-ui-angular';
/*-dev-mode-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
  selector: 'mds-date-utils',
  templateUrl: './date-utils.component.html',
  styleUrls: ['./date-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class DateUtilsComponent {
import = `
import { MdsDateUtils } from 'medes-ui';`;
demo = `
MdsDateUtils.untilNow(1644684102000); // output ${MdsDateUtils.untilNow(1644684102000)}
MdsDateUtils.untilNow(1644684102000, ['tahun','bulan','hari','jam','menit','detik'], 'lalu'); // output ${MdsDateUtils.untilNow(1644684102000, ['tahun', 'bulan', 'hari', 'jam', 'menit', 'detik'], 'lalu')}`;


  // constructor() { }


}
