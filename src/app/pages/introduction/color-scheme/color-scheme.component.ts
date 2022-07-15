import { Component } from '@angular/core';
import { MdsColorUtils } from 'medes-ui';
// import { MdsColorUtils } from 'projects/medes-ui/src/lib/utils/mds-color-utils';

@Component({
  selector: 'mds-color-scheme',
  templateUrl: './color-scheme.component.html',
  styleUrls: ['./color-scheme.component.scss']
})
export class ColorSchemeComponent {
  name: string;
  generate: {key: string; value: string, color?: string}[] = [];
  output: string;
  // constructor() { }


  generated(submitValue: {name: string; color: string; 'color-contrast': string}): void{
    this.name = submitValue.name;
    this.generate = [
        {
          key: '--' + submitValue.name + '-transculant',
          value: MdsColorUtils.hexToRgba(submitValue.color, .3)
        }, {
          key: '--' + submitValue.name + '-lighter',
          value: MdsColorUtils.addDarkLight(submitValue.color, 30)
        }, {
          key: '--' + submitValue.name,
          value: MdsColorUtils.addDarkLight(submitValue.color, 0)
        }, {
          key: '--' + submitValue.name + '-darker',
          value: MdsColorUtils.addDarkLight(submitValue.color, -30)
        }, {
          key: '--' + submitValue.name + '-contrast',
          value: MdsColorUtils.addDarkLight(submitValue.color, 0),
          color: submitValue['color-contrast']
        }
    ];
    this.output = `/*-- ` + submitValue.name + ` --*/\n` +
    this.generate[0].key + `: ` + this.generate[0].value + `;\n` +
    this.generate[1].key + `: ` + this.generate[1].value + `;\n` +
    this.generate[2].key + `: ` + this.generate[2].value + `;\n` +
    this.generate[3].key + `: ` + this.generate[3].value + `;\n` +
    this.generate[4].key + `: ` + this.generate[4].value + `;`;
  }

}
