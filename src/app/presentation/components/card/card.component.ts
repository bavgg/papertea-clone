import { Component, Input, Renderer2 } from '@angular/core';
import { StateService } from '../../../services/state.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input({ required: true }) thumbnail!: string;
  @Input({ required: true }) category!: string;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true }) price!: number;

  constructor(private stateService: StateService, private renderer: Renderer2) {}

  bagClicked() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
    this.stateService.cartOpened.set(true);
  }
}
