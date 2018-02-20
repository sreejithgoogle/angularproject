import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

/* Declare the components */

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  /* Below funtionality for list all heroes */

  getHeroes(): void {
    this.heroService.getHeroes()                        /* getHeroes function included in hero.service.ts */
    .subscribe(heroes => this.heroes = heroes);
  }

  /* Below funtionality for add a new hero */

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)   /* addHero function included in hero.service.ts */
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  /* Below funtionality for delete a hero from the list */

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();      /* deleteHero function included in hero.service.ts */
  }

}
