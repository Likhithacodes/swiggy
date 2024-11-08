import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Ensure this is imported

@Component({
  selector: 'app-carousel',
  standalone: true, // This ensures the component is standalone
  imports: [CommonModule], // Import CommonModule for Angular directives
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
  @ViewChild('carousel') carousel!: ElementRef;

  scrollPosition = 0;
  itemWidth = 180 ; 
  visibleItems = 7; 

  ngAfterViewInit() {
    this.adjustItemWidth();
  }

  adjustItemWidth() {
    if (this.carousel) {
      const totalWidth = this.carousel.nativeElement.scrollWidth;
      const totalItems = this.carousel.nativeElement.childElementCount;
      this.itemWidth = totalWidth / totalItems;
    }
  }

  get isAtStart(): boolean {
    return this.scrollPosition <= 0;
  }

  get isAtEnd(): boolean {
    if (this.carousel) {
      const maxScroll = this.carousel.nativeElement.scrollWidth - (this.itemWidth * this.visibleItems);
      return this.scrollPosition >= maxScroll;
    }
    return false;
  }

  moveLeft() {
    if (!this.isAtStart) {
      this.scrollPosition -= this.itemWidth;
      this.updateCarouselTransform();
    }
  }

  moveRight() {
    if (!this.isAtEnd) {
      this.scrollPosition += this.itemWidth;
      this.updateCarouselTransform();
    }
  }

  private updateCarouselTransform() {
    this.carousel.nativeElement.style.transform = `translateX(-${this.scrollPosition}px)`;
  }
}
