import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'filter', pathMatch: 'full'  },
  { path: 'filter', loadComponent: () => import('./demo-filter-pipe/demo-filter-pipe.component').then(c => c.DemoFilterPipeComponent), data: {title: 'MedesUI - Filter Pipe'} },
  { path: 'filter-range', loadComponent: () => import('./demo-search-pipe/demo-search-pipe.component').then(c => c.DemoSearchPipeComponent), data: {title: 'MedesUI - Filter RangePipe'} },
  { path: 'search', loadComponent: () => import('./demo-safeurl-pipe/demo-safeurl-pipe.component').then(c => c.DemoSafeurlPipeComponent), data: {title: 'MedesUI - Search Pipe'} },
  { path: 'safeurl', loadComponent: () => import('./demo-filter-range-pipe/demo-filter-range-pipe.component').then(c => c.DemoFilterRangePipeComponent), data: {title: 'MedesUI - SafeUrl Pipe'} },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoPipesRoutingModule { }
