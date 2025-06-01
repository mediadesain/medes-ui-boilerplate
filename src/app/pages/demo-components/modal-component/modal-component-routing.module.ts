import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalComponent } from './modal-component.component';

const routes: Routes = [
  { path: '', component: ModalComponent }
  // { path: '', redirectTo: 'intro', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalComponentRoutingModule { }
