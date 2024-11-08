import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HelpsComponent } from './helps/helps.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { OffersComponent } from './offers/offers.component';
import { MainpageComponent } from './mainpage/mainpage.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent }, // Main page route
  {path:'home',component:HomeComponent },
  {path:'cart',component:CartComponent},
  { path: 'search', component: SearchComponent },
  { path: 'menu/:id', component:RestaurantMenuComponent },
  {path:'logout',component:NavbarComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'help',component:HelpsComponent},
  {path:'favourites',component:FavouritesComponent},
  { path: 'checkout', component: CheckoutComponent },
  {path:'offers',component:OffersComponent}
];
