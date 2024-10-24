import { Component } from '@angular/core';
import { StateService } from '../../../services/state.service';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../types/product';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {
  constructor(public stateService: StateService, private productService: ProductService) {}

  ngOnInit() {
    this.productService.getSportProducts().subscribe((data: Product[]) => {
      this.stateService.filteredProducts.set(data);
      this.stateService.products.set(data);
    })
  }
}
