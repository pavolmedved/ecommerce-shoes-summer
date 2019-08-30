import { Component, OnInit } from '@angular/core';

import {FormGroup, FormControl, Validators} from '@angular/forms';
//import for post service
import { HttpService } from '../services/http.service'


import { CategoryService } from '../serices/category.service';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-create-prod',
  templateUrl: './create-prod.component.html',
  styleUrls: ['./create-prod.component.scss']
})
export class CreateProdComponent implements OnInit {

  createForm = new FormGroup({
    name: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    photo: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    qty: new FormControl('',Validators.required),
    color_way: new FormControl('',Validators.required),
    category: new FormControl('', Validators.required)
  })

  categories$
  
  constructor( private httpPost: HttpService, private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories()
   }

  onSubmit(){
    //acept all info from form
    console.log(this.createForm.value)

    this.productService.create(this.createForm.value)

    // // return this.httpPost.postProducts(this.createForm.value).subscribe(response => {
    // //   console.log(response)
    // })
  }


  ngOnInit() {
  }

}
