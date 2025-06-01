import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
/*-- Import medes-ui --*/ import { MdsHightlightPrismModule } from 'medes-ui';
// /*-- Medes Team Only --*/ import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-object-utils',
  templateUrl: './object-utils.component.html',
  styleUrls: ['./object-utils.component.scss'],
  standalone: true,
  imports: [CommonModule, MdsHightlightPrismModule]
})
export class ObjectUtilsComponent {
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
  constructor() { }

}
