import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MoviesComponent } from '../movies/movies.component';
import { BooksComponent } from '../books/books.component';
import { MusicComponent } from '../music/music.component';
import { EventsComponent } from '../events/events.component';
import { GamesComponent } from '../games/games.component';
import { SettingsComponent } from '../settings/settings.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
