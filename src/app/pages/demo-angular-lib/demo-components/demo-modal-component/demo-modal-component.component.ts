import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoModalChildComponent } from './demo-modal-child/demo-modal-child.component';
import { constructAngularCode, constructReactCode } from 'src/app/shared/utils/code-preview-generator';
import { htmlCode, htmlCode2, interfaceCode } from './modal-component-preview-code';
import { FormsModule } from '@angular/forms';
import { LibraryTypeService } from 'src/app/shared/library-type.service';
import { MdsModalModel }
/*-public-*/ from '@mediadesain/core';
//*-private-*/ from 'projects/medes-ui/src/public-api';
import { MdsHightlightPrismModule, MdsModalModule, MdsModalService }
/*-public-*/ from '@mediadesain/angular';
//*-private-*/ from 'projects/medes-ui-angular/src/public-api';


@Component({
  selector: 'mds-demo-modal',
  templateUrl: './demo-modal-component.component.html',
  styleUrls: ['./demo-modal-component.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, MdsHightlightPrismModule, MdsModalModule, DemoModalChildComponent]
})

export class DemoModalComponent {
  showHeaderFooter = true;
  mdsModalModelConfig: MdsModalModel = {
    configs: {
      modalWidth: 'medium',
      scrollInTheModal: false,
      marginVertical: 50,
      borderRadius: 3,
      hideCloseButton: false,
      disableCloseBackdrop: false
    }
  }

  // Code Viewer
  componentCode: string;
  jsxComponentCode: string;
  htmlCode: string;
  interfaceCode: string;

  // Properties Detail
  showDeprecated = false;
  tableContent = [
    {docType: 'angular', attribute: 'id', type: 'string', default: '∞', description: 'id modal is required for identify which modal to trigger', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'angular', attribute: 'model?', type: 'MdsModalModel', default: '∞', description: 'Modal configuratuin', version: '@mediadesain/angular@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'id', type: 'string', default: '∞', description: 'id modal is required for identify which modal to trigger', version: '@mediadesain/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'ref', type: 'useRef<MdsModalRefs>(null)', default: 'null', description: 'Modal configuratuin', version: '@mediadesain/react@2.0.0 > Latest version'},
    {docType: 'react', attribute: 'model?', type: 'MdsModalModel', default: '∞', description: 'Modal configuratuin', version: '@mediadesain/react@2.0.0 > Latest version'}
  ];
  tableContentDeprecated = [
    {docType: 'angular', attribute: 'modalWidth?', type: 'string of option: <i>\'small\' | \'medium\' | \'large\' | \'fullscreen\'</i> or number', default: '\'medium\'', description: 'Width of modal by default is medium (700px) but posible with custom width. If set as \'fullscreen\' wil set height & width fullscreen', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'marginTop?', type: 'number', default: '44', description: 'Padding top modal', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'marginBottom?', type: 'number', default: '44', description: 'Padding bottom modal', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'borderRadius?', type: 'number', default: '5', description: 'Border radius size', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'hideCloseButton?', type: 'boolean', default: 'false', description: 'Visibility of close button', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
    {docType: 'angular', attribute: 'disableCloseBackdrop?', type: 'boolean', default: 'false', description: 'Disable closing modal if clicking backdrop', version: 'medes-ui@1.14.0 > medes-ui@1.17.1'},
  ];

  constructor(public mdsModalService: MdsModalService, public libraryTypeService: LibraryTypeService) {
    this.reGenerateCode();
  }

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }

  reGenerateCode(): void {
    // Angular Code
    const importMdsCore = 'MdsModalModel';
    const importMdsAngular = 'MdsModalModule, MdsModalService';
    const imports = 'MdsModalModule';
    const valuesComponent = `// model
  mdsModalModelConfig: MdsModalModel = {
    configs: {
      modalWidth: '${this.mdsModalModelConfig.configs.modalWidth}',
      scrollInTheModal: ${this.mdsModalModelConfig.configs.scrollInTheModal},
      marginVertical: ${this.mdsModalModelConfig.configs.marginVertical},
      borderRadius: ${this.mdsModalModelConfig.configs.borderRadius},
      hideCloseButton: ${this.mdsModalModelConfig.configs.hideCloseButton},
      disableCloseBackdrop: ${this.mdsModalModelConfig.configs.disableCloseBackdrop}
    }
  }
  
  constructor(public mdsModalService: MdsModalService) {}

  openModal(id: string): void {
    this.mdsModalService.trigger(id);
  }`
    this.componentCode = constructAngularCode(importMdsCore, importMdsAngular, imports, '', valuesComponent);

    // React Code
    const importMdsCoreReact = 'MdsModalModel';
    const importMdsReact = 'MdsModal';
    const valuesReactComponent = `// model
  mdsModelProp: MdsModalModel = {
    configs: {
      modalWidth: '${this.mdsModalModelConfig.configs.modalWidth}',
      scrollInTheModal: ${this.mdsModalModelConfig.configs.scrollInTheModal},
      marginVertical: ${this.mdsModalModelConfig.configs.marginVertical},
      borderRadius: ${this.mdsModalModelConfig.configs.borderRadius},
      hideCloseButton: ${this.mdsModalModelConfig.configs.hideCloseButton},
      disableCloseBackdrop: ${this.mdsModalModelConfig.configs.disableCloseBackdrop}
    }
  }
  const demoModal1 = useRef<MdsModalRefs>(null);
  
  return (
    <>
      {/* -- Button Modal -- */}
      <button onClick={ () => demoModal1 && demoModal1.current?.onShowHide() }>Open Modal 1</button>

      {/* -- Medes Modal Component -- */}
      <MdsModal id='demoModal1' ref={demoModal1} model={mdsModelProp}>${this.showHeaderFooter ? `
        {/* -- Header -- */}
        <div className="modal-header">
            <h4 className="txt-transculant">A Tall Custom Modal!</h4>
        </div>` : ''}
        {/* -- Body -- */}
        <div className="modal-body p-1">
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dolor quis sem porta feugiat ut sed neque. Sed sit amet eros sem. In malesuada eleifend erat, nec pulvinar elit dictum in. Donec eget erat eu erat ornare rutrum. Curabitur et varius neque. Nulla ultricies vel ligula pretium semper.</p>
            <div style={{maxWidth: '700px', margin: '0 auto'}}>
                <img src="https://www.mediadesain.com/assets/images/elements/office.jpg" alt='test'/>
            </div>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dolor quis sem porta feugiat ut sed neque. Sed sit amet eros sem. In malesuada eleifend erat, nec pulvinar elit dictum in. Donec eget erat eu erat ornare rutrum. Curabitur et varius neque. Nulla ultricies vel ligula pretium semper.</p>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce et dolor quis sem porta feugiat ut sed neque. Sed sit amet eros sem. In malesuada eleifend erat, nec pulvinar elit dictum in. Donec eget erat eu erat ornare rutrum. Curabitur et varius neque. Nulla ultricies vel ligula pretium semper.</p>
        </div>${this.showHeaderFooter ? `
        {/* -- Footer -- */}
        <div className="modal-footer flex-x justify-between">
            <button className="btn-swatch-reset" onClick={ () => demoModal1 && demoModal1.current?.onShowHide() }>Cancel</button>
            <button className="btn-swatch-a" onClick={ () => demoModal1 && demoModal1.current?.onShowHide() }>Save</button>
        </div>` : ''}
      </MdsModal>
    </>
  );`;
    this.jsxComponentCode = constructReactCode(importMdsCoreReact, importMdsReact, valuesReactComponent)


    this.htmlCode = this.showHeaderFooter ? htmlCode : htmlCode2;
    this.interfaceCode = interfaceCode;
  }
  
}
