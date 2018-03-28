import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

//Routing
import { AppRoutingModule }     from './app-routing.module';

// Component
import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { LoginComponent }       from './login/login.component';

// Service
import { HeroService, MessageService, AuthenticationService, UserService  } from './services/index';

// fake data
import { InMemoryDataService, fakeBackendProvider } from './helpers/index';

// guard
import { AuthGuard } from './guards/index';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    LoginComponent
  ],
  providers: [  HeroService,
                MessageService,
                AuthGuard,
                AuthenticationService,
                UserService,
                fakeBackendProvider,
                MockBackend,
                BaseRequestOptions
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
