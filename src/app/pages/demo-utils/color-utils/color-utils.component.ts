import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsHightlightPrismModule }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-utils',
  templateUrl: './color-utils.component.html',
  styleUrls: ['./color-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class ColorUtilsComponent {
  tableHeader = [
    {prop: 'attribute', title: 'Function'},
    {prop: 'value', title: 'Data Type'},
    {prop: 'default', title: 'Default Value'},
    {prop: 'description', title: 'Description'},
    {prop: 'version', title: 'Support Version'}
  ];

  tableContent = [
    {attribute: 'rgbToHex( <b>Array</b> )', 'value':'Array&lt;number&gt;', 'default': '∞', description: '<ul><li>Sample number of r, g, b.</li></ul>', version: 'medes-ui@0.0.3 > Latest version'},
    {attribute: 'hexToRgba( <b>string</b>, <b>number?</b> )', 'value':'<ul><li>string</li><li>number</li></ul>', 'default': '<ul><li>∞</li><li>1</li></ul>', description: '<ul><li>Sample hex color</li><li>Opacity range between 0 - 1</li></ul>', version: 'medes-ui@0.0.3 > Latest version'},
    {attribute: 'addDarkLight( <b>string</b>, <b>number</b> )', 'value':'<ul><li>string</li><li>number</li></ul>', 'default': '<ul><li>∞</li><li>∞</li></ul>', description: '<ul><li>Sample string to Title Case</li><li>Add positif number for lighter or negative for brighter color</li></ul>', version: 'medes-ui@0.0.3 > Latest version'}
  ];

  import = `
import { MdsColorUtils } from 'medes-ui';`;
  demo = `
MdsColorUtils.rgbToHex([139, 197, 63]); //output #8bc53f
MdsColorUtils.hexToRgba('#8bc53f'); //output rgba(139,197,63,1)
MdsColorUtils.hexToRgba('#8bc53f', .5); //output rgba(139,197,63,0.5)
MdsColorUtils.addDarkLight('#8bc53f', -10); //output #81bb35`;
  // constructor() { }


}
