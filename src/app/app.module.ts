import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdsFilterCheckboxModule, MdsPipesModule } from 'mds-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdsFilterCheckboxModule,
    MdsPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
