import { Component } from '@angular/core';

import { TopresaurantsComponent } from '../topresaurants/topresaurants.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent,TopresaurantsComponent,RestaurantsComponent,NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}


