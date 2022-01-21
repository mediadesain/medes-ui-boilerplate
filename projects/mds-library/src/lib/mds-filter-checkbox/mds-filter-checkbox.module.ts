
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdsFilterCheckboxComponent } from './mds-filter-checkbox.component';

@NgModule({
  declarations: [MdsFilterCheckboxComponent],
  imports: [CommonModule],
  exports: [MdsFilterCheckboxComponent]
})
export class MdsFilterCheckboxModule { }

export * from './mds-filter-checkbox.component';
