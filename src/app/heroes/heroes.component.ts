import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { Hero }        from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  dtOptions: DataTables.Settings = {};

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      scrollY: '500',
      scrollX: true,
      columnDefs: [{ width: '50%' , targets: 2}]
    };
    //this.getHeroes();
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });

  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}
