import { Component } from '@angular/core';
import { MainHeaderComponent } from '../../components/main-header/main-header.component';
import { CardComponent } from '../../components/card/card.component';
import { Product } from '../../../types/product';
import { ProductService } from '../../../services/product.service';
import { StateService } from '../../../services/state.service';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-beauty',
  standalone: true,
  imports: [MainHeaderComponent, CardComponent, ProductComponent],
  templateUrl: './beauty.component.html',
  styleUrl: './beauty.component.css',
})
export class BeautyComponent {
  categories = ['Beauty', 'Fragrances', 'Skin-care'];
  constructor(
    private productService: ProductService,
    public stateService: StateService
  ) {}

  ngOnInit() {
    this.productService.getBeautyProducts().subscribe((data: Product[]) => {
      this.stateService.filteredProducts.set(data);
      this.stateService.products.set(data);
    });
  }
}
