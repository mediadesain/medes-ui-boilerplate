import { Routes } from '@angular/router';

export const DemoPipesRoutes: Routes = [
  { path: '', redirectTo: 'filter', pathMatch: 'full'  },
  { path: 'filter', loadComponent: () => import('./demo-filter-pipe/demo-filter-pipe.component').then(c => c.DemoFilterPipeComponent), title: 'MedesUI - Filter Pipe' },
  { path: 'filter-range', loadComponent: () => import('./demo-search-pipe/demo-search-pipe.component').then(c => c.DemoSearchPipeComponent), title: 'MedesUI - Filter RangePipe' },
  { path: 'search', loadComponent: () => import('./demo-safeurl-pipe/demo-safeurl-pipe.component').then(c => c.DemoSafeurlPipeComponent), title: 'MedesUI - Search Pipe' },
  { path: 'safeurl', loadComponent: () => import('./demo-filter-range-pipe/demo-filter-range-pipe.component').then(c => c.DemoFilterRangePipeComponent), title: 'MedesUI - SafeUrl Pipe' },
  
];
