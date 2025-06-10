import { Component } from '@angular/core';

@Component({
  selector: 'mds-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  isCollapsedVersion: boolean = false;
  menu: ThreeMenuModel[] = [
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
        {text: 'Image Loader', url: '/ui-elements/image-loader'}
      ]
    },
    {
      text: 'Services',
      urls: [
        {text: 'Alert', url: '/services/alert', isNew: true},
      ]
    },
    {
      text: 'Utilities',
      urls: [
        {text: 'String', url: '/utils/string'},
        {text: 'Integer', url: '/utils/number'},
        {text: 'Object', url: '/utils/object', isNew: true},
        {text: 'Array', url: '/utils/array', isNew: true},
        {text: 'Date', url: '/utils/date'},
        {text: 'Color', url: '/utils/color'}
      ]
    },
    {
      text: 'Angular Components & Utils',
      urls: [
        {
          text: 'Modal',
          url: 'angular-lib/modal-component'
        },
        {
          text: 'Form Components', url: 'angular-lib/form-components/intro', isNew: true,
          urls: [
            {text: 'Toggle', url: 'angular-lib/form-components/toggle', isNew: true},
            {text: 'Number', url: 'angular-lib/form-components/input-number', isNew: true}
          ]
        },
        {
          text: 'Filter Components', url: 'angular-lib/filter-components/intro',
          urls: [
            {text: 'Checkboxes Filter', url: 'angular-lib/filter-components/checkboxes'},
            {text: 'Swatch Filter', url: 'angular-lib/filter-components/swatch'},
            {text: 'Range Slider', url: 'angular-lib/filter-components/range-slider'},
            {text: 'Reset Filter', url: 'angular-lib/filter-components/reset'}
          ]
        },
        {
          text: 'Page Manager Components', url: 'angular-lib/navigation-manager/intro', isNew: true,
          urls: [
            {text: 'Page Navigation', url: 'angular-lib/navigation-manager/page-navigation', isNew: true},
            {text: 'Page Counter', url: 'angular-lib/navigation-manager/page-counter', isNew: true}
          ]
        },
        {
          text: 'Other Components',
          // url: '/ui-boilerplate/grid-system',
          urls: [
            {text: 'PrismJs Highlight', url: 'angular-lib/prismjs-highlight'}
          ]
        },
        {
          text: 'Pipes',
          urls: [
            {text: 'Filter', url: 'angular-lib/pipes/filter'},
            {text: 'Filter by Range', url: 'angular-lib/pipes/filter-range'},
            {text: 'Search', url: 'angular-lib/pipes/search'},
            {text: 'Safe Url', url: 'angular-lib/pipes/safeurl'}
          ]
        },
        {text: '<i class="fas fa-external-link-alt"></i> Demo', url: 'angular-lib/demo'}
      ]
    }
  ];
  // constructor() { }

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