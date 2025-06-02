import { Component } from '@angular/core';

@Component({
  selector: 'mds-how-to-install',
  templateUrl: './how-to-install.component.html',
  styleUrls: ['./how-to-install.component.scss']
})
export class HowToInstallComponent {
  importCss = `
/*-- MedesUI --*/
@import \'../node_modules/medes-ui/assets/scss/medes-ui.scss\';
@import \'../node_modules/medes-ui/assets/scss/ui-colorscheme.scss\';
// Add your own custom color scheme - https://doc.mediadesain.com/introduction/color-scheme`;

  // constructor() { }


}
