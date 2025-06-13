import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsHightlightPrismModule }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-string-utils',
  templateUrl: './string-utils.component.html',
  styleUrls: ['./string-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class StringUtilsComponent {
  tableHeader = [
    {prop: 'attribute', title: 'Function'},
    {prop: 'value', title: 'Data Type'},
    {prop: 'default', title: 'Default Value'},
    {prop: 'description', title: 'Description'},
    {prop: 'version', title: 'Support Version'}
  ];

  tableContent = [
    {attribute: 'lowerCase( <b>string</b> )', 'value':'<ul><li>string</li></ul>', 'default': '∞', description: '<ul><li>Sample string to Lower Case</li></ul>', version: 'medes-ui@0.0.1 >'},
    {attribute: 'upperCase( <b>string</b> )', 'value':'<ul><li>string</li></ul>', 'default': '∞', description: '<ul><li>Sample string to Upper Case</li></ul>', version: 'medes-ui@0.0.1 >'},
    {attribute: 'titleCase( <b>string</b> )', 'value':'<ul><li>string</li></ul>', 'default': '∞', description: '<ul><li>Sample string to Title Case</li></ul>', version: 'medes-ui@0.0.1 >'},
    {attribute: 'pascalCase( <b>string</b> )', 'value':'<ul><li>string</li></ul>', 'default': '∞', description: '<ul><li>Sample string to Pascal Case</li></ul>', version: 'medes-ui@0.0.1 >'},
    {attribute: 'randomCharacter( <b>number</b> )', 'value':'<ul><li>number</li></ul>', 'default': '∞', description: '<ul><li>Total character to create randomstring</li></ul>', version: 'medes-ui@0.0.1 >'},
    {attribute: 'convertToSlug( <b>string</b> )', 'value':'<ul><li>string</li></ul>', 'default': '∞', description: '<ul><li>Sample string to convert as slug url</li></ul>', version: 'medes-ui@0.0.1 >'},
    {attribute: 'getYoutubeID( <b>string</b> )', 'value':'<ul><li>string of youtube url</li></ul>', 'default': '∞', description: '<ul><li>Youtube url to get Youtube ID</li></ul>', version: 'medes-ui@0.0.1 >'},
    {attribute: 'getYoutubeEmbed( <b>string</b> )', 'value':'<ul><li>string of youtube url</li></ul>', 'default': '∞', description: '<ul><li>Youtube url to get embed link</li></ul>', version: 'medes-ui@0.0.1 >'},
    {attribute: 'getYoutubeThumbnail( <b>string</b>, <b>string?</b> )', 'value':'<ul><li>string of youtube url</li><li>string of option:<br/><i>0 | 1 | 2 | 3 | default | sd1 | sd2 | sd3 | sddefault | mq1 | mq2 | mq3 | mqdefault | hq1 | hq2 | hq3 | hqdefault | hq720 | maxres1 | maxres2 | maxres3 | maxresdefault</i></li></ul>', 'default': '<ul><li>∞</li><li>\'hqdefault\'</li></ul>', description: '<ul><li>Youtube url to get image thumbnail link</li><li>Size of thumbnail</li></ul>', version: 'medes-ui@0.0.1 >'}
  ];

import = `
import { MdsStringUtils } from 'medes-ui';`;
demo = `
MdsStringUtils.lowerCase('This Is String') // output this is string
MdsStringUtils.upperCase('this is string') // output THIS IS STRING
MdsStringUtils.titleCase('this is string') // output This Is String
MdsStringUtils.pascalCase('this is string') // output ThisIsString
MdsStringUtils.randomCharacter(20) // output 4n8fkovxnzp8ypaxyk8z (20 character)
MdsStringUtils.convertToSlug('This Url url $string & have symbol@#%') // output this-url-url-string-have-symbol
MdsStringUtils.getYoutubeID('https://www.youtube.com/watch?v=L8Zs8WnLerw') // output L8Zs8WnLerw
MdsStringUtils.getYoutubeEmbed('https://www.youtube.com/watch?v=L8Zs8WnLerw') // output https://www.youtube.com/embed/L8Zs8WnLerw
MdsStringUtils.getYoutubeThumbnail('https://www.youtube.com/watch?v=L8Zs8WnLerw', 'maxresdefault') // output https://i.ytimg.com/vi/L8Zs8WnLerw/maxresdefault.jpg`;

  // constructor() { }


}
