import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../shared/product.model';
import { UserProductService } from '../../shared/user-product.service';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styles: []
})
export class UserProductComponent implements OnInit {

  constructor(private service:UserProductService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)    
    form.resetForm();
    this.service.formData = {
      Id: 0,
      Title: '',
      ReleaseDate: '',
      ImgLink: '',
    }
    
  }

  onSubmit(form:NgForm) {
    this.service.postUserProductDetail(form.value).subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
  }

}
