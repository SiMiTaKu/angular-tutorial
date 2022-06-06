import { Component, OnInit } from '@angular/core';
import { Hero }              from "../hero";
import { HeroService }       from "../hero.service";
import { MessageService }    from '../message.service';

import { Store, Select } from '@ngxs/store';
import { HeroState }       from "../hero.state";
import { Observable }      from "rxjs";
import { HeroAction }      from "../hero.actions";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /** ngxs Selector **/
  @Select(HeroState.heroes) heroes$?: Observable<Hero[]>

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.store.dispatch(new HeroAction.Load())
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }

    this.store.dispatch(new HeroAction.Add({ name } as Hero))
  }

  delete(hero: Hero): void {
    this.store.dispatch(new HeroAction.Delete(hero))
  }
}


