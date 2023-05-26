import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { IProduct } from 'src/app/interfaces/product'
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product!: IProduct
  productForm = this.formBuilder.group({
    name: [''],
    price: 0,
    img: ["https://picsum.photos/200/200"]
  })


  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private Router: Router
  ){
    this.route.paramMap.subscribe(param => {
      const id = param.get('id')
      this.productService.getProduct(id as string).subscribe(product => {
        this.product = product,
        this.productForm.patchValue({
          name: product.name,
          price: product.price,
          img: product.img,
        })
      })
    })
  }

  

  onHandleEdit(){
    if(this.productForm.valid){
      const product : IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
        img: this.productForm.value.img || "https://picsum.photos/200/200",
      }
      this.productService.updateProduct(product).subscribe(data => {
        alert("Update product successfully.")
        this.Router.navigateByUrl('')
      })
    }
    
  }
}
