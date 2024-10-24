import { Routes } from '@angular/router';

import { HomeComponent } from './presentation/main-components/home/home.component';
import { BeautyComponent } from './presentation/main-components/beauty/beauty.component';
import { FashionComponent } from './presentation/main-components/fashion/fashion.component';
import { ElectronicsComponent } from './presentation/main-components/electronics/electronics.component';
import { LivingComponent } from './presentation/main-components/living/living.component';
import { AutomotiveComponent } from './presentation/main-components/automotive/automotive.component';
import { SportsComponent } from './presentation/main-components/sports/sports.component';
import { GroceriesComponent } from './presentation/main-components/groceries/groceries.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories/beauty', component: BeautyComponent },
  { path: 'categories/fashion', component: FashionComponent },
  { path: 'categories/electronics', component: ElectronicsComponent },
  { path: 'categories/home', component: LivingComponent },
  { path: 'categories/automotive', component: AutomotiveComponent },
  { path: 'categories/sports', component: SportsComponent },
  { path: 'categories/groceries', component: GroceriesComponent },
];
