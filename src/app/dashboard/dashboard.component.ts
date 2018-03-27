import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  users: User[]  = [];

  constructor(private heroService: HeroService, private userService: UserService) { }

  ngOnInit() {
    this.getHeroes();
    this.getUsers();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(
          users => { this.users = users }
        );
  }

}
