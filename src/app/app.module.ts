import { NgModule } 　　　from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }         from "@angular/forms";
import { HttpClientModule}     from "@angular/common/http";
import { AppComponent }        from './app.component';
import { AppRoutingModule }    from './app-routing.module';
import { HeroesComponent }     from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MessagesComponent }   from './messages/messages.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { InMemoryDataService } from './in-memory-data.service';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { NgxsModule } from "@ngxs/store";
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { HeroState }    from "./hero.state";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false}
    ),
    NgxsModule.forRoot([
      HeroState
    ]),
    NgxsLoggerPluginModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
