import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})



export class ProductDetailComponent implements OnInit {

message: string = "Welcome to The Kitchen";

  productid: any;
  product:Product=new Product();

  constructor(private _route: ActivatedRoute,private _httpClient: HttpClient) { 
    this.productid=this._route.snapshot.params.id;
    console.log(this.productid);
  }

  ngOnInit(): void {
    this._httpClient.get<Product>('http://localhost:3000/products/' + this.productid).subscribe(
      (result) => {
        this.product=result;
      },(error) => {console.log('There are some errors :' + error);
      }
    )
  }

}
