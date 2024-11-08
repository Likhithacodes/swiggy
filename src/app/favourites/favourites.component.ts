import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-favorites',
  standalone:true,
  imports:[MatCardModule,CommonModule,NavbarComponent],
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favorites: { name: string; description: string; img: string; category: string, price: number }[] = [];

  ngOnInit(): void {
    this.loadFavoritesFromLocalStorage();
  }

  loadFavoritesFromLocalStorage(): void {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  removeFromFavorites(item: any): void {
    this.favorites = this.favorites.filter(f => f.name !== item.name);
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
