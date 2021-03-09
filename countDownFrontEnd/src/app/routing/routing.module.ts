import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserProductListComponent } from '../dashboard/user-products/user-product-list/user-product-list.component';
import { MoviesComponent } from '../movies/movies.component';
import { BooksComponent } from '../books/books.component';
import { MusicComponent } from '../music/music.component';
import { EventsComponent } from '../events/events.component';
import { GamesComponent } from '../games/games.component';
import { SettingsComponent } from '../settings/settings.component';
import { AuthComponent } from '../auth/auth.component';
import { TosComponent } from '../tos/tos.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'books',
    component: BooksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'music',
    component: MusicComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'events',
    component: EventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'games',
    component: GamesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'authentication',
    component: AuthComponent
  },
  {
    path: 'ProductList',
    component: UserProductListComponent
  },

  {
    path: 'tos',
    component: TosComponent
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
