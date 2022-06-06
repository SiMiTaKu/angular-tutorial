import { Component, OnInit } from '@angular/core';
import { Hero }              from "../hero";
import { HeroService }       from "../hero.service";
import { MessageService }    from '../message.service';

import { Store, Select } from '@ngxs/store';
import { HeroState }       from "../hero.state";
import { Observable }      from "rxjs";
import { HeroAction }      from "../hero.actions";

import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  /** ngxs Selector **/
  @Select(HeroState.heroes) heroes$?: Observable<Hero[]>

  newHero = new FormControl('');
  loding?: boolean;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.getHeroes();
    this.loding = true;
  }

  getHeroes(): void {
    this.store.dispatch(new HeroAction.Load()).subscribe(
      _ => _,
      error => error,
      () => this.loding = false //完了したらローディングメッセージを消す。
      )
  }

  add(name: string): void {
    this.loding = true;
    name = name.trim();
    if (!name) { return; }

    this.store.dispatch(new HeroAction.Add({ name } as Hero)).subscribe(
      _ => _,
      error => error,
      () => this.loding = false
    )
  }

  delete(hero: Hero): void {
    this.loding = true;
    this.store.dispatch(new HeroAction.Delete(hero)).subscribe(
       _ => _,
      error => error,
      () => this.loding = false
    )
  }
}


