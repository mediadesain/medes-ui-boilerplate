import { CommonModule } from '@angular/common';
import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { constructAngularCode } from 'src/app/shared/utils/code-preview-generator';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { PageNavigationManagerModelCode } from '../demo-page-navigation-manager-model-code';
import { LibraryTypeService } from 'src/app/shared/library-type.service';
import { PageNavigationManagerModel }
/*-public-*/ from '@mediadesain/core';
//*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule, MdsModalModule, MdsModalService, MdsPageManagerModule }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';

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
    {docType: 'angular', attribute: 'model',type: 'PageNavigationManagerModel', default: '∞', description: 'Custom configuration of the component itself', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'customClass?',type: 'string', default: '∞', description: 'Put your custom class styling', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'customStyle?',type: 'string', default: '∞', description: 'Put your custom style directly on element', version: '@mediadesain/angular@2.0.0 > Latest version'}
  ];
  tableContentDeprecated = [];

  constructor(public mdsModalService: MdsModalService, public libraryTypeService: LibraryTypeService, private cdr: ChangeDetectorRef) {
    this.reGenerateCode(); 
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
  
  reGenerateCode(): void {
    const importMdsCore = 'PageNavigationModel';
    const importMdsAngular = 'MdsPageManagerModule';
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
    this.componentCode = constructAngularCode(importMdsCore, importMdsAngular, imports, '', valuesComponent)
  }

  updateTotal($event: number): void {
    const newConfig = Object.assign({}, this.pageNavConfig);
    newConfig.configs.itemToShow = $event;
    this.pageNavConfig = newConfig;
    this.reGenerateCode(); 
  }

htmlCode = `
<!-- Demo Medes Page Counter Component -->
<small>Total Item </small>
<mds-page-counter [(model)]="pageNavConfig" [customStyle]="'border-radius: 7px;'"></mds-page-counter>`;

}
