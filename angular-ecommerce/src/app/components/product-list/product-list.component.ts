import { Component, OnInit } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { CommonModule, CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-list-table.component.html',
  //templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  //nomes:string[] = ['Marcos','Paula'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts():void {
    this.productService.getProductList()
    .subscribe(data => this.products = data)
    
  }

}
