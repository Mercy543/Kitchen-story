import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  message: string = "Welcome to The Kitchen";
  
  constructor(private _httpClient: HttpClient) { }

  productList: any;

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/products').subscribe(
      (result) => {this.productList =result; },
      (error) => console.log('There are some errors :'  + error))
      }
    }
  
    



