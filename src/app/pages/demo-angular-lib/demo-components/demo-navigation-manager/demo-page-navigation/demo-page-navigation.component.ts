import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { constructComponentCode, constructImportModuleCode } from 'src/app/shared/utils/code-preview-generator';
import { htmlCode, interfaceCode } from './page-navigation-preview-code';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsPageManagerModule, MdsModalService, MdsModalModule, PageNavigationManagerModel }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';


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
  importModuleCode: string;
  componentCode: string;
  htmlCode: string;
  interfaceCode: string;
  
  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {attribute: 'data', type: 'Array', default: '∞', description: 'Pharse data items which will be process for page navigation', version: 'medes-ui@1.18.0 > Latest version'},
    {attribute: 'model',type: 'PageNavigationManagerModel', default: '∞', description: 'Configuration of Page Navigation Component', version: 'medes-ui@1.18.0 > Latest version'}
  ];
  tableContentDeprecated = [
    {attribute: 'pageNavConfig',type: 'PageNavigationModel', default: '∞', description: 'Configuration of Page Navigation Component, on newer version has been replaced with model', version: 'medes-ui@1.15.1 > medes-ui@1.17.1'}
  ]

  constructor(public mdsModalService: MdsModalService, private cdr: ChangeDetectorRef) {
    this.importModuleCode = constructImportModuleCode('MdsPageManagerModule');
    this.componentCode = this.reGenerateCode();
    this.htmlCode = htmlCode;
    this.interfaceCode = interfaceCode;
  }

  ngAfterContentChecked(): void {
    this.cdr.detectChanges();
  }

  reGenerateCode(): string {
    const importMdsUi = 'PageNavigationModel, MdsPagerType';
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
    return constructComponentCode(importMdsUi, valuesComponent)
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

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }


}
