import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'mds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private router: Router
  ){
    this.router.events.pipe(
      filter( e => e instanceof NavigationEnd)
    ).subscribe( (navEnd: NavigationEnd) => {
      document.getElementsByTagName('content')[0].classList.remove('active');
    });
  }
}
