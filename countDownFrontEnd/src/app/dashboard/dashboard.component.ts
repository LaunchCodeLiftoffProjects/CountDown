import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies; //array of movie objects
  title; //title of that movie
  theMovie // single movie object

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.get_movies().subscribe((data)=>{
      this.movies = data['results'];
      for(const movie in this.movies){
        this.theMovie = this.movies[movie];
        this.title = this.theMovie["original_title"];
        console.log(this.title);

      }
      

    });
  }

}
