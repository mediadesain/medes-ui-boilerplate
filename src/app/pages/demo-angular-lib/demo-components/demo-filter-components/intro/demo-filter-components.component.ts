import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsFilterModule, MdsFilterModel, MdsNumberUtils }
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
  data: ProductDataModel[];
  mdsFilterModel: MdsFilterModel;

checkboxComponent = `
<!-- Filter Checkboxes Component -->
<mds-filter-checkbox id="category" [data]="data" [model]="mdsFilterModel"></mds-filter-checkbox>`;

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
    this.data = SampleProductsData.data;
    // Filter Model
    const getAvailableMinMaxNumber = MdsNumberUtils.getMinMax(SampleProductsData.data.map(item => item.price)); // utils to get min max
    this.mdsFilterModel = {
      configs: {
        checkBox: {
          category : {
            property: 'category',
            label: 'Filter by Brand'
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
          mySliderA: {
            label: 'Filter by Price',
            min: 0,
            max: 2500,
          }
        }
      },
      data: {
        filterRange: {
          start: getAvailableMinMaxNumber.min,
          end: getAvailableMinMaxNumber.max
        }
      }
    }
  }

}
