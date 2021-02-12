import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies; //array of movie objects
  //baseIMGUrl = "https://image.tmdb.org/t/p/w500"; base URL for where the API stores the images, used in HTML file
  //variables used in for loop
  /*releaseDate;
  themovie;*/

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get_movies().subscribe((data)=>{
      this.movies = data['results'];
      //for loop used to visualize data on the console
      /*
      for(const movie in this.movies){
        this.themovie = this.movies[movie];
        this.releaseDate = this.themovie['release_date'];
        console.log(typeof this.releaseDate);
      }
      */
    });
  }
}
