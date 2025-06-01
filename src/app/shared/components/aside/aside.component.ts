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
        {text: 'Alert', url: 'alert', isNew: true},
      ]
    },
    {
      text: 'Utilities',
      urls: [
        {text: 'String', url: '/utils/string'},
        {text: 'Integer', url: '/utils/number'},
        {text: 'Object', url: '/utils/object', isNew: true},
        {text: 'Array', url: '/utils/array'},
        {text: 'Date', url: '/utils/date'},
        {text: 'Color', url: '/utils/color'}
      ]
    },
    {
      text: 'Angular Components & Utils',
      urls: [
        {
          text: 'Modal',
          url: 'modal-component'
        },
        {
          text: 'Filter Components', url: '/filter-components/intro',
          urls: [
            {text: 'Checkboxes Filter', url: '/filter-components/checkboxes'},
            {text: 'Swatch Filter', url: '/filter-components/swatch'},
            {text: 'Range Slider', url: '/filter-components/range-slider'},
            {text: 'Reset Filter', url: '/filter-components/reset'}
          ]
        },
        {
          text: 'Page Manager Components', url: '/navigation-manager/intro', isNew: true,
          urls: [
            {text: 'Page Navigation', url: '/navigation-manager/page-navigation', isNew: true},
            {text: 'Page Counter', url: '/navigation-manager/page-counter', isNew: true}
          ]
        },
        {
          text: 'Other Components',
          // url: '/ui-boilerplate/grid-system',
          urls: [
            {text: 'PrismJs Highlight', url: '/prismjs-highlight'}
          ]
        },
        {
          text: 'Pipes',
          urls: [
            {text: 'Filter', url: '/pipes/filter'},
            {text: 'Filter by Range', url: '/pipes/filter-range'},
            {text: 'Search', url: '/pipes/search'},
            {text: 'Safe Url', url: '/pipes/safeurl'}
          ]
        },
        {text: '<i class="fas fa-external-link-alt"></i> Demo', url: 'demo'}
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