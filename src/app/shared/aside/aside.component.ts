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
        {text: 'Introduction', url: '#'},
        {text: 'How to Install', url: '#'}
      ]
    }, {
      title: 'Components',
      links: [
        {text: 'Doc Boilerplate', url: '/doc-boilerplate'},
        {text: 'Multiple Filter Checkbox', url: '/filter-checkbox'},
        {text: 'PrismJs Highlight', url: '#'}
      ]
    }, {
      title: 'Utilities',
      links: [
        {text: 'String', url: '#'},
        {text: 'Integer', url: '#'},
        {text: 'Object', url: '#'},
        {text: 'Array', url: '#'},
        {text: 'Date', url: '#'}
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
