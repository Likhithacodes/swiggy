import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from '../restaurants.service';

@Component({
  selector: 'app-restaurants',
  standalone: true,
  imports: [],
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  restaurants: any[] = [];

  constructor(private restaurantsService: RestaurantsService) {}

  ngOnInit(): void {
    this.restaurants = this.restaurantsService.getRestaurants();
  }
}
