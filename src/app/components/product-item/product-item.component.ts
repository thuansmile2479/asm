import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'tr[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
 @Input() product!: IProduct
 @Input() index!: number
 @Output() onRemove: EventEmitter<any> = new EventEmitter()

 removeItem(id: any){
  this.onRemove.emit(id)
 }
}
