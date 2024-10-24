import { Component } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../types/product';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-automotive',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './automotive.component.html',
  styleUrl: './automotive.component.css'
})
export class AutomotiveComponent {
  constructor(public stateService: StateService, private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAutomotiveProducts().subscribe((data: Product[]) => {
      this.stateService.filteredProducts.set(data);
      this.stateService.products.set(data);
    })
  }
}
