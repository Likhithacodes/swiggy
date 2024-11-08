import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<{ item: any, count: number }[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  private restaurantId: string | null = null;

  constructor() {
    this.loadCartFromLocalStorage();
  }

  loadCartFromLocalStorage(): void {
    const storedCart = localStorage.getItem('cart');
    const storedRestaurantId = localStorage.getItem('restaurantId');
    if (storedCart) {
      this.cartItemsSubject.next(JSON.parse(storedCart));
    }
    if (storedRestaurantId) {
      this.restaurantId = storedRestaurantId;
    }
  }

  saveCartToLocalStorage(): void {
    localStorage.setItem('cart', JSON.stringify(this.cartItemsSubject.getValue()));
    if (this.restaurantId) {
      localStorage.setItem('restaurantId', this.restaurantId);
    }
  }

  addToCart(item: any, restaurantId: string): void {
    if (this.restaurantId && this.restaurantId !== String(restaurantId)) {
      if (confirm("You're adding items from a different restaurant. Clear the cart?")) {
        this.clearCart();
        this.restaurantId = restaurantId;
      } else {
        return;
      }
    } else if (!this.restaurantId) {
      this.restaurantId = restaurantId;
    }

    const currentCartItems = this.cartItemsSubject.getValue();
    const cartItem = currentCartItems.find(i => i.item.name === item.name);
    if (cartItem) {
      cartItem.count++;
    } else {
      currentCartItems.push({ item, count: 1 });
    }
    this.cartItemsSubject.next(currentCartItems);
    this.saveCartToLocalStorage();
  }

  getCartItems(): { item: any, count: number }[] {
    return this.cartItemsSubject.getValue();
  }

  removeFromCart(itemName: string): void {
    let currentCartItems = this.cartItemsSubject.getValue();
    currentCartItems = currentCartItems.filter(i => i.item.name !== itemName);
    if (currentCartItems.length === 0) {
      this.restaurantId = null;
    }
    this.cartItemsSubject.next(currentCartItems);
    this.saveCartToLocalStorage();
  }

  increaseQuantity(itemName: string): void {
    const currentCartItems = this.cartItemsSubject.getValue();
    const cartItem = currentCartItems.find(i => i.item.name === itemName);
    if (cartItem) {
      cartItem.count++;
      this.cartItemsSubject.next(currentCartItems);
      this.saveCartToLocalStorage();
    }
  }

  decreaseQuantity(itemName: string): void {
    const currentCartItems = this.cartItemsSubject.getValue();
    const cartItem = currentCartItems.find(i => i.item.name === itemName);
    if (cartItem) {
      cartItem.count--;
      if (cartItem.count === 0) {
        this.removeFromCart(itemName);
      } else {
        this.cartItemsSubject.next(currentCartItems);
        this.saveCartToLocalStorage();
      }
    }
  }

  clearCart(): void {
    this.cartItemsSubject.next([]);
    this.restaurantId = null;
    localStorage.removeItem('cart');
    localStorage.removeItem('restaurantId');
  }

  getTotalAmount(): number {
    return this.cartItemsSubject.getValue().reduce((total, cartItem) => total + (cartItem.item.price * cartItem.count), 0);
  }
}
