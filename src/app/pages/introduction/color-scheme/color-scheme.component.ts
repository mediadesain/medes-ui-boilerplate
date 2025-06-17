import { Component } from '@angular/core';
import { MdsColorUtils }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/lib/utils/mds-color-utils';

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
@import "./assets/style/custom-scheme.scss"; // Custom color scheme path`;

  customSchemeCss = `
/* Custom Color Swatch */
/*-- Light Mode --*/
:root {
    /*-- swatch-c --*/
    --swatch-c-transculant: rgba(233,138,53,0.3);
    --swatch-c-lighter: #ffa853;
    --swatch-c: #e98a35;
    --swatch-c-darker: #cb6c17;
    --swatch-c-contrast: #ffffff;
    // add more here
}

/*-- Dark Mode --*/
@media (prefers-color-scheme: dark) {
  :root {
    /*-- swatch-c --*/
    --swatch-c-transculant: rgba(233,138,53,0.3);
    --swatch-c-lighter: #ffa853;
    --swatch-c: #e98a35;
    --swatch-c-darker: #cb6c17;
    --swatch-c-contrast: #ffffff;
    // add more here
  }
}

/* Custom Class */
.bg-swatch-c {background: var(--swatch-c);}
.txt-swatch-c {color: var(--swatch-c);}
.btn-swatch-c {background: var(--swatch-c); color: var(--swatch-c-contrast);}
.btn-swatch-c:hover {background: var(--swatch-c-lighter);}
.btn-swatch-c:disabled, .btn-swatch-c[disabled] {background: var(--swatch-c-darker);}
.table-swatch-c th {background: var(--swatch-c); color: var(--swatch-c-contrast);} 
.table-swatch-c tr th:hover {background: var(--swatch-c-darker); cursor: default;}
.numbering.swatch-c.active {color: var(--swatch-c-contrast); background: var(--swatch-c);}
.numbering.swatch-c:hover {color: var(--swatch-c-contrast); background: var(--swatch-c);}
// add more here`
  // constructor() { }


  generated(submitValue: {name: string; color: string; colorContrast: string}): void{
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
          value: MdsColorUtils.addDarkLight(submitValue.colorContrast, 0),
        }
    ];
    this.output = `
/*-- ` + submitValue.name + ` --*/\n` +
    this.generate[0].key + `: ` + this.generate[0].value + `;\n` +
    this.generate[1].key + `: ` + this.generate[1].value + `;\n` +
    this.generate[2].key + `: ` + this.generate[2].value + `;\n` +
    this.generate[3].key + `: ` + this.generate[3].value + `;\n` +
    this.generate[4].key + `: ` + this.generate[4].value + `;

/* Custom Class */
.bg-${submitValue.name} {background: var(--${submitValue.name});}
.txt-${submitValue.name} {color: var(--${submitValue.name});}
.btn-${submitValue.name} {background: var(--${submitValue.name}); color: var(--${submitValue.name}-contrast);}
.btn-${submitValue.name}:hover {background: var(--${submitValue.name}-lighter);}
.btn-${submitValue.name}:disabled, .btn-${submitValue.name}[disabled] {background: var(--${submitValue.name}-darker);}
.table-${submitValue.name} th {background: var(--${submitValue.name}); color: var(--${submitValue.name}-contrast);} 
.table-${submitValue.name} tr th:hover {background: var(--${submitValue.name}-darker); cursor: default;}
.numbering.${submitValue.name}.active { color: var(--${submitValue.name}-contrast); background: var(--${submitValue.name}); }
.numbering.${submitValue.name}:hover { color: var(--${submitValue.name}-contrast); background: var(--${submitValue.name}); }`;
  }

}
