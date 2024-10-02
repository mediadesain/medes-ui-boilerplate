import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
/*-- Import medes-ui --*/ import { MdsHightlightPrismModule } from 'medes-ui';
// /*-- Medes Team Only --*/ import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-utils',
  templateUrl: './color-utils.component.html',
  styleUrls: ['./color-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class ColorUtilsComponent {
  import = `
import { MdsColorUtils } from 'medes-ui';`;
  demo = `
MdsColorUtils.rgbToHex([139, 197, 63]); //output #8bc53f
MdsColorUtils.hexToRgba('#8bc53f'); //output rgba(139,197,63,1)
MdsColorUtils.hexToRgba('#8bc53f', .5); //output rgba(139,197,63,0.5)
MdsColorUtils.addDarkLight('#8bc53f', -10); //output #81bb35`;
  // constructor() { }


}
