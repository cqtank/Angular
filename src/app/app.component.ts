import { Component }  from '@angular/core';
import { Router }     from '@angular/router';

import { AuthenticationService } from './_services/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  constructor(private router: Router, private authenticationService: AuthenticationService)  { }

  isLogged(){
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }else{
      return false;
    }
  }

}
