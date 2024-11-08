import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  isOpen: boolean = false; // Flag to control dropdown visibility
  selectedCity: string = 'others';
  cartItemCount: number = 0;



  
  // Method to change the selected city
  selectCity(city: string) {
    this.selectedCity = city;
    this.isOpen = false; // Close the dropdown when an option is selected
  }

  // Method to toggle the dropdown visibility
  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.updateCartItemCount();
  }
  logout(): void {
    // Confirm logout action with the user
    if (!confirm("Are you sure you want to log out?")) {
      return;  // If the user cancels, don't proceed with logout
    }
  
    localStorage.removeItem('authToken');
    localStorage.removeItem('userId');

    const userId = localStorage.getItem('userId');
    if (userId) {
      localStorage.removeItem(`cart_${userId}`);
    }

    this.router.navigate(['/login']);
  }
  updateCartItemCount() {
    // Fetch cart items from localStorage or service
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartItemCount = cartItems.length;
  }
}
