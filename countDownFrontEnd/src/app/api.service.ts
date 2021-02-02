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
}
