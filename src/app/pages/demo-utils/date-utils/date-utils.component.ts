import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsDateUtils }
/*-private-*/ from '@medes-ui/core';
//*-public-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule }
/*-private-*/ from '@medes-ui/angular';
//*-public-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
    selector: 'mds-date-utils',
    templateUrl: './date-utils.component.html',
    styleUrls: ['./date-utils.component.scss'],
    imports: [CommonModule, MdsHightlightPrismModule]
})
export class DateUtilsComponent {
import = `
import { MdsDateUtils } from '@medes-ui/core';`;
demo = `
MdsDateUtils.untilNow(1644684102000); // output ${MdsDateUtils.untilNow(1644684102000)}
MdsDateUtils.untilNow(1644684102000, ['tahun','bulan','hari','jam','menit','detik'], 'lalu'); // output ${MdsDateUtils.untilNow(1644684102000, ['tahun', 'bulan', 'hari', 'jam', 'menit', 'detik'], 'lalu')}`;


  // constructor() { }


}
