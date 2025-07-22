import { Component } from '@angular/core';
import { MdsHightlightPrismModule }
/*-private-*/ from '@medes-ui/angular';
//*-public-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
    selector: 'mds-demo-safeurl-pipe',
    templateUrl: './demo-safeurl-pipe.component.html',
    styleUrls: ['./demo-safeurl-pipe.component.scss'],
    imports: [MdsHightlightPrismModule]
})
export class DemoSafeurlPipeComponent {}
