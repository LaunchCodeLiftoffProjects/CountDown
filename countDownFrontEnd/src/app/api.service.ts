import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthResponseData,AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public get_countdown_products(){
    //var userId = this.authService.user.value.id;
    return this.httpClient.get('https://localhost:44313/api/products/');///users/+userId); //tried to bring in local api data this way (on user-product-list.component.html)
  }
  
  public get_movies(){
    return this.httpClient.get('https://api.themoviedb.org/3/movie/upcoming?api_key=192a848438f44d753a42f1fb58899015&language=en-US&page=1');
  }

  public get_movies2(page : number) {

    //iterates through subjects to accumulate more book info
    let arr = ['https://api.themoviedb.org/3/movie/upcoming?api_key=192a848438f44d753a42f1fb58899015&language=en-US&page=', page];
    let getStr = arr.join("");
    return this.httpClient.get(getStr);
  }

  public get_books(){
 
    // return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=upcoming+book&orderBy=newest&maxResults=40&key=AIzaSyBHrS3H6G7LZWddfUHl0rTbVeHR7JCUoD0');
    // return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=intitle:a&orderBy=newest&maxResults=40&key=AIzaSyBHrS3H6G7LZWddfUHl0rTbVeHR7JCUoD0');
    return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=subject:humor&orderBy=newest&maxResults=40&key=AIzaSyBHrS3H6G7LZWddfUHl0rTbVeHR7JCUoD0');
    // return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=upcoming+books&orderBy=newest&maxResults=40&key=AIzaSyBHrS3H6G7LZWddfUHl0rTbVeHR7JCUoD0');
  }

  public get_books2(subj : string) {

    //iterates through subjects to accumulate more book info
    subj = subj.toLowerCase();
    let arr = ['https://www.googleapis.com/books/v1/volumes?q=subject:', subj, '&orderBy=newest&maxResults=20&key=AIzaSyBHrS3H6G7LZWddfUHl0rTbVeHR7JCUoD0'];
    let getStr = arr.join("");
    return this.httpClient.get(getStr);
  }
}
