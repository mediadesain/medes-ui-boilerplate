import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { constructComponentCode, constructImportModuleCode } from 'src/app/shared/utils/code-preview-generator';
import { htmlCode, interfaceCode } from './page-navigation-preview-code';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { MdsHightlightPrismModule, MdsPageManagerModule, MdsModalService, MdsModalModule, MdsPagerType, PageNavigationConfigInterface }
/*-public-mode-*/ from 'medes-ui';
//*-dev-mode-*/ from 'projects/medes-ui/src/public-api';


@Component({
  selector: 'mds-demo-page-navigation',
  templateUrl: './page-navigation.component.html',
  styleUrls: ['./page-navigation.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MdsHightlightPrismModule, MdsModalModule, MdsPageManagerModule]
})
export class DemoPageNavigationComponent implements AfterContentChecked {
  // data
  data: string[] = SampleProductsData.userNames;
  
  // pageNavConfig
  pageNavConfig: PageNavigationConfigInterface = {
    type: MdsPagerType.NUMBERING,
    itemToShow: 10
  }

  // Code Viewer
  importModuleCode: string;
  componentCode: string;
  htmlCode: string;
  interfaceCode: string;

  // Properties Detail
  tableContent = [
    {attribute: 'data', type: 'Array', default: '∞', description: 'Pharse data items which will be process for page navigation', version: 'medes-ui@1.15.1 >'},
    {attribute: 'pageNavConfig',type: 'PageNavigationConfigInterface', default: '∞', description: 'Configuration of Page Navigation Component', version: 'medes-ui@1.15.1 >'}
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
    const valuesComponent = `// data
  data: string[] = SampleProductsData.userNames;
  // pageNavConfig
  pageNavConfig: PageNavigationConfigInterface = {
    type: ${this.getInterfaceType(this.pageNavConfig.type)}${this.pageNavConfig.itemToShow ? `,\n    itemToShow: ${this.pageNavConfig.itemToShow}`: 'itemToShow: '+ 10}
  }`
    return constructComponentCode(importMdsUi, valuesComponent)
  }
  
  getInterfaceType(value: string): string {
    if (value === 'numbering') return 'MdsPagerType.NUMBERING';
    else if (value === 'standard') return 'MdsPagerType.STANDARD';
  }

  updateTotal($event: number){
    const newConfig = Object.assign({}, this.pageNavConfig);
    newConfig.itemToShow = $event;
    this.pageNavConfig = newConfig;
    this.componentCode = this.reGenerateCode();
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }


}
