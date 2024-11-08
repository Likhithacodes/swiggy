import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-checkout',
  standalone:true,
  imports:[CommonModule,NavbarComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  address: string = '';  // To hold the delivery address
  totalAmount: number = 0;
  paymentMethod: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Access totalAmount passed in router state
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state?.['totalAmount']) {
      this.totalAmount = navigation.extras.state['totalAmount'];
      console.log('Total amount received in checkout:', this.totalAmount);  // Debug log
    } else {
      alert('Total amount not found. Redirecting to cart...');
      this.router.navigate(['/cart']);  // Redirect back to cart if totalAmount is missing
    }
  }
  

  // Handles the input change for the address
  onAddressChange(event: any): void {
    this.address = event.target.value;
  }

  // Handles the submit address action
  submitAddress(): void {
    if (!this.address) {
      alert("Please enter a delivery address.");
      return;
    }
    alert("Address submitted successfully!");
  }

  // Handles payment method selection
  selectPaymentMethod(method: string): void {
    this.paymentMethod = method;
    alert(`You selected ${method}`);
  }

  // Redirects to payment gateway for checkout
  proceedToPayment(): void {
    if (!this.paymentMethod || !this.address) {
      alert("Please select a payment method and provide a delivery address.");
      return;
    }

    alert(`Redirecting to ${this.paymentMethod} payment gateway...`);
    // Replace with actual redirection or payment logic
    window.location.href = `https://payment-gateway.com/checkout?amount=${this.totalAmount}&method=${this.paymentMethod}`;
  }
}
