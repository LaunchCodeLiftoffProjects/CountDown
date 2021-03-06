import { Component, OnInit } from '@angular/core';
import { UserProductService } from '../../shared/user-product.service';
import * as moment from 'moment'; // allows use of the "moment()" function in Typescript; required running "npm install --save moment" - https://stackoverflow.com/questions/35166168/how-to-use-moment-js-library-in-angular-2-typescript-app
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-user-product-list',
  templateUrl: './user-product-list.component.html',
  styleUrls: ['./user-product-list.component.css']
})
export class UserProductListComponent implements OnInit {
  tempItemList;
  list;

  // constructor(private service:UserProductService) { } //method1 - tried using youtube tutorial

  constructor(private apiService: ApiService, private service:UserProductService) { } //method3 - tried to bring in local api data this way (from api module)

  ngOnInit() {
    let tempArr = [];
    let tempItemList = [];
    let dt2 : Date = new Date();

      this.apiService.get_countdown_products().subscribe((data)=>{
        tempArr = Object.entries(data).map(e => e[1])

        for (let i = 0; i < tempArr.length; i++) {
            let originalDate = moment(tempArr[i].releaseDate, "YYYY-MM-DD");
            let isoDate = originalDate.format();
            let dt1 : Date = new Date (isoDate);
            if (dt1.getTime() - dt2.getTime() > 0 && tempArr[i].imgLink != null) {
              this.tempItemList = tempItemList.push(tempArr[i]);
              console.log('fart');
              console.log(this.tempItemList[i]);
            }
            console.log(tempArr[i]);
        }
      });

  this.list = tempArr;
    // this.service.refreshList(); //method1 - tried using youtube tutorial

    //method3 - tried to bring in local api data this way (from api module)
    this.apiService.get_countdown_products().subscribe((data)=>{

      this.list = data;
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
    let diff_In_Time : number = dt1.getTime()-dt2.getTime(); // will be a negative number if the release date has already passed
    return diff_In_Time;  // returns the difference in time as measured in miliseconds
   }

  daysUntilRelease (releaseDate: string) : number {
    let diff_In_Time : number = this.diffInTime(releaseDate);
    let diff_In_Days : number = diff_In_Time / (1000 * 3600 * 24);
    if (diff_In_Time >= 0) {
      return Math.floor(diff_In_Days); // returns the number of full days -- use Math.floor to round "down" for positive results (i.e. 24.5==24 full days)
    } else {
      return Math.ceil(diff_In_Days); // returns the number of full days -- use Math.ceil to round "up" for negative results (i.e. -24.5== -24 full days) : https://www.oreilly.com/library/view/javascript-the-definitive/0596101996/re106.html
    }
  }

   daysInMilisec (releaseDate: string) : number {
    let numOfFullDays : number = this.daysUntilRelease(releaseDate);
    let daysInMiliseconds : number = numOfFullDays * 1000 * 3600 * 24;
    return daysInMiliseconds;
   }

   hoursUntilRelease (releaseDate: string) : number {
    let timeInMiliseconds : number = this.diffInTime(releaseDate);
    let daysInMiliseconds : number = this.daysInMilisec(releaseDate);
    let milesecondsRemaining : number = timeInMiliseconds - daysInMiliseconds
    let diff_In_Hours : number = (milesecondsRemaining/ 1000) / (60*60);
    if (timeInMiliseconds >= 0) {
      return Math.floor(diff_In_Hours);
    } else {
      return Math.ceil(diff_In_Hours);
    }
   }

   hoursInMilisec (releaseDate: string) : number {
    let numOfFullHours : number = this.hoursUntilRelease(releaseDate);
    let hoursInMiliseconds : number = (numOfFullHours * 1000) * (60 * 60);
    return hoursInMiliseconds;
   }

   minsUntilRelease (releaseDate: string) : number {
    let timeInMiliseconds : number = this.diffInTime(releaseDate);
    let daysInMiliseconds : number = this.daysInMilisec(releaseDate);
    let hoursInMiliseconds : number = this.hoursInMilisec(releaseDate);
    let diff_In_Mins : number = (((timeInMiliseconds - daysInMiliseconds) - hoursInMiliseconds)/ 1000) / 60;
    if (timeInMiliseconds >= 0) {
      return Math.floor(diff_In_Mins);
    } else {
      return Math.ceil(diff_In_Mins);
    }
   }

   minsInMilisec (releaseDate: string) : number {
    let numOfFullMins : number = this.minsUntilRelease(releaseDate);
    let minsInMiliseconds: number = ((numOfFullMins * 1000) * 60);
    return minsInMiliseconds;
   }

   secUntilRelease (releaseDate: string) : number {
    let timeInMiliseconds : number = this.diffInTime(releaseDate);
    let daysInMiliseconds : number = this.daysInMilisec(releaseDate);
    let hoursInMiliseconds : number = this.hoursInMilisec(releaseDate);
    let minsInMiliseconds : number = this.minsInMilisec(releaseDate);
    let diff_In_Sec : number = ((timeInMiliseconds - daysInMiliseconds - hoursInMiliseconds - minsInMiliseconds)/ 1000);
    if (timeInMiliseconds >= 0) { // this "if" statement doesn't impact anything, at this point, but am doing this in case we ever want to display miliseconds
      return Math.floor(diff_In_Sec);
    } else {
      return Math.ceil(diff_In_Sec);
    }
   }


}
