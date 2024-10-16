import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../types/product';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getLimitedProducts(4).subscribe((data: Product[]) => {
      this.products = data;
    })
    
  }
}