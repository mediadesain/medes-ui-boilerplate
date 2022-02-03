import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medes-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  menu: any[] = [
    {
      title: 'Introduction',
      links: [
        {text: 'What', url: '/'},
        {text: 'How to Install', url: '/'},
        {text: 'List Sub 3', url: '/'}
      ]
    }, {
      title: 'Components',
      links: [
        {text: 'Multiple Filter Checkbox', url: '/'},
        {text: 'PrismJs Highlight', url: '/'}
      ]
    }, {
      title: 'Utilities',
      links: [
        {text: 'String', url: '/'},
        {text: 'Integer', url: '/'},
        {text: 'Object', url: '/'},
        {text: 'Array', url: '/'}
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
