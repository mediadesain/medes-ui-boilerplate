import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medes-color-scheme',
  templateUrl: './color-scheme.component.html',
  styleUrls: ['./color-scheme.component.scss']
})
export class ColorSchemeComponent implements OnInit {
  name: string;
  generate: {key: string; value: string, color?: string}[] = [];
  output: string;
  constructor() { }

  ngOnInit(): void {
  }

  generated(submitValue: any): void{
    this.name = submitValue.name;
    this.generate = [
        {
          key: '--' + submitValue.name + '-transculant',
          value: this.addAlpha(submitValue.color, .3)
        }, {
          key: '--' + submitValue.name + '-lighter',
          value: this.adjust(submitValue.color, 30)
        }, {
          key: '--' + submitValue.name,
          value: this.adjust(submitValue.color, 0)
        }, {
          key: '--' + submitValue.name + '-darker',
          value: this.adjust(submitValue.color, -30)
        }, {
          key: '--' + submitValue.name + '-contrast',
          value: this.adjust(submitValue.color, 0),
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

  addAlpha(color: string, opacity: number): string {
    // coerce values so ti is between 0 and 1.
    const updateOopacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + updateOopacity.toString(16).toUpperCase();
  }

  adjust(color: string, amount: number): string {
    const coloradjust = '#' + color.replace(/^#/, '');
    coloradjust.replace(/../g, clr => (
      '0' + Math.min(255, Math.max(0, parseInt(clr, 16) + amount)).toString(16)
    ).substr(-2));
    return coloradjust;
  }

}
