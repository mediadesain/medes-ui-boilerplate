import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'medes-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isActive = true;
  constructor(
    private router: Router
  ) {
    this.router.events.pipe(
      filter( e => e instanceof NavigationEnd)
    ).subscribe( (navEnd: NavigationEnd) => {
      this.isActive = true;
    });
  }

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
