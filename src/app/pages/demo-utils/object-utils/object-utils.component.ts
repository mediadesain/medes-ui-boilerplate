import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MdsHightlightPrismModule }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-object-utils',
  templateUrl: './object-utils.component.html',
  styleUrls: ['./object-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class ObjectUtilsComponent {
  tableHeader = [
    {prop: 'attribute', title: 'Function'},
    {prop: 'value', title: 'Data Type'},
    {prop: 'default', title: 'Default Value'},
    {prop: 'description', title: 'Description'},
    {prop: 'version', title: 'Support Version'}
  ];

  tableContent = [
    {
      attribute: 'removeKeysIfEmpty( <b>Object</b> )',
      'value': 'Object', 'default': '∞',
      description: 'Object prop/key will delete if there is no value <i>(undefined, null, empty string)</i>.',
      version: 'medes-ui@0.0.1 > Latest version'
    },
    {
      attribute: 'isEqual( <b>Object</b>, <b>Object</b> ) <span class=\'new-beadge margin-l-1\'>New</span>',
      'value': '<ul><li>Object</li><li>Object</li></ul>',
      'default': '<ul><li>∞</li><li>∞</li></ul>',
      description: 'Put 2 Objects which are to compare',
      version: 'medes-ui@1.15.1 > Latest version'
    }
  ];

import = `
import { MdsObjectUtils } from 'medes-ui';`;
demo = `
const object = {
  "firstname": "Jhon",
  "lastname": "",
  "gender": null,
  "city": undefined
};
MdsObjectUtils.removeKeysIfEmpty(object); // output {"firstname":"Jhon"}

const objectA = {
  "firstname": "Jhon",
  "lastname": "Doe",
  "gender": "man"
};
const objectB = {
  "firstname": "Alex",
  "lastname": "Ben",
  "gender": "man"
};
MdsObjectUtils.isEqual(objectA, objectB); // output false`;

}
