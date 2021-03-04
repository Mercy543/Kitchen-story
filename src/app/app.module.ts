import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http"
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { applicationRoute } from './app-routing.module';
import { ServiceComponent } from './service/service.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailComponent } from './product-detail/product-detail.component'; 


@NgModule({
  declarations: [
    MainComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    ServiceComponent,
    PageNotFoundComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(applicationRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
