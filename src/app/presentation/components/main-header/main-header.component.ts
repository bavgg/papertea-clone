import { Component, Input } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [CheckboxComponent],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {
  @Input({required: true}) title!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) categories!: string[];
}
