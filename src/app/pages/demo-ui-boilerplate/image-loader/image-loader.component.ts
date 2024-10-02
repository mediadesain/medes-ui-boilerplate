import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
/*-- Import medes-ui --*/ import { MdsHightlightPrismModule } from 'medes-ui';
// /*-- Medes Team Only --*/ import { MdsHightlightPrismModule } from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss'],
  standalone: true,
  imports: [MdsHightlightPrismModule, FormsModule]
})
export class ImageLoaderComponent {

  // constructor() { }


}
