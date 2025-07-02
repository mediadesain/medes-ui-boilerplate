import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoFilterPipeComponent } from './demo-filter-pipe/demo-filter-pipe.component';
import { DemoSearchPipeComponent } from './demo-search-pipe/demo-search-pipe.component';
import { DemoSafeurlPipeComponent } from './demo-safeurl-pipe/demo-safeurl-pipe.component';
import { DemoFilterRangePipeComponent } from './demo-filter-range-pipe/demo-filter-range-pipe.component';

const routes: Routes = [
  { path: '', redirectTo: 'filter', pathMatch: 'full'  },
  { path: 'filter', component: DemoFilterPipeComponent, data: {title: 'MedesUI - Filter Pipe'} },
  { path: 'filter-range', component: DemoFilterRangePipeComponent, data: {title: 'MedesUI - Filter RangePipe'} },
  { path: 'search', component: DemoSearchPipeComponent, data: {title: 'MedesUI - Search Pipe'} },
  { path: 'safeurl', component: DemoSafeurlPipeComponent, data: {title: 'MedesUI - SafeUrl Pipe'} },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoPipesRoutingModule { }
