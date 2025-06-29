import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LibraryTypeService } from 'src/app/shared/library-type.service';
import { MdsHightlightPrismModule, MdsFormModule }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';

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
  constructor(private cdr: ChangeDetectorRef, public libraryTypeService: LibraryTypeService){
    this.isActive = true;
    this.price = 1549999.999
  }
pageNavigationComponent = `
<!-- Medes Toggle Component -->
<mds-toggle-button [(value)]="isActive"></mds-toggle-button>`;
jsxPageNavigationComponent = `
{/* Medes Toggle Component */}
<MdsToggleButtonComponent value={isActive} valueChange={(value: boolean) => setIsActive(value)}></MdsToggleButtonComponent>`;
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
