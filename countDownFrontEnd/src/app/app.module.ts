import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesComponent } from './movies/movies.component';
import { BooksComponent } from './books/books.component';
import { MusicComponent } from './music/music.component';
import { EventsComponent } from './events/events.component';
import { GamesComponent } from './games/games.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { TosComponent } from './tos/tos.component';
import { AddOwnEventComponent } from './add-own-event/add-own-event.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MoviesComponent,
    BooksComponent,
    MusicComponent,
    EventsComponent,
    GamesComponent,
    AuthComponent,
    SettingsComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    LoadingSpinnerComponent,
    TosComponent,
    AddOwnEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
