import { Component, Input } from '@angular/core';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  @Input() category!: string;

  constructor(public stateService: StateService) {}

  isClicked = false;

  onClick() {
    console.log('clicked')
    this.stateService.selectedCategory.set(this.category);

    const loweredCaseCategory = this.category.toLowerCase();

    const filteredProducts = this.stateService
      .products()
      .filter((product) => product.category === loweredCaseCategory);
    this.stateService.filteredProducts.set(filteredProducts);
  }
}
