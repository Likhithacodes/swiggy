import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
  private restaurantData = [
    { id: 'restaurant1', title: 'Pizza Hut', food: 'pizza', city: 'Hyderabad', description: '50% OFF UPTO ₹80', image: '../../assets/pizzahut.jpg', time: '4.1 | 15-20 min' },
    { id: 'restaurant2', title: 'KFC', food: 'Burgers, Fast Food, Rolls & Wraps', city: 'Hyderabad', description: 'ITEMS AT ₹179', image: 'assets/kfc.jpg', time: '4.2 | 15-20 min' },
    { id: 'restaurant3', title: "Domino's Pizza", food: 'pizza', city: 'Hyderabad', description: '50% OFF UPTO ₹80', image: '../../assets/dominos.jpg', time: '4.5 | 15-20 min' },
    { id: 'restaurant4', title: 'Ajanta Tiffin and Meals', food: 'Burgers, Fast Food, Rolls & Wraps', city: 'Hyderabad', description: 'ITEMS AT ₹179', image: 'assets/ajanta.jpg', time: '4.3 | 15-20 min' }
  ];

  getRestaurants() {
    return this.restaurantData;
  }
}
