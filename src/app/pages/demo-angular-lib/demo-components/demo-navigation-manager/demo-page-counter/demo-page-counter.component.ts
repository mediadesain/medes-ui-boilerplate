import { CommonModule } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { constructComponentCode, constructImportModuleCode } from 'src/app/shared/utils/code-preview-generator';
import { htmlCode, interfaceCode } from './page-counter-preview-code';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsModalModule, MdsModalService, MdsPageManagerModule, MdsPagerType, PageNavigationConfigInterface }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';

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
  // pageCountConfig
  toShowOptions: number[] = [10, 20, 30, 40, 50, 60];
  // pageNavConfig
  pageNavConfig: PageNavigationConfigInterface = {
    type: MdsPagerType.NUMBERING,
    itemToShow: 20
  }

  // Code Viewer
  importModuleCode: string;
  componentCode: string;
  htmlCode: string;
  interfaceCode: string;

  // Properties Detail
  tableContent = [
    {attribute: 'data', type: 'Array', default: '∞', description: 'Pharse data items which will be process for page navigation', version: 'medes-ui@1.15.1 > Latest version'},
    {attribute: 'pageNavConfig',type: 'PageNavigationConfigInterface', default: '∞', description: 'Configuration of Page Navigation Component', version: 'medes-ui@1.15.1 > Latest version'},
    {attribute: 'customClass?',type: 'string', default: '∞', description: 'Put your custom class styling', version: 'medes-ui@1.15.1 > Latest version'},
    {attribute: 'customStyle?',type: 'string', default: '∞', description: 'Put your custom style directly on element', version: 'medes-ui@1.15.1 > Latest version'}
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
    const importMdsUi = 'PageNavigationConfigInterface, MdsPagerType';
    const valuesComponent = `// pageCountConfig
  toShowOptions: number[] = [${this.toShowOptions}];
  
  // pageNavConfig
  pageNavConfig: PageNavigationConfigInterface = {
    type: MdsPagerType.NUMBERING,
    itemToShow: ${this.pageNavConfig.itemToShow}
  }`
    return constructComponentCode(importMdsUi, valuesComponent)
  }

  updateTotal($event: number): void {
    const newConfig = Object.assign({}, this.pageNavConfig);
    newConfig.itemToShow = $event;
    this.pageNavConfig = newConfig;
    this.componentCode = this.reGenerateCode();
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

}
