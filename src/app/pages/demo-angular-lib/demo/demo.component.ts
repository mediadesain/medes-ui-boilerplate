import { CommonModule } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductDataModel, SampleProductsData } from 'src/app/shared/constant/products';
import { MdsFilterModel, MdsNumberUtils, PageNavigationManagerModel }
/*-public-*/ from '@mediadesain/core';
//*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule, MdsFilterModule, MdsPipesModule, MdsPageManagerModule }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';

@Component({
  selector: 'mds-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsFilterModule, MdsPipesModule, MdsPageManagerModule]
})
export class DemoComponent implements OnInit, AfterContentChecked {
  data: ProductDataModel[];
  mdsFilterModel: MdsFilterModel;
  pageNavConfig: PageNavigationManagerModel;
  
  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    // Sample Data
    this.data = SampleProductsData.data;

    // Filter Model
    const getAvailableMinMaxNumber = MdsNumberUtils.getMinMax(SampleProductsData.data.map(item => item.price)); // utils to get min max
    this.mdsFilterModel = {
      configs: {
        checkBox: {
          gender : {
            property: 'gender',
            label: 'Filter by Brand',
            // resetElement: 'reset',
            // hideCounter: true
          },
          category : {
            property: 'category',
            label: 'Filter by Brand',
            // resetElement: 'reset',
            // hideCounter: true
          },
          brand : {
            property: 'brand',
            label: 'Filter by Brand',
            // resetElement: 'reset',
            hideCounter: true
          }
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
            // resetElement: 'reset',
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

    // Page Navigation Model
    this.pageNavConfig = {
      configs: {
        itemToShow: 8,
        pageNavigation: {
          // type: 'numbering',
          // color: 'swatch-a'
        },
        pageCounter: {
          options: [4, 8, 16, 24],
        }
      }
    }
    
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }
  
}
