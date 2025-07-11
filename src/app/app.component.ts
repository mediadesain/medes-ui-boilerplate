import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AsideComponent } from './shared/components/aside/aside.component';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'mds-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [NavbarComponent, FooterComponent, AsideComponent, RouterOutlet]
})
export class AppComponent {
  isDevMode: boolean;
  constructor(
    public router: Router,
    public location: Location
  ){
    this.isDevMode = environment.production
    // Listen active Routing
    this.router.events.pipe(
      filter( e => e instanceof NavigationEnd)
    ).subscribe( (/*navEnd: NavigationEnd*/) => {
      document.getElementsByTagName('content')[0].classList.remove('active');
    });
  }
  
}
