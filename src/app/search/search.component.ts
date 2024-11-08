import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TopresaurantsserviceService } from '../topresaurants/topresaurantsservice.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
@Component({
  selector: 'app-search',
  standalone:true,
  imports:[CommonModule,NavbarComponent],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(
    private topRestaurantsService: TopresaurantsserviceService,
    private router: Router
  ) {}

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value;
  }

  onSearch() {
    if (this.searchQuery.trim()) {
      // Call the service to get the search results
      this.searchResults = this.topRestaurantsService.searchItems(this.searchQuery);
      // Navigate to the search result page
      this.router.navigate(['/search'], { queryParams: { query: this.searchQuery } });
    }
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key == "Enter") {
      this.onSearch();
    }
  }
}
