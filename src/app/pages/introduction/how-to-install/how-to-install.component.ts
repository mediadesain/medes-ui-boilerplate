import { Component } from '@angular/core';
import { MdsHightlightPrismModule } from '@medes-ui/angular';

@Component({
    selector: 'mds-how-to-install',
    templateUrl: './how-to-install.component.html',
    styleUrls: ['./how-to-install.component.scss'],
    imports: [MdsHightlightPrismModule]
})
export class HowToInstallComponent {
  importCss = `
/*-- MedesUI --*/
@import \'../node_modules/@medes-ui/core/assets/css/medes-ui.css\';
@import \'../node_modules/@medes-ui/core/assets/css/ui-colorscheme.css\';
/* Add your own custom color scheme - https://doc.mediadesain.com/introduction/color-scheme */`
  importScss = `
/*-- MedesUI --*/
@import \'../node_modules/@medes-ui/core/assets/scss/medes-ui.scss\';
@import \'../node_modules/@medes-ui/core/assets/scss/ui-colorscheme.scss\';
/* Add your own custom color scheme - https://doc.mediadesain.com/introduction/color-scheme */`

  // constructor() { }


}
