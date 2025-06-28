import { CommonModule } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { constructComponentCode } from 'src/app/shared/utils/code-preview-generator';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { PageNavigationManagerModelCode } from '../demo-page-navigation-manager-model-code';
import { MdsHightlightPrismModule, MdsModalModule, MdsModalService, MdsPageManagerModule, PageNavigationManagerModel }
//*-public-mode-*/ from 'medes-ui-angular';
/*-dev-mode-*/ from 'projects/medes-ui-angular/src/public-api';

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
  showFullInterfaceCode: boolean;
  componentCode: string;
  interfaceCode: string;

  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {attribute: 'model',type: 'PageNavigationManagerModel', default: '∞', description: 'Custom configuration of the component itself', version: 'medes-ui@1.18.0 > Latest version'},
    {attribute: 'customClass?',type: 'string', default: '∞', description: 'Put your custom class styling', version: 'medes-ui@1.15.1 > Latest version'},
    {attribute: 'customStyle?',type: 'string', default: '∞', description: 'Put your custom style directly on element', version: 'medes-ui@1.15.1 > Latest version'}
  ];
  tableContentDeprecated = [
    {attribute: 'pageNavConfig',type: 'PageNavigationModel', default: '∞', description: 'Configuration of Page Navigation Component, on newer version has been moved to main model', version: 'medes-ui@1.15.1 > medes-ui@1.17.1'},
    {attribute: 'pageCountConfig',type: 'Array<number>', default: '∞', description: 'Removed, on newer version has been merge to model > page counter configuration options', version: 'medes-ui@1.15.1 > medes-ui@1.17.1'}
  ];

  constructor(public mdsModalService: MdsModalService, private cdr: ChangeDetectorRef) {
    this.componentCode = this.reGenerateCode();
    this.interfaceCode = PageNavigationManagerModelCode.geModel('pageCounter');
  }
    
  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  expandCollapseModel(): void {
    if (this.showFullInterfaceCode) {
      this.interfaceCode = PageNavigationManagerModelCode.geModel('pageCounter');
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
    return constructComponentCode(importMdsUi, imports, '', valuesComponent)
  }

  updateTotal($event: number): void {
    const newConfig = Object.assign({}, this.pageNavConfig);
    newConfig.configs.itemToShow = $event;
    this.pageNavConfig = newConfig;
    this.componentCode = this.reGenerateCode();
  }

htmlCode = `
<!-- Demo Medes Page Counter Component -->
<small>Total Item </small>
<mds-page-counter [(model)]="pageNavConfig" [customStyle]="'border-radius: 7px;'"></mds-page-counter>`;

}
