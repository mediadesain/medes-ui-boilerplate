import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'mds-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
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


  toggleAside(): void {
    const asideelement = document.getElementsByTagName('content')[0];
    if (this.isActive) {
      asideelement.classList.add('active');
    } else {
      asideelement.classList.remove('active');
    }
  }

}
