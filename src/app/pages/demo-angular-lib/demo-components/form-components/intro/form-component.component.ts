import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MdsHightlightPrismModule, MdsFormModule }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MdsHightlightPrismModule, MdsFormModule]
})
export class DemoFormComponent implements AfterContentChecked {
isActive: boolean = true;
price: number = 1549999.999

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

  constructor(private cdr: ChangeDetectorRef){}

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

}
