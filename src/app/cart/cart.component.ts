import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';
import { Router } from '@angular/router'; // For routing to checkout
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: { item: any, count: number }[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalAmount = this.cartItems.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.count), 0);
  }
  

  incrementItem(index: number): void {
    this.cartItems[index].count += 1;
    this.calculateTotal();
  }

  decrementItem(index: number): void {
    if (this.cartItems[index].count > 1) {
      this.cartItems[index].count -= 1;
      this.calculateTotal();
    } else {
      this.removeItem(index);
    }
  }

  removeItem(index: number): void {
    this.cartItems.splice(index, 1);
    this.calculateTotal();
  }
  cartItemCount: number = 0;
  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalAmount = 0;
  }
  updateCartItemCount() {
    // Fetch cart items from localStorage or service
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartItemCount = cartItems.length;
  }
  checkout(): void {
    // Navigate to checkout page
    alert("confirming checkout..")
    console.log('Navigating to checkout with totalAmount:', this.totalAmount);
this.router.navigate(['/checkout'], { state: { totalAmount: this.totalAmount } });


  }
}
