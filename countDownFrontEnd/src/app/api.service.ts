import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  public get_movies(){
    return this.httpClient.get('https://api.themoviedb.org/3/movie/upcoming?api_key=192a848438f44d753a42f1fb58899015&language=en-US&page=1');
  }

  public get_books(){

    
    // return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=the&orderBy=newest&maxResults=40&key=AIzaSyBHrS3H6G7LZWddfUHl0rTbVeHR7JCUoD0');
    // return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=intitle:a&orderBy=newest&maxResults=40&key=AIzaSyBHrS3H6G7LZWddfUHl0rTbVeHR7JCUoD0');
    return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=subject:humor&orderBy=newest&maxResults=40&key=AIzaSyBHrS3H6G7LZWddfUHl0rTbVeHR7JCUoD0');
    // return this.httpClient.get('https://www.googleapis.com/books/v1/volumes?q=upcoming+books&orderBy=newest&maxResults=40&key=AIzaSyBHrS3H6G7LZWddfUHl0rTbVeHR7JCUoD0');
  }
}
