import { Component } from '@angular/core';
import { MdsColorUtils }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/lib/utils/mds-color-utils';

@Component({
  selector: 'mds-color-scheme',
  templateUrl: './color-scheme.component.html',
  styleUrls: ['./color-scheme.component.scss']
})
export class ColorSchemeComponent {
  name: string;
  generate: {key: string; value: string, color?: string}[] = [];
  output: string;

  importCss = `
/*-- MedesUI --*/
@import \'../node_modules/medes-ui/assets/scss/medes-ui.scss\';
@import \'../node_modules/medes-ui/assets/scss/ui-colorscheme.scss\';
// Add your own custom color scheme - https://doc.mediadesain.com/introduction/color-scheme

/*-- Light Mode --*/
:root {
  /* Custom Color Swatch */
  /*-- swatch-c --*/
  --swatch-c-transculant: rgba(244,206,16,0.3);
  --swatch-c-lighter: #ffec2e;
  --swatch-c: #f4ce10;
  --swatch-c-darker: #d6b000;
  --swatch-c-contrast: #f4ce10;
}

/*-- Dark Mode --*/
@media (prefers-color-scheme: dark) {
  :root {
    /*- Custom Color Swatch -*/
    /*-- swatch-c --*/
    --swatch-c-transculant: rgba(244,206,16,0.3);
    --swatch-c-lighter: #ffec2e;
    --swatch-c: #f4ce10;
    --swatch-c-darker: #d6b000;
    --swatch-c-contrast: #f4ce10;
  }
}`;
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
    this.output = `
/*-- ` + submitValue.name + ` --*/\n` +
    this.generate[0].key + `: ` + this.generate[0].value + `;\n` +
    this.generate[1].key + `: ` + this.generate[1].value + `;\n` +
    this.generate[2].key + `: ` + this.generate[2].value + `;\n` +
    this.generate[3].key + `: ` + this.generate[3].value + `;\n` +
    this.generate[4].key + `: ` + this.generate[4].value + `;`;
  }

}
