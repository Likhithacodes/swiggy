import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Check if the user has an authentication token stored in localStorage (or use your app's authentication logic)
  const isLoggedIn = localStorage.getItem('authToken') !== null;
  
  if (isLoggedIn) {
    return true;
  } else {
    // If not logged in, redirect to login page
    const router = inject(Router); // Using inject() to access Router
    router.navigate(['/login']);
    return false;
  }
};