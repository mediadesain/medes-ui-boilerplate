import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { constructComponentCode } from 'src/app/shared/utils/code-preview-generator';
import { htmlCode } from './page-navigation-preview-code';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { PageNavigationManagerModelCode } from '../demo-page-navigation-manager-model-code';
import { MdsHightlightPrismModule, MdsPageManagerModule, MdsModalService, MdsModalModule, PageNavigationManagerModel }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';


@Component({
  selector: 'mds-demo-page-navigation',
  templateUrl: './demo-page-navigation.component.html',
  styleUrls: ['./demo-page-navigation.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule, MdsPageManagerModule]
})
export class DemoPageNavigationComponent implements AfterContentChecked {
  // data
  data: string[] = SampleProductsData.userNames;
  // model
  pageNavModel: PageNavigationManagerModel = {
    configs: {
      itemToShow: 10,
      // pageNavigation Configuration
      pageNavigation: {
        type: 'numbering',
        color: 'swatch-a'
      }
    }
  }

  // Code Viewer
  showFullInterfaceCode: boolean;
  componentCode: string;
  htmlCode: string;
  interfaceCode: string;
  
  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {attribute: 'data', type: 'Array', default: '∞', description: 'Pharse data items which will be process for page navigation', version: 'medes-ui@1.18.0 > Latest version'},
    {attribute: 'model',type: 'PageNavigationManagerModel', default: '∞', description: 'Custom configuration of the component itself', version: 'medes-ui@1.18.0 > Latest version'}
  ];
  tableContentDeprecated = [
    {attribute: 'pageNavConfig',type: 'PageNavigationModel', default: '∞', description: 'Configuration of Page Navigation Component, on newer version has been replaced with model', version: 'medes-ui@1.15.1 > medes-ui@1.17.1'}
  ]

  constructor(public mdsModalService: MdsModalService, private cdr: ChangeDetectorRef) {
    this.componentCode = this.reGenerateCode();
    this.htmlCode = htmlCode;
    this.interfaceCode = PageNavigationManagerModelCode.geModel('pageNavigation');
  }
    
  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  expandCollapseModel(): void {
    if (this.showFullInterfaceCode) {
      this.interfaceCode = PageNavigationManagerModelCode.geModel('pageNavigation');
      this.showFullInterfaceCode = false;
    } else {
      this.interfaceCode = PageNavigationManagerModelCode.geModel('all');
      this.showFullInterfaceCode = true;
    }
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  reGenerateCode(): string {
    const importMdsUi = 'MdsPageManagerModule, PageNavigationModel';
    const imports = 'MdsPageManagerModule';
    const valuesComponent = `// data
  data: string[] = SampleProductsData.userNames;
  // model
  pageNavModel: PageNavigationManagerModel = {
    configs: {
      itemToShow: ${this.pageNavModel.configs.itemToShow},
      // pageNavigation Configuration
      pageNavigation: {
        type: '${this.pageNavModel.configs.pageNavigation.type}',
        color: '${this.pageNavModel.configs.pageNavigation.color}'
      }
    }
  }`
    return constructComponentCode(importMdsUi, imports, '', valuesComponent)
  }
  
  getInterfaceType(value: string): string {
    if (value === 'numbering') return 'MdsPagerType.NUMBERING';
    else if (value === 'standard') return 'MdsPagerType.STANDARD';
  }

  updateTotal($event: number): void {
    const newConfig = Object.assign({}, this.pageNavModel);
    newConfig.configs.itemToShow = $event;
    this.pageNavModel = newConfig;
    this.componentCode = this.reGenerateCode();
  }

}
