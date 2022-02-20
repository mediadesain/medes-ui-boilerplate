import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medes-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  menu: any[] = [
    {
      title: 'MedesUI',
      links: [
        {text: 'Introduction', url: '/introduction'},
        {text: 'How to Install', url: '/how-to-install'},
        {text: 'UI Boilerplate', url: '/doc-boilerplate'},
      ]
    }, {
      title: 'Filter Components',
      links: [
        {text: 'Intro', url: '/filter-components'},
        {text: 'Checkboxes Filter', url: '/filter-components/checkboxes'},
        {text: 'Swatch Filter', url: '/filter-components/swatch'},
        {text: 'Reset Filter', url: '/filter-components/reset'}
      ]
    }, {
      title: 'Others',
      links: [
        {text: 'Multiple Filter Checkbox (Deprecated)', url: '/filter-checkbox'},
        {text: 'PrismJs Highlight', url: '/prismjs-highlight'}
      ]
    }, {
      title: 'Utilities',
      links: [
        {text: 'String', url: '/string-utils'},
        {text: 'Integer', url: '/number-utils'},
        {text: 'Object', url: '/object-utils'},
        {text: 'Array', url: '/array-utils'},
        {text: 'Date', url: '/date-utils'}
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
