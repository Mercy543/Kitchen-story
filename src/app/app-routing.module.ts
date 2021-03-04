import { Component } from "@angular/core"
import {Routes} from "@angular/router"
import { ContactComponent } from "./contact/contact.component"
import { HomeComponent } from "./home/home.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"
import { ProductDetailComponent } from "./product-detail/product-detail.component"
import { ProductComponent } from "./product/product.component"
import { ServiceComponent } from "./service/service.component"

export const applicationRoute: Routes=[
    {path: '', redirectTo:'home' ,pathMatch:'full'},
    {path: 'home', component:HomeComponent},
    {path: 'product', component:ProductComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'product-detail/:id', component:ProductDetailComponent},
    {path: 'service', component:ServiceComponent},
    {path: '**',component:PageNotFoundComponent}
    
]