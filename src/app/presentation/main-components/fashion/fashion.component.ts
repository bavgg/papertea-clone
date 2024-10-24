import { StateService } from './../../../services/state.service';
import { Component, effect } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../types/product';
import { MainHeaderComponent } from '../../components/main-header/main-header.component';
import { CardComponent } from '../../components/card/card.component';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-fashion',
  standalone: true,
  imports: [MainHeaderComponent, CardComponent, ProductComponent],
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
  categories = [
    'Mens-shirts',
    'Mens-shoes',
    'Mens-watches',
    'Sunglasses',
    'Womens-bags',
    'Womens-dresses',
    'Womens-jewellery',
    'Womens-shoes',
    'Womens-watches',
    'Tops'
  ]
  constructor(private productService: ProductService, public stateService: StateService) {  }

  ngOnInit() {
    this.productService.getFashionAccessoryProducts().subscribe((data: Product[]) => {
      this.stateService.products.set(data);
      this.stateService.filteredProducts.set(data);
    })
  }

  
}
