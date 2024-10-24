import { Component } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../types/product';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-groceries',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './groceries.component.html',
  styleUrl: './groceries.component.css'
})
export class GroceriesComponent {
  constructor(public stateService: StateService, private productService: ProductService) {}

  ngOnInit() {
    this.productService.getHomeProducts().subscribe((data: Product[]) => {
      this.stateService.filteredProducts.set(data);
      this.stateService.products.set(data);
    })
  }
}
