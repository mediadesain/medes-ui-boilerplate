import { Component } from '@angular/core';
import { MdsHightlightPrismModule }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
  selector: 'mds-demo-safeurl-pipe',
  templateUrl: './demo-safeurl-pipe.component.html',
  styleUrls: ['./demo-safeurl-pipe.component.scss'],
  standalone: true,
  imports: [MdsHightlightPrismModule]
})
export class DemoSafeurlPipeComponent {}
