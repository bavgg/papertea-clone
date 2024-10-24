import { StateService } from './../../../services/state.service';
import { Component, Input } from '@angular/core';
import { Product } from '../../../types/product';
import { CardComponent } from '../card/card.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CardComponent, MainHeaderComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) categories!: string[];
  @Input({ required: true}) title!: string;
  @Input({ required: true}) description!: string;
  @Input({ required: true}) products!: Product[];

  constructor(public stateService: StateService) {}

}
