import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdsHightlightPrismModule }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-image-loader',
  templateUrl: './demo-image-loader.component.html',
  styleUrls: ['./demo-image-loader.component.scss'],
  standalone: true,
  imports: [MdsHightlightPrismModule, FormsModule]
})
export class DemoImageLoaderComponent {
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
