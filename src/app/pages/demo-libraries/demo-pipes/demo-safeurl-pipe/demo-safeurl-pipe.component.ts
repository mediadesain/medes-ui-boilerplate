import { Component } from '@angular/core';
import { MdsHightlightPrismModule }
/*-public-*/ from '@mediadesain/angular';
//*-public-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
    selector: 'mds-demo-safeurl-pipe',
    templateUrl: './demo-safeurl-pipe.component.html',
    styleUrls: ['./demo-safeurl-pipe.component.scss'],
    imports: [MdsHightlightPrismModule]
})
export class DemoSafeurlPipeComponent {}
