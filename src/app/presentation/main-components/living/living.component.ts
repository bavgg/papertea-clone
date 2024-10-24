import { Component } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { ProductComponent } from '../../components/product/product.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../types/product';

@Component({
  selector: 'app-living',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './living.component.html',
  styleUrl: './living.component.css'
})
export class LivingComponent {

  constructor(public stateService: StateService, private productService: ProductService) {}

  ngOnInit() {
    this.productService.getHomeProducts().subscribe((data: Product[]) => {
      this.stateService.filteredProducts.set(data);
      this.stateService.products.set(data);
    })
  }
}
