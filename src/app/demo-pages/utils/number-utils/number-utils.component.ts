import { Component, OnInit } from '@angular/core';

import { MdsNumberUtils } from 'medes-ui';
// import { MdsNumberUtils} from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'medes-number-utils',
  templateUrl: './number-utils.component.html',
  styleUrls: ['./number-utils.component.scss']
})
export class NumberUtilsComponent implements OnInit {
import = `import { MdsNumberUtils } from 'medes-ui';`;
demo = `MdsNumberUtils.shortNumber(15320); // output 15k
MdsNumberUtils.shortNumber(15320, ['rb','jt','mil','tr']); // output 15rb

MdsNumberUtils.toCurrency(15320, 'USD'); // output $15,320
MdsNumberUtils.toCurrency(15320, 'IDR', 2); // output Rp 15.320,00`;
  constructor() { }

  ngOnInit(): void {
  }

}
