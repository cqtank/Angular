import { Component, OnInit } from '@angular/core';
import { User, Hero } from '../models/index';
import { UserService, HeroService } from '../services/index';

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
      .subscribe(heroes => this.heroes = heroes.slice(1, 9));
  }

  getUsers(): void {
    this.userService.getUsers()
        .subscribe(
          users => { this.users = users }
        );
  }

}
