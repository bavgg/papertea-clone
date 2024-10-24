import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../types/product';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {
  categories = ["laptops", "smartphones", "tablets", "mobile-accessories"];
  title = "Electronics & Gadgets";

  constructor(private productService: ProductService, public stateService: StateService) {}

  ngOnInit() {
    this.productService.getElectronicsGadgetProducts().subscribe((data: Product[]) => {
      this.stateService.products.set(data)
      this.stateService.filteredProducts.set(data)
    })
  }
}
 