import { Component } from '@angular/core';

@Component({
  selector: 'mds-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  menu: {title: string; links: {text: string; url: string}[]}[] = [
    {
      title: 'MedesUI',
      links: [
        // {text: 'Introduction', url: '/introduction/info'},
        {text: 'How to Install', url: '/introduction/how-to-install'},
        {text: 'Color Scheme', url: '/introduction/color-scheme'}
      ]
    }, {
      title: 'UI Element - Boilerplate',
      links: [
        {text: 'Basic Elements', url: '/ui-boilerplate/basic-elements'},
        {text: 'Grid System', url: '/ui-boilerplate/grid-system'},
        {text: 'Image Loader', url: '/ui-boilerplate/image-loader'}
      ]
    }, {
      title: 'Filter Components',
      links: [
        {text: 'Intro', url: '/filter-components/intro'},
        {text: 'Checkboxes Filter', url: '/filter-components/checkboxes'},
        {text: 'Swatch Filter', url: '/filter-components/swatch'},
        {text: 'Reset Filter', url: '/filter-components/reset'},
        {text: 'Demo', url: '/filter-components/demo'}
      ]
    }, {
      title: 'Others',
      links: [
        {text: 'PrismJs Highlight', url: '/prismjs-highlight'}
      ]
    }, {
      title: 'Deprecated',
      links: [
        {text: 'Multiple Filter Checkbox', url: '/filter-checkbox'}
      ]
    }, {
      title: 'Utilities',
      links: [
        {text: 'String', url: '/utils/string'},
        {text: 'Integer', url: '/utils/number'},
        {text: 'Object', url: '/utils/object'},
        {text: 'Array', url: '/utils/array'},
        {text: 'Date', url: '/utils/date'},
        {text: 'Color', url: '/utils/color'}
      ]
    }
  ];
  // constructor() { }

}
