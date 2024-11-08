# Swiggy Clone

This is a Swiggy clone project built using **Angular 17** and **Tailwind CSS**. The objective is to replicate the Swiggy homepage UI and provide a similar user experience, including browsing restaurants, cuisines, and managing the cart and also the favourites section. The project also features user authentication using MockAPI.

## Features

1. **Homepage UI**:
   - Replicates the Swiggy homepage with a responsive design using Angular and Tailwind CSS.
   - Displays 8 restaurant cards with clickable links to view detailed menus.
   on clicking the cards it navigate to the menu page and display all the items present in the restaurant the data is from the `toprestaurantsservice.service.ts`.
   
2. **Restaurant Menu**:
   - Dynamic display of menu items with images, descriptions, and prices.
   - and there is a filtering option for sorting into veg, non-veg categories and all the categories also be displayed.
   -An add to cart and Add to the favourites buttons on clicking them the items are added to the respective components and displayed over there.

3. **topRestaurants**:
   - Displayed in a grid layout using data from `restaurants.service.ts`.
   - Exactly matches the given reference design.

4. **Cart Functionality**:
   - Allows users to add items to the cart and increase or decrease the number of items i.e., quantity of each item present in the cart.
   - Cart data is stored in local storage, ensuring persistence across sessions.
   

5. **User Authentication**:
   - Signup and login forms integrated with MockAPI.
   - After login, the home page will be displayed where the restaurants are displayed.
   - User session management using local storage.

6. **Checkout Flow**:
   - Displays cart items with total price calculation.
   - Prompts login if the user is not authenticated before checkout.
   - Stores order details in MockAPI.

7. **Favourites**:
   - the items added to the favourites are stored in the local storage along with the userid to maintain the track of favourites for each user.
8. **MockApi Link**:
   - `https://mockapi.io/projects/672af277976a834dd024fa89`

## Tech Stack

- **Frontend**: Angular 17, Tailwind CSS
- **Backend**: MockAPI (for authentication and data storage)
- **Storage**: Local Storage (for session and cart management) and mockapi for authentication data management.

## Project Setup

1. **Install Angular CLI** (if not already installed):
   ```bash
   npm install -g @angular/cli
