import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'medes-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActive = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleAside(): any {
    const asideelement = document.getElementsByTagName('content')[0];
    if (this.isActive) {
      asideelement.classList.add('active');
    } else {
      asideelement.classList.remove('active');
    }
  }

}
