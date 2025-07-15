import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdsHightlightPrismModule }
/*-public-*/ from '@medes-ui/angular';
//*-public-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
    selector: 'mds-demo-loader',
    templateUrl: './demo-loader.component.html',
    styleUrls: ['./demo-loader.component.scss'],
    imports: [MdsHightlightPrismModule, FormsModule]
})
export class DemoLoaderComponent {
  isLoading = true;
  
  constructor() {
    this.loaded();
  }

  loaded(): void {
    setTimeout( () => {
      this.isLoading = false;
    }, 2000)
  }

  reload(): void {
    this.isLoading = true;
    this.loaded()
  }


}
