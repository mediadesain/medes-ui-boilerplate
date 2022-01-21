
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from './filter.pipe';
import { SafeUrlPipe } from './safe-url.pipe';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    FilterPipe,
    SafeUrlPipe,
    SearchPipe
  ],
  imports: [CommonModule],
  exports: [
    FilterPipe,
    SafeUrlPipe,
    SearchPipe
  ]
})
export class MdsPipesModule {}

export * from './filter.pipe';
export * from './safe-url.pipe';
export * from './search.pipe';

