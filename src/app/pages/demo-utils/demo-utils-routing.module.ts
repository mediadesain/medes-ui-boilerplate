import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StringUtilsComponent } from './string-utils/string-utils.component';
import { NumberUtilsComponent } from './number-utils/number-utils.component';
import { ObjectUtilsComponent } from './object-utils/object-utils.component';
import { ArrayUtilsComponent } from './aray-utils/aray-utils.component';
import { DateUtilsComponent } from './date-utils/date-utils.component';
import { ColorUtilsComponent } from './color-utils/color-utils.component';

const routes: Routes = [
  { path: '', redirectTo: 'string', pathMatch: 'full' },
  { path: 'string', component: StringUtilsComponent, data: {title: 'MedesUI - String Utils'} },
  { path: 'number', component: NumberUtilsComponent, data: {title: 'MedesUI - Number Utils'} },
  { path: 'object', component: ObjectUtilsComponent, data: {title: 'MedesUI - Object Utils'} },
  { path: 'array', component: ArrayUtilsComponent, data: {title: 'MedesUI - Array Utils'} },
  { path: 'date', component: DateUtilsComponent, data: {title: 'MedesUI - Date Utils'} },
  { path: 'color', component: ColorUtilsComponent, data: {title: 'MedesUI - Color Utils'} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoUtilsRoutingModule { }
