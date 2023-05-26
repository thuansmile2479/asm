import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { IProduct } from 'src/app/interfaces/product'
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private Router: Router
  ){}

  productForm = this.formBuilder.group({
    name: ['', Validators.required],
    price: 0,
    img: ["https://picsum.photos/200/200"]
  })

  onHandleAdd(){
    if(this.productForm.valid){
      const product : IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        img: this.productForm.value.img || "https://picsum.photos/200/200",
      }
      this.productService.addProduct(product).subscribe(data => {
        alert("Add product successfully.")
        this.Router.navigateByUrl('')
      })
    }
    
  }
}
