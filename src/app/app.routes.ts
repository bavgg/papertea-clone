import { Routes } from '@angular/router';

import { HomeComponent } from './presentation/main-components/home/home.component';
import { BeautyComponent } from './presentation/main-components/beauty/beauty.component';

export const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "categories/beauty", component: BeautyComponent}
];
