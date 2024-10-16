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
  @Input() title!: string;
  @Input() description!: string;
  @Input() filters!: string[];

  // title = "Test";
  // description = "Voluptate aute proident aliqua excepteur.";
  // filters = [ "Category1", "Category2", "Category3 "];
}
