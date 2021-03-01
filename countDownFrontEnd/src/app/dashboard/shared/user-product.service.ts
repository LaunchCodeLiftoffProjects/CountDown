import { Injectable } from '@angular/core';
import { Product } from './product.model';
import{ HttpClient} from "@angular/common/http"


@Injectable({
  providedIn: 'root'
})
export class UserProductService {

  private _formData: Product;
  public get formData(): Product {
    return this._formData;
  }
  public set formData(value: Product) {
    this._formData = value;
  }

  readonly rootUrl = "https://localhost:44345/api";

  constructor(private http:HttpClient) { }

  postUserProductDetail(formData: Product) {
    // return this.http.post(this.rootUrl + "/products", formData)
    return this.http.post(this.rootUrl + "/RegisterProduct", formData)
  }
}
