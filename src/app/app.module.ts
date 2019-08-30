import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CreateProdComponent } from './create-prod/create-prod.component';
import { ReactiveFormsModule} from '@angular/forms';

// import for firebase libs we will need

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule} from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

const config = {
  apiKey: "AIzaSyDbiC_PO1VyYe3MLVNlANJOzgAnGu4jLbE",
  authDomain: "summer-ecommerce-shoes-f60e5.firebaseapp.com",
  databaseURL: "https://summer-ecommerce-shoes-f60e5.firebaseio.com",
  projectId: "summer-ecommerce-shoes-f60e5",
  storageBucket: "",
  messagingSenderId: "106111803294",
}


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    HomeComponent,
    CreateProdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    MDBBootstrapModule.forRoot(),

       /* .forRoot() tells the root Module to use the attached module
    (in this case MDBootstrapModule) as a root module and only loads this
    when needed (which is called lazy loading) and not before
    */
   ReactiveFormsModule,
   AngularFireModule.initializeApp(config),
   AngularFirestoreModule,
   AngularFireAuthModule,
   AngularFireStorageModule

  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
