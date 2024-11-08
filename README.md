# Swiggy Clone

This is a Swiggy clone project built using **Angular 17** and **Tailwind CSS**. The objective is to replicate the Swiggy homepage UI and provide a similar user experience, including browsing restaurants, cuisines, and managing the cart. The project also features user authentication using MockAPI.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
- [Components](#components)
- [Services](#services)
- [MockAPI Integration](#mockapi-integration)
- [How to Run](#how-to-run)
- [Screenshots](#screenshots)

## Features

1. **Homepage UI**:
   - Replicates the Swiggy homepage with a responsive design using Angular and Tailwind CSS.
   - Displays 10 restaurant cards with clickable links to view detailed menus.
   
2. **Restaurant Menu**:
   - Dynamic display of menu items with images, descriptions, and prices.
   - Filtering options for `Veg` and `Non-Veg` items.

3. **Best Cuisines Near Me**:
   - Displayed in a grid layout using data from `restaurants.service.ts`.
   - Exactly matches the given reference design.

4. **Cart Functionality**:
   - Allows users to add items to the cart with a fixed cart button at the bottom.
   - Cart data is stored in local storage, ensuring persistence across sessions.
   - Hovering over the cart icon displays a small preview of cart items.

5. **User Authentication**:
   - Signup and login forms integrated with MockAPI.
   - After login, the navbar displays the username instead of the login option.
   - User session management using local storage.

6. **Checkout Flow**:
   - Displays cart items with total price calculation.
   - Prompts login if the user is not authenticated before checkout.
   - Stores order details in MockAPI.

## Tech Stack

- **Frontend**: Angular 17, Tailwind CSS
- **Backend**: MockAPI (for authentication and data storage)
- **Storage**: Local Storage (for session and cart management)

## Project Setup

1. **Install Angular CLI** (if not already installed):
   ```bash
   npm install -g @angular/cli
