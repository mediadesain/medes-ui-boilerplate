import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { ImageLoaderComponent } from './image-loader/image-loader.component';
import { MdsDocBoilerplateComponent } from './ui-boilerplate.component';

const routes: Routes = [
  { path: '', redirectTo: 'basic-elements', pathMatch: 'full'  },
  { path: 'basic-elements', component: MdsDocBoilerplateComponent },
  { path: 'image-loader', component: ImageLoaderComponent },
  { path: 'grid-system', component: GridSystemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdsDocBoilerplateRoutingModule { }
