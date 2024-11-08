import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {Router} from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [MatCardModule,CommonModule,NavbarComponent],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.scss'
})
export class OffersComponent {
  constructor(private router: Router) {}
  cards = [
    { id: 'restaurant1', title: 'Pizza Hut', food: 'pizza', city: 'Kurnool', description: '50% OFF UPTO ₹80', image: '../../assets/pizzahut.jpg', image1: '../../assets/start.png', time: '4.1 | 15-20 min' },
    { id: 'restaurant2', title: 'KFC', food: 'Burgers,Fast Food,Rolls& Wraps', city: 'Kurnool', description: 'ITEMS AT ₹179 ', image: 'assets/kfc.jpg',image1: '../../assets/start.png', time: '4.2 | 15-20 min' },
    { id: 'restaurant3', title: "Domino's Pizza", food: 'pizza', city: 'Kurnool', description: '50% OFF UPTO ₹80', image: '../../assets/dominos.jpg', image1: '../../assets/start.png', time: '4.5 | 15-20 min' },
    { id: 'restaurant4', title: 'Ajanta Tiffin and Meals', food: 'Burgers,Fast Food', city: 'Kurnool', description: 'ITEMS AT ₹179 ', image: 'assets/ajanta.jpg',image1: '../../assets/start.png', time: '4.3 | 15-20 min' },
    { id: 'restaurant1', title: 'Pizza Hut', food: 'pizza', city: 'Kurnool', description: '50% OFF UPTO ₹80', image: '../../assets/pizzahut.jpg', image1: '../../assets/start.png', time: '4.1 | 15-20 min' },
    { id: 'restaurant2', title: 'KFC', food: 'Burgers,Fast Food,Rolls& Wraps', city: 'Kurnool', description: 'ITEMS AT ₹179 ', image: 'assets/kfc.jpg',image1: '../../assets/start.png', time: '4.2 | 15-20 min' },
    { id: 'restaurant3', title: "Domino's Pizza", food: 'pizza', city: 'Kurnool', description: '50% OFF UPTO ₹80', image: '../../assets/dominos.jpg', image1: '../../assets/start.png', time: '4.5 | 15-20 min' },
    { id: 'restaurant4', title: 'Ajanta Tiffin and Meals', food: 'Burgers,Fast Food', city: 'Kurnool', description: 'ITEMS AT ₹179 ', image: 'assets/ajanta.jpg',image1: '../../assets/start.png', time: '4.3 | 15-20 min' },
    { id: 'restaurant3', title: "Domino's Pizza", food: 'pizza', city: 'Kurnool', description: '50% OFF UPTO ₹80', image: '../../assets/dominos.jpg', image1: '../../assets/start.png', time: '4.5 | 15-20 min' },
    { id: 'restaurant4', title: 'Ajanta Tiffin and Meals', food: 'Burgers,Fast Food', city: 'Kurnool', description: 'ITEMS AT ₹179 ', image: 'assets/ajanta.jpg',image1: '../../assets/start.png', time: '4.3 | 15-20 min' }
    // Add more restaurant cards as needed
  ];
  onImageClick(restaurantId: string) {
    this.router.navigate(['/menu', restaurantId]);
  }
  selectedRestaurant: any = null; // Variable to hold selected restaurant
  restaurantNotFound: boolean = false; // Variable to check if restaurant is found
  onCardClick(title: string) {
    // Find the restaurant based on title
    const restaurant = this.cards.find(card => card.title === title);
    if (restaurant) {
      this.selectedRestaurant = restaurant; // Set the selected restaurant
      this.restaurantNotFound = false; // Reset not found flag
    } else {
      this.selectedRestaurant = null; // Clear selected restaurant if not found
      this.restaurantNotFound = true; // Set not found flag
    }
  }
}