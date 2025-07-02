import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { constructAngularCode, constructReactCode } from 'src/app/shared/utils/code-preview-generator';
import { htmlCode } from './page-navigation-preview-code';
import { SampleProductsData } from 'src/app/shared/constant/products';
import { PageNavigationManagerModelCode } from '../demo-page-navigation-manager-model-code';
import { LibraryTypeService } from 'src/app/shared/services/library-type.service';
import { PageNavigationManagerModel }
/*-public-*/ from '@mediadesain/core';
//*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule, MdsPageManagerModule, MdsModalService, MdsModalModule }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';


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
  jsxComponentCode: string;
  htmlCode: string;
  interfaceCode: string;
  
  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {docType: 'angular', attribute: 'data', type: 'Array', default: '∞', description: 'Pharse data items which will be process for page navigation', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'model',type: 'PageNavigationManagerModel', default: '∞', description: 'Custom configuration parameter', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'data', type: 'Array', default: '∞', description: 'Pharse data items which will be process for page navigation', version: '@mediadesain/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'model',type: 'PageNavigationManagerModel', default: '∞', description: 'Custom configuration parameter', version: '@mediadesain/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'modelChange',type: '(value: PageNavigationManagerModel) => void', default: '∞', description: 'Get update custom configuration & data output', version: '@mediadesain/react@2.0.0 > Latest version'}
  ];
  tableContentDeprecated = [];

  constructor(public mdsModalService: MdsModalService, public libraryTypeService: LibraryTypeService, private cdr: ChangeDetectorRef) {
    this.reGenerateCode(); 
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

  reGenerateCode(): void {
    // Angular Code
    const importMdsCore = 'PageNavigationModel';
    const importMdsAngular = 'MdsPageManagerModule';
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
    this.componentCode = constructAngularCode(importMdsCore, importMdsAngular, imports, '', valuesComponent);
    
    // React Code
    const importMdsCoreReact = 'PageNavigationManagerModel';
    const importMdsReact = 'MdsPageNavigation';
    const valuesReactComponent = `// data
  const data: string[] = SampleProductsData.userNames;
  // model
  const [pageNavModel, setPageNavModel] = React.useState<PageNavigationManagerModel>({
    configs: {
      itemToShow: ${this.pageNavModel.configs.itemToShow},
      // pageNavigation Configuration
      pageNavigation: {
        type: '${this.pageNavModel.configs.pageNavigation.type}',
        color: '${this.pageNavModel.configs.pageNavigation.color}'
      }
    }
  });
    
  return (
    <>
      {/*-- Demo Medes Page Navigation Component -- */}
      <MdsPageNavigation data={data} model={pageNavModel} modelChange={ (value) => setPageNavModel(value) }></MdsPageNavigation>
    </>
  );`;
    this.jsxComponentCode = constructReactCode(importMdsCoreReact, importMdsReact, valuesReactComponent);
  }
  
  getInterfaceType(value: string): string {
    if (value === 'numbering') return 'MdsPagerType.NUMBERING';
    else if (value === 'standard') return 'MdsPagerType.STANDARD';
  }

  updateTotal($event: number): void {
    const newConfig = Object.assign({}, this.pageNavModel);
    newConfig.configs.itemToShow = $event;
    this.pageNavModel = newConfig;
    this.reGenerateCode();
  }

}
