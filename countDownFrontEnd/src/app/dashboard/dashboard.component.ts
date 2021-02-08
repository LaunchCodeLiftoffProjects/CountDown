import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import * as moment from 'moment'; // allows use of the "moment()" function in Typescript; required running "npm install --save moment" - https://stackoverflow.com/questions/35166168/how-to-use-moment-js-library-in-angular-2-typescript-app

export { moment }

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

   dateToIsoFormat(releaseDate: string) : Date {
    // how to change string date to ISO format - https://stackoverflow.com/questions/35959853/convert-string-to-isodate
    
    let originalDate = moment(releaseDate, "YYYY-MM-DD");
    let isoDate = originalDate.format()
    let dt1 : Date = new Date (isoDate);
    return dt1;
   }

  diffInTime (releaseDate: string) : number {

    let dt1 : Date = new Date(this.dateToIsoFormat(releaseDate)); // should be the greater date because the movies are expected to be coming out in the future
    let dt2 : Date = new Date();
    let diff_In_Time : number = dt1.getTime()-dt2.getTime(); // will be a negative number if the date has passed
    return diff_In_Time;  // returns the difference in time measured in miliseconds
   }

  daysUntilRelease (releaseDate: string) : number {

    let diff_In_Time : number = this.diffInTime(releaseDate);
    let diff_In_Days : number = diff_In_Time / (1000 * 3600 * 24);
    return Math.ceil(diff_In_Days);  // returns the number of full days -- use Math.ceil to round properly for both positive and negative results : https://www.oreilly.com/library/view/javascript-the-definitive/0596101996/re106.html
   }

   hoursUntilRelease (releaseDate: string) : number {
    let timeInMiliseconds : number = this.diffInTime(releaseDate);
    let numOfFullDays : number = this.daysUntilRelease(releaseDate);
    let daysInMiliseconds : number = numOfFullDays * 1000 * 3600 * 24;
    let diff_In_Hours : number = ((timeInMiliseconds - daysInMiliseconds)/ 1000) / (60*60);
    return Math.ceil(diff_In_Hours);  
   }

   minsUntilRelease (releaseDate: string) : number {
    let timeInMiliseconds : number = this.diffInTime(releaseDate);
    let numOfFullDays : number = this.daysUntilRelease(releaseDate);
    let daysInMiliseconds : number = numOfFullDays * 1000 * 3600 * 24;
    let numOfFullHours : number = this.hoursUntilRelease(releaseDate);
    let hoursInMiliseconds : number = (numOfFullHours * 1000) * (60 * 60); 
    let diff_In_Mins : number = ((timeInMiliseconds - daysInMiliseconds - hoursInMiliseconds)/ 1000) / 60;
    return Math.floor(diff_In_Mins);  
   }

   secUntilRelease (releaseDate: string) : number {
    let timeInMiliseconds : number = this.diffInTime(releaseDate);
    let numOfFullDays : number = this.daysUntilRelease(releaseDate);
    let daysInMiliseconds : number = numOfFullDays * 1000 * 3600 * 24;
    let numOfFullHours : number = this.hoursUntilRelease(releaseDate);
    let hoursInMiliseconds : number = (numOfFullHours * 1000) * (60 * 60); 
    let numOfFullMins : number = this.minsUntilRelease(releaseDate);
    let minsInMiliseconds: number = ((numOfFullMins * 1000) * 60);
    let diff_In_Sec : number = ((timeInMiliseconds - daysInMiliseconds - hoursInMiliseconds - minsInMiliseconds)/ 1000);
    return Math.floor(diff_In_Sec);  
   }

   

}
