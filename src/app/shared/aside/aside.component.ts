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
        {text: 'How to Install', url: '/how-to-install'}
      ]
    }, {
      title: 'Components',
      links: [
        {text: 'Doc Boilerplate', url: '/doc-boilerplate'},
        {text: 'Multiple Filter Checkbox', url: '/filter-checkbox'},
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
