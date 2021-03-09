import { Injectable } from '@angular/core';
import { Product } from './product.model';
import{ HttpClient} from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';


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

  readonly rootUrl = "https://localhost:44313/api";
  list : Product [];

  // list: Product[]; //method1 - tried using youtube tutorial for the attempt below: https://www.youtube.com/watch?v=fom80TujpYQ

  //list: any = []; // method2 - used this for the attempt below: https://www.djamware.com/post/5d8d7fc10daa6c77eed3b2f2/angular-8-tutorial-rest-api-and-httpclient-examples

  constructor(private http:HttpClient, private route : ActivatedRoute, 
    private router : Router) { }

  postUserProductDetail(formData: Product) {
    return this.http.post(this.rootUrl + "/products", formData);
  }

  deleteUserProduct(id) {
    return this.http.delete(this.rootUrl + "/products/" + id);
  }

  refreshList(){
    // return this.router.navigateByUrl("/dashboard");
    this.http.get(this.rootUrl + "/products")
    .toPromise()
    .then(res => this.list = res as Product []);
  }

  //method1 - tried using youtube tutorial for the attempt below: https://www.youtube.com/watch?v=fom80TujpYQ

  // refreshList(){
  //   this.http.get(this.rootUrl + "/products")
  //   .toPromise()
  //   .then(res => this.list = res as Product[]);
  // }

  // method2 - used this for the attempt below: https://www.djamware.com/post/5d8d7fc10daa6c77eed3b2f2/angular-8-tutorial-rest-api-and-httpclient-examples

  // refreshList() {
  //   this.http.get(this.rootUrl + "/products")
  //     .subscribe(data => {
  //       for (const d of (data as any)) {
  //         this.list.push({
  //           Id: d.Id,
  //           Title: d.Title,
  //           ReleaseDate: d.ReleaseDate,
  //           ImgLink: d.ImgLink
  //         });
  //       }
  //      return(this.list);
  //     });
  // }

}
