import { Component } from '@angular/core';
import { LibraryTypeService } from 'src/app/shared/services/library-type.service';

@Component({
  selector: 'mds-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  isCollapsedVersion: boolean;
  menu: ThreeMenuModel[];
  menuLib: ThreeMenuModel[];
  
  constructor(public libraryTypeService: LibraryTypeService) {
    this.isCollapsedVersion = true;
    this.menu = [
      {
        text: 'MedesUI',
        urls: [
          {text: 'How to Install', url: '/introduction/how-to-install'},
          {text: 'Color Scheme', url: '/introduction/color-scheme'}
        ]
      },
      {
        text: 'UI Element - Boilerplate',
        urls: [
          {text: 'Basic Elements', url: '/ui-elements/basic-elements'},
          {text: 'Layout Utils', url: '/ui-elements/layout-utils'},
          {text: 'Grid System', url: '/ui-elements/grid-system'},
          {text: 'Loader', url: '/ui-elements/loader'}
        ]
      },
      {
        text: 'Services',
        urls: [
          {text: 'Alert', url: '/services/alert'},
        ]
      },
      {
        text: 'Utilities',
        urls: [
          {text: 'String', url: '/utils/string'},
          {text: 'Integer', url: '/utils/number'},
          {text: 'Object', url: '/utils/object'},
          {text: 'Array', url: '/utils/array'},
          {text: 'Date', url: '/utils/date'},
          {text: 'Color', url: '/utils/color'}
        ]
      }
    ];
    this.menuLib = [
      {
        text: 'Components & Libraries',
        urls: [
          {
            text: 'Modal',
            url: 'libraries/modal-component',
            isNew: true
          },
          {
            text: 'Form Components', url: 'libraries/form-components/intro',
            urls: [
              {text: 'Toggle', url: 'libraries/form-components/toggle'},
              {text: 'Number', url: 'libraries/form-components/input-number'}
            ]
          },
          {
            text: 'Filter Components', url: 'libraries/filter-components/intro',
            urls: [
              {text: 'Checkboxes Filter', url: 'libraries/filter-components/checkboxes', isNew: true},
              {text: 'Swatch Filter', url: 'libraries/filter-components/swatch', isNew: true},
              {text: 'Range Slider', url: 'libraries/filter-components/range-slider', isNew: true},
              {text: 'Reset Filter', url: 'libraries/filter-components/reset', isNew: true}
            ]
          },
          {
            text: 'Page Manager Components', url: 'libraries/navigation-manager/intro',
            urls: [
              {text: 'Page Navigation', url: 'libraries/navigation-manager/page-navigation', isNew: true},
              {text: 'Page Counter', url: 'libraries/navigation-manager/page-counter', isNew: true}
            ]
          },
          {
            text: 'Other Components',
            // url: '/ui-boilerplate/grid-system',
            urls: [
              {text: 'PrismJs Highlight', url: 'libraries/prismjs-highlight'}
            ]
          },
          {
            text: 'Pipes',
            urls: [
              {text: 'Filter', url: 'libraries/pipes/filter'},
              {text: 'Filter by Range', url: 'libraries/pipes/filter-range'},
              {text: 'Search', url: 'libraries/pipes/search'},
              {text: 'Safe Url', url: 'libraries/pipes/safeurl'}
            ]
          },
          {text: '<i class="fas fa-external-link-alt"></i> Demo', url: 'libraries/demo'}
        ]
      }
    ];
  }

  resetScroll(): void {
    document.getElementById('article').scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  showHide(group: ThreeMenuModel): void {
    group.isCollapsed = !group.isCollapsed;
  }

}

export interface ThreeMenuModel {
  text: string;
  url?: string;
  urls?: ThreeMenuModel[];
  isNew?: boolean;
  isCollapsed?: boolean;
}