import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DyamicTitlebarService } from './shared/services/dynamic-titlebar.service';

@Component({
  selector: 'mds-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public router: Router,
    public location: Location,
    dyamicTitlebarService: DyamicTitlebarService
  ){
    // Listen active Routing
    this.router.events.pipe(
      filter( e => e instanceof NavigationEnd)
    ).subscribe( (/*navEnd: NavigationEnd*/) => {
      document.getElementsByTagName('content')[0].classList.remove('active');
    });
  }
  
}
