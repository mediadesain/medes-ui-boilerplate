import { Component } from '@angular/core';
/*-- Import medes-ui --*/ import { MdsHightlightPrismModule } from 'medes-ui';
// /*-- Medes Team Only --*/ import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-safeurl-pipe',
  templateUrl: './demo-safeurl-pipe.component.html',
  styleUrls: ['./demo-safeurl-pipe.component.scss'],
  standalone: true,
  imports: [MdsHightlightPrismModule]
})
export class DemoSafeurlPipeComponent {}
