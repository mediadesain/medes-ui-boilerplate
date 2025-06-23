import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsFilterModule, MdsFilterModel }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-filter-components',
  templateUrl: './demo-filter-components.component.html',
  styleUrls: ['./demo-filter-components.component.scss'],
  standalone: true,
  imports: [RouterModule, JsonPipe, MdsHightlightPrismModule, MdsFilterModule]
})
export class DemoFilterComponentsComponent implements OnInit {
  sampledata: ProductDataModel[];
  mdsFilterModel: MdsFilterModel;

checkboxComponent = `
<!-- Filter Checkboxes Component -->
<mds-filter-checkbox id="by-category" [data]="data" [model]="mdsFilterModel"></mds-filter-checkbox>`;

swatchComponent = `
<!-- Filter Swatch Component -->
<mds-filter-swatch id="color" [data]="data" [model]="mdsFilterModel"></mds-filter-swatch>`;

rangeSliderComponent = `
<!-- Demo Filter Range Slider Component -->
<mds-filter-range-slider [model]="mdsFilterModel"></mds-filter-range-slider>`;

resetComponent = `
<!-- Reset Filter Component -->
<mds-filter-reset customClass="btn-swatch-a" [(model)]="mdsFilterModel">Reset All</mds-filter-reset>`;

  ngOnInit(): void {
    // Sample Data
    this.sampledata = SampleProductsData.data;
    // Filter Model
    this.mdsFilterModel = {
      configs: {
        checkBox: {
          'by-category' : {
            property: 'category',
            label: 'Filter by Categories'
          },
        },
        swatchBox: {
          color: {
            property: 'color',
            label: 'Filter by Color',
            colorMap: {
              'blue-sky': '#66ccdd',
              'maroon': '#bb6a66',
              'brown': '#6b6a6b',
              'black': '#000000',
              'purple': '#6a66bb',
              'gold': '#b6ab66'
            },
            swatchSize: 30,
            swatchRadius: 5
          }
        },
        rangeSlider: {
          price: {
            label: 'Filter by Price',
            min: 0,
            max: 2500,
          }
        }
      }
    }
    
  }

}
