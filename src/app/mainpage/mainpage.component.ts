import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { MainnavbarComponent } from '../mainnavbar/mainnavbar.component';
import { FormsModule } from '@angular/forms';
import { TopresaurantsserviceService } from '../topresaurants/topresaurantsservice.service';  // Ensure correct service name

@Component({
  selector: 'app-mainpage',
  standalone: true,
  imports: [FooterComponent, CommonModule, MainnavbarComponent, FormsModule,RouterLink],  // Removed RouterLink import
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {
  searchQuery: string = '';
  searchResults: any[] = [];
  deliveryLocation: string = 'Hyderabad';  // Default location

  constructor(
    private topRestaurantsService: TopresaurantsserviceService,  // Ensure correct service name
    private router: Router
  ) {}
  
  // Navigate to breakfast restaurants (Add this method)
  navigateToBreakFastRestaurants() {
    this.router.navigate(['/breakfast']);
  }
  navigateToFastFoodRestaurants() {
    this.router.navigate(['/fastfood']);  // Replace with your actual route
  }
  navigateToRestaurants() {
    this.router.navigate(['/restaurants']);  // Replace '/restaurants' with your desired route
  }
  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
  }

  scrollToLast(item: string) {
    const el = document.getElementById(`${item}-end`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  scrollToFirst(item: string) {
    const el = document.getElementById(`${item}-start`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Method to get current location
  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          this.getAddressFromCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          this.deliveryLocation = 'Kurnool';
        }
      );
    } else {
      console.warn("Geolocation is not supported by this browser.");
      this.deliveryLocation = 'Kurnool';
    }
  }

  // Reverse geocoding to get address from coordinates
  getAddressFromCoordinates(latitude: number, longitude: number) {
    const geocodeAPIUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`;  // Keep your API key secure
    fetch(geocodeAPIUrl)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results[0]) {
          this.deliveryLocation = data.results[0].formatted;
        }
      })
      .catch(error => {
        console.error("Error fetching location data:", error);
        this.deliveryLocation = 'Kurnool';
      });
  }

  // Method for searching items
  onSearch() {
    if (this.searchQuery.trim()) {
      this.searchResults = this.topRestaurantsService.searchItems(this.searchQuery);
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
  }
}