import { Component } from '@angular/core';
import { MainHeaderComponent } from '../../components/main-header/main-header.component';
import { CardComponent } from '../../components/card/card.component';
import { Product } from '../../../types/product';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-beauty',
  standalone: true,
  imports: [MainHeaderComponent, CardComponent],
  templateUrl: './beauty.component.html',
  styleUrl: './beauty.component.css',
})
export class BeautyComponent {
  products!: Product[];

  constructor(private productService: ProductService){}

  ngOnInit() {
    this.productService.getBeautyProducts().subscribe((data: Product[]) => {
      this.products = data;
    })
  }
  

}
