import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdsFilterRangeSliderComponent, MdsHightlightPrismModule }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-filter-range-slider',
  templateUrl: './demo-filter-range-slider.component.html',
  styleUrls: ['./demo-filter-range-slider.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsFilterRangeSliderComponent]
})
export class DemoFilterRangeSliderComponent {
  //----- Required -----
  // filterRangeSelected: SelectedFilterSliderInterface;

  //----- Optional Configuration -----
  label: string;
  resetElement: string;
  isDisabled: boolean;

  constructor(){
    // this.filterRangeSelected = {
    //   min: 1250,
    //   max: 19500,
    //   start: 6000,
    //   end: 17000
    // };
    this.label = 'Filter by price';
    this.resetElement = '<b>✕</b>';
    this.isDisabled = false;
  }

  importModuleCode = `
import { MdsFilterModule } from 'medes-ui';

@NgModule({
  declarations: [ ... ],
  imports: [
    MdsFilterModule  // Ignore importing module if using standalone component
  ]
})

export class MyModule { }`;

  componentCode = `
import { MdsFilterRangeSliderComponent } from 'medes-ui';

@Component({
  selector: 'mds-my-component',
  templateUrl: './mds-my-component.component.html',
  styleUrls: ['./mds-my-component.component.scss'],
  standalone: true,
  imports: [MdsFilterRangeSliderComponent] // import here if standalone component is true
})

export class MyComponent {
  ...
  //----- Required -----
  filterRangeSelected: SelectedFilterSliderInterface = {
    min: 1250,
    max: 19500,
    start: 6000,
    end: 17000
  };

  //----- Optional Configuration -----
  label: string = 'Filter by price';
  resetElement: string = '<b>✕</b>';
  isDisabled: boolean = false;
  ...
}`;
componenthtml = `
<!-- Filter range slider -->
<mds-filter-range-slider
  [(start)]="filterRangeSelected.start"
  [(end)]="filterRangeSelected.end"
  [min]="filterRangeSelected.min"
  [max]="filterRangeSelected.max"
  [label]="label" 
  [reset]="resetElement"
  [disabled]="isDisabled">
</mds-filter-range-slider>
<small><i>Output: {{filterRangeSelected.start}} - {{filterRangeSelected.end}}</i></small>`;

}
