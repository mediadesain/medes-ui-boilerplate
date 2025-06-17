import { CommonModule } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { constructComponentCode, constructImportModuleCode } from 'src/app/shared/utils/code-preview-generator';
import { htmlCode, interfaceCode } from './page-counter-preview-code';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsModalModule,  MdsModalService,  MdsPageManagerModule, PageNavigationManagerModel }
//*-public-mode-*/ from 'medes-ui';
/*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

@Component({
  selector: 'mds-demo-page-counter',
  templateUrl: './demo-page-counter.component.html',
  styleUrls: ['./demo-page-counter.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule, MdsPageManagerModule]
})
export class DemoPageCounterComponent implements AfterContentChecked {
  // data
  data: string[] = SampleProductsData.userNames;
  // model
  pageNavConfig: PageNavigationManagerModel = {
    configs: {
      itemToShow: 20,
      // pageCounter Configuration
      pageCounter: {
        options: [10, 20, 30, 40, 50, 60]
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
    {attribute: 'model',type: 'PageNavigationManagerModel', default: '∞', description: 'Configuration of Page Navigation Component', version: 'medes-ui@1.18.0 > Latest version'},
    {attribute: 'customClass?',type: 'string', default: '∞', description: 'Put your custom class styling', version: 'medes-ui@1.15.1 > Latest version'},
    {attribute: 'customStyle?',type: 'string', default: '∞', description: 'Put your custom style directly on element', version: 'medes-ui@1.15.1 > Latest version'}
  ];
  tableContentDeprecated = [
    {attribute: 'pageNavConfig',type: 'PageNavigationModel', default: '∞', description: 'Configuration of Page Navigation Component, on newer version has been moved to main model', version: 'medes-ui@1.15.1 > medes-ui@1.17.1'},
    {attribute: 'pageCountConfig',type: 'Array<number>', default: '∞', description: 'Removed, on newer version has been merge to model > page counter configuration options', version: 'medes-ui@1.15.1 > medes-ui@1.17.1'}
  ];

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
    const valuesComponent = `// model
  pageNavConfig: PageNavigationManagerModel = {
    configs: {
      itemToShow: ${this.pageNavConfig.configs.itemToShow},
      // pageCounter Configuration
      pageCounter: {
        options: [${this.pageNavConfig.configs.pageCounter.options}]
      }
    }
  }`
    return constructComponentCode(importMdsUi, valuesComponent)
  }

  updateTotal($event: number): void {
    const newConfig = Object.assign({}, this.pageNavConfig);
    newConfig.configs.itemToShow = $event;
    this.pageNavConfig = newConfig;
    this.componentCode = this.reGenerateCode();
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
