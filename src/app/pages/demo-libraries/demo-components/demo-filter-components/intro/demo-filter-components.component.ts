import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterModel }
/*-public-*/ from '@medes-ui/core';
//*-public-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule, MdsFilterModule }
/*-public-*/ from '@medes-ui/angular';
//*-public-*/ from 'projects/medes-ui-angular/src/public-api';
import { LibraryTypeService } from 'src/app/shared/services/library-type.service';

@Component({
    selector: 'mds-demo-filter-components',
    templateUrl: './demo-filter-components.component.html',
    styleUrls: ['./demo-filter-components.component.scss'],
    imports: [CommonModule, RouterModule, MdsHightlightPrismModule, MdsFilterModule]
})
export class DemoFilterComponentsComponent implements OnInit {
  sampledata: ProductDataModel[];
  mdsFilterModel: MdsFilterModel;

  constructor(public libraryTypeService: LibraryTypeService){}

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

checkboxComponentRc = `
{/*-- Filter Checkboxes Component */}
<MdsFilterCheckbox id="by-category" data={sampledata} model={mdsFilterModel} modelChange={ (model) => setMdsFilterModel(model)}></MdsFilterCheckbox>`;

swatchComponentRc = `
{/*-- Filter Swatch Component */}
<MdsFilterSwatch id="color" data={sampledata} model={mdsFilterModel} modelChange={ (model) => setMdsFilterModel(model)}></MdsFilterSwatch>`;

rangeSliderComponentRc = `
{/*-- Demo Filter Range Slider Component */}
<MdsFilterRangeSlider id="price" model={mdsFilterModel} modelChange={ (model) => setMdsFilterModel(model)}></MdsFilterRangeSlider>`;

resetComponentRc = `
{/*-- Reset Filter Component */}
<MdsFilterReset customClass='btn-swatch-a x-100' model={mdsFilterModel} modelChange={ (model) => setMdsFilterModel(model)}>
  <>Reset All</>
</MdsFilterReset>`;

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
