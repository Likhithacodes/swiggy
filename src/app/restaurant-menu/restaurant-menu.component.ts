import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopresaurantsserviceService } from '../topresaurants/topresaurantsservice.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-restaurant-menu',
  standalone: true,
  imports: [MatCardModule, CommonModule,NavbarComponent
  ],
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {
  allItems: { name: string; description: string; img: string; category: string, price: number }[] = [];
  filteredItems: { name: string; description: string; img: string; category: string, price: number }[] = [];
  restaurantId: string = ''; 
  cartItems: { item: any, count: number }[] = [];
  favorites: { name: string; description: string; img: string; category: string, price: number }[] = [];

  constructor(
    private route: ActivatedRoute,
    private restaurantService: TopresaurantsserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.paramMap.get('id');
    
    if (restaurantId) {
      this.restaurantId = restaurantId; 
      this.allItems = this.restaurantService.getItems(this.restaurantId); 
      this.filteredItems = this.allItems; 
      this.loadCartFromLocalStorage();
      this.loadFavoritesFromLocalStorage();  // Load favorite items from local storage
    }
  }

  loadCartFromLocalStorage(): void {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
      if (this.cartItems.length && this.cartItems[0].item.restaurantId !== this.restaurantId) {
        const userConfirmed = confirm("Your cart contains items from another restaurant. Would you like to reset your cart for adding items from this restaurant?");

        if (userConfirmed) {
          this.clearCart(); 
        }  // Clear if it’s from a different restaurant
      }
    }
  }

  saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  loadFavoritesFromLocalStorage(): void {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  saveFavoritesToLocalStorage(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  // Filter items by category (Veg or Non-Veg)
  filterItems(category: string): void {
    if (category === 'Veg') {
      this.filteredItems = this.allItems.filter(item => item.category === 'Veg');
    } else if (category === 'Non-Veg') {
      this.filteredItems = this.allItems.filter(item => item.category === 'Non-Veg');
    } else {
      this.filteredItems = this.allItems; // Show all items if "All" is selected
    }
  }

  addItemToCart(item: any): void {
    const cartItem = this.cartItems.find(i => i.item.name === item.name);
    if (cartItem) {
      cartItem.count++;
    } else {
      this.cartItems.push({ item, count: 1 });
    }
    this.saveCartToLocalStorage();
  }

  increaseItem(item: any): void {
    const cartItem = this.cartItems.find(i => i.item.name === item.name);
    if (cartItem) cartItem.count++;
  }

  decreaseItem(item: any): void {
    const cartItem = this.cartItems.find(i => i.item.name === item.name);
    if (cartItem) {
      cartItem.count--;
      if (cartItem.count === 0) {
        this.cartItems = this.cartItems.filter(i => i !== cartItem);
      }
    }
    this.saveCartToLocalStorage();
  }

  isInCart(item: any): boolean {
    return this.cartItems.some(i => i.item.name === item.name);
  }

  getItemCount(item: any): number {
    const cartItem = this.cartItems.find(i => i.item.name === item.name);
    return cartItem ? cartItem.count : 0;
  }

  getTotalItems(): number {
    return this.cartItems.reduce((sum, i) => sum + i.count, 0);
  }

  openCart(): void {
    this.router.navigate(['/cart'], { queryParams: { restaurantId: this.restaurantId } });
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCartToLocalStorage();
  }

  // Add item to favorites
  addToFavorites(item: any): void {
    const favoriteItem = this.favorites.find(f => f.name === item.name);
    if (!favoriteItem) {
      this.favorites.push(item);
      this.saveFavoritesToLocalStorage();
    }
  }

  // Remove item from favorites
  removeFromFavorites(item: any): void {
    this.favorites = this.favorites.filter(f => f.name !== item.name);
    this.saveFavoritesToLocalStorage();
  }

  // Check if item is in favorites
  isInFavorites(item: any): boolean {
    return this.favorites.some(f => f.name === item.name);
  }
}
