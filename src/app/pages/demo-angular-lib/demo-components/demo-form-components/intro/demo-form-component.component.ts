import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdsHightlightPrismModule, MdsFormModule }
//*-public-mode-*/ from 'medes-ui-angular';
/*-dev-mode-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
  selector: 'mds-demo-form-component',
  templateUrl: './demo-form-component.component.html',
  styleUrls: ['./demo-form-component.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MdsHightlightPrismModule, MdsFormModule]
})
export class DemoFormComponent implements AfterContentChecked {
  isActive: boolean;
  price: number;
  constructor(private cdr: ChangeDetectorRef){
    this.isActive = true;
    this.price = 1549999.999
  }
pageNavigationComponent = `
<!-- Medes Toggle Component -->
<mds-toggle-button [(value)]="isActive"></mds-toggle-button>`;
pageCounterComponent = `
<div class="flex-vertical">
    <div class="flex-vertical margin-b-1">
        <label>Data Binding: </label>{{price}}
    </div>
    <div class="flex-vertical">
        <!-- Medes Input Component -->
        <label>Component </label>
        <mds-input-number [(value)]="price"></mds-input-number>
    </div>
</div>`;

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

}
