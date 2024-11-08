import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { TopresaurantsserviceService } from './topresaurantsservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topresaurants',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule
  ],
  templateUrl: './topresaurants.component.html',
  styleUrls: ['./topresaurants.component.scss']
})
export class TopresaurantsComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;

  cards = [
    { id: 'restaurant1', title: 'Pizza Hut', food: 'Pizza', city: 'Hyderabad', description: '50% OFF UPTO ₹80', image: '../../assets/pizzahut.jpg', image1: '../../assets/start.png', time: '4.1 | 15-20 min' },
    { id: 'restaurant2', title: 'KFC', food: 'Burgers, Fast Food, Rolls & Wraps', city: 'Hyderabad', description: 'ITEMS AT ₹179', image: '../../assets/kfc.jpg', image1: '../../assets/start.png', time: '4.2 | 15-20 min' },
    { id: 'restaurant3', title: "Domino's Pizza", food: 'Pizza', city: 'Hyderabad', description: '50% OFF UPTO ₹80', image: '../../assets/pizza.jpg', image1: '../../assets/start.png', time: '4.5 | 15-20 min' },
    { id: 'restaurant4', title: 'Ajanta Tiffin and Meals', food: 'Burgers, Fast Food, Rolls & Wraps', city: 'Hyderabad', description: 'ITEMS AT ₹179', image: '../../assets/shawarma.jpg', image1: '../../assets/start.png', time: '4.3 | 15-20 min' },
    { id: 'restaurant5', title: 'Sushi World', food: 'Sushi, Japanese', city: 'Hyderabad', description: ' 10% 0ff UPTO ₹100', image: '../../assets/voda.jpg', image1: '../../assets/start.png', time: '4.0 | 20-25 min' },
    { id: 'restaurant6', title: 'Sushi Plaza', food: 'Sushi, Japanese', city: 'Hyderabad', description: '35% 0ff UPTO ₹1000', image: '../../assets/noodles.jpg', image1: '../../assets/start.png', time: '4.1 | 20-25 min' },
    { id: 'restaurant7', title: 'Italian Bistro', food: 'Pasta, Pizza', city: 'Hyderabad', description: '40% 0ff UPTO ₹350', image: '../../assets/samosa.jpg', image1: '../../assets/start.png', time: '4.4 | 15-20 min' },
    { id: 'restaurant8', title: 'Chinese Delight', food: 'Chinese, Asian', city: 'Hyderabad', description: '20% 0ff UPTO ₹500', image: '../../assets/momos.jpg', image1: '../../assets/start.png', time: '4.3 | 20-25 min' }
  ];

  scrollPosition = 0;
  itemWidth = 300; // Adjust to the actual width of each card
  maxScrollPosition = 0;

  ngAfterViewInit() {
    if (this.carousel.nativeElement) {
      const carouselWidth = this.carousel.nativeElement.scrollWidth;
      const containerWidth = this.carousel.nativeElement.offsetWidth;
      this.maxScrollPosition = carouselWidth - containerWidth;
    }
  }

  get isAtStart(): boolean {
    return this.scrollPosition <= 0;
  }

  get isAtEnd(): boolean {
    return this.scrollPosition >= this.maxScrollPosition;
  }

  moveLeft() {
    if (!this.isAtStart) {
      this.scrollPosition = Math.max(0, this.scrollPosition - this.itemWidth);
      this.updateCarouselTransform();
    }
  }

  moveRight() {
    if (!this.isAtEnd) {
      this.scrollPosition = Math.min(this.maxScrollPosition, this.scrollPosition + this.itemWidth);
      this.updateCarouselTransform();
    }
  }

  private updateCarouselTransform() {
    if (this.carousel.nativeElement) {
      this.carousel.nativeElement.style.transform = `translateX(-${this.scrollPosition}px)`;
    }
  }

  toggleExpand(card: any) {
    console.log('Toggle expand for:', card);
    
  }

  selectedItems: any[] = [];

  constructor(private router: Router) {}

  onImageClick(restaurantId: string) {
    this.router.navigate(['/menu', restaurantId]);
  }
}
