import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopresaurantsserviceService {
  private items = {
    restaurant1: [
      { name: 'Pizza Margherita', description: 'Classic pizza with tomato sauce and mozzarella.', img: '../../assets/pizza.jpg', category: 'Veg', price: 200 },
      { name: 'Pasta Carbonara', description: 'Creamy pasta with pancetta and Parmesan.', img: '../../assets/pizzahut.jpg', category: 'Non-Veg', price: 250 },
      { name: 'Caesar Salad', description: 'Fresh salad with Caesar dressing and croutons.', img: '../../assets/pakoda.jpg', category: 'Veg', price: 150 },
      { name: 'Garlic Bread', description: 'Crispy bread topped with garlic butter.', img: '../../assets/shawarma.jpg', category: 'Veg', price: 100 },
      { name: 'Lasagna', description: 'Layers of pasta, meat sauce, and cheese.', img: '../../assets/shawarma.jpg', category: 'Non-Veg', price: 300 }
    ],
    restaurant2: [
      { name: 'Sushi Platter', description: 'Assortment of fresh sushi rolls and nigiri.', img: '../../assets/sushi.jpg', category: 'Non-Veg', price: 350 },
      { name: 'Miso Soup', description: 'Traditional Japanese soup with tofu and seaweed.', img: '../../assets/miso_soup.jpg', category: 'Veg', price: 120 },
      { name: 'Tempura', description: 'Crispy fried vegetables and shrimp.', img: '../../assets/tempura.jpg', category: 'Non-Veg', price: 200 },
      { name: 'Tuna Sashimi', description: 'Fresh tuna sliced and served raw.', img: '../../assets/tuna_sashimi.jpg', category: 'Non-Veg', price: 400 },
      { name: 'Edamame', description: 'Steamed young soybeans sprinkled with salt.', img: '../../assets/edamame.jpg', category: 'Veg', price: 90 }
    ],
    restaurant3: [
      { name: 'Pizza palace', description: 'Classic pizza with tomato sauce and mozzarella.', img: '../../assets/pizzahut.jpg', category: 'Veg', price: 200 },
      { name: 'Pasta Carbonara', description: 'Creamy pasta with pancetta and Parmesan.', img: '../../assets/pasta_carbonara.jpg', category: 'Non-Veg', price: 250 },
      { name: 'Bruschetta', description: 'Grilled bread with tomatoes, basil, and olive oil.', img: '../../assets/bruschetta.jpg', category: 'Veg', price: 130 },
      { name: 'Ravioli', description: 'Pasta stuffed with ricotta and spinach.', img: '../../assets/ravioli.jpg', category: 'Veg', price: 220 },
      { name: 'Chicken Parmesan', description: 'Breaded chicken topped with marinara and cheese.', img: '../../assets/chicken_parmesan.jpg', category: 'Non-Veg', price: 280 }
    ],
    restaurant4: [
      { name: 'Sushi Platter', description: 'Assortment of fresh sushi rolls and nigiri.', img: '../../assets/sushi_platter.jpg', category: 'Non-Veg', price: 350 },
      { name: 'Miso Soup', description: 'Traditional Japanese soup with tofu and seaweed.', img: '../../assets/miso_soup.jpg', category: 'Veg', price: 120 },
      { name: 'Gyoza', description: 'Japanese dumplings filled with meat and vegetables.', img: '../../assets/gyoza.jpg', category: 'Non-Veg', price: 180 },
      { name: 'Katsu Curry', description: 'Fried pork cutlet served with Japanese curry.', img: '../../assets/katsu_curry.jpg', category: 'Non-Veg', price: 300 },
      { name: 'Seaweed Salad', description: 'Salad made with seaweed and sesame dressing.', img: '../../assets/seaweed_salad.jpg', category: 'Veg', price: 140 }
    ],
    restaurant5: [
      { name: 'Sushi Platter', description: 'Assortment of fresh sushi rolls and nigiri.', img: '../../assets/sushi_platter.jpg', category: 'Non-Veg', price: 350 },
      { name: 'Miso Soup', description: 'Traditional Japanese soup with tofu and seaweed.', img: '../../assets/miso_soup.jpg', category: 'Veg', price: 120 },
      { name: 'Prawn Tempura', description: 'Lightly battered prawns fried to perfection.', img: '../../assets/prawn_tempura.jpg', category: 'Non-Veg', price: 200 },
      { name: 'Vegetable Roll', description: 'Sushi roll filled with fresh vegetables.', img: '../../assets/veg_roll.jpg', category: 'Veg', price: 150 },
      { name: 'Yakitori', description: 'Grilled chicken skewers with teriyaki sauce.', img: '../../assets/yakitori.jpg', category: 'Non-Veg', price: 220 }
    ],
    restaurant6: [
      { name: 'Pizza zone', description: 'Classic pizza with tomato sauce and mozzarella.', img: '../../assets/pizza.jpg', category: 'Veg', price: 200 },
      { name: 'Pasta Carbonara', description: 'Creamy pasta with pancetta and Parmesan.', img: '../../assets/pasta_carbonara.jpg', category: 'Non-Veg', price: 250 },
      { name: 'Mozzarella Sticks', description: 'Fried mozzarella cheese sticks served with marinara sauce.', img: '../../assets/mozarella_sticks.jpg', category: 'Veg', price: 150 },
      { name: 'Chicken Wings', description: 'Spicy chicken wings with a side of ranch sauce.', img: '../../assets/chicken_wings.jpg', category: 'Non-Veg', price: 180 },
      { name: 'Fettuccine Alfredo', description: 'Creamy fettuccine pasta with Alfredo sauce.', img: '../../assets/fettuccine_alfredo.jpg', category: 'Non-Veg', price: 260 }
    ],
    restaurant7: [
      { name: 'Burger', description: 'Juicy beef patty with cheese, lettuce, and tomato.', img: '../../assets/burger.jpg', category: 'Non-Veg', price: 220 },
      { name: 'French Fries', description: 'Crispy fried potatoes, served with ketchup.', img: '../../assets/fries.jpg', category: 'Veg', price: 80 },
      { name: 'Milkshake', description: 'Creamy milkshake with vanilla ice cream.', img: '../../assets/milkshake.jpg', category: 'Veg', price: 120 },
      { name: 'Chicken Nuggets', description: 'Crispy breaded chicken nuggets with dipping sauce.', img: '../../assets/nuggets.jpg', category: 'Non-Veg', price: 150 },
      { name: 'Onion Rings', description: 'Crispy fried onion rings served with ranch dipping sauce.', img: '../../assets/onionrings.jpg', category: 'Veg', price: 100 }
    ],
    restaurant8: [
      { name: 'Chicken Biryani', description: 'Fragrant rice with chicken, saffron, and spices.', img: '../../assets/biryani.jpg', category: 'Non-Veg', price: 280 },
      { name: 'Paneer Tikka', description: 'Grilled paneer cubes marinated in spices and yogurt.', img: '../../assets/paneer_tikka.jpg', category: 'Veg', price: 180 },
      { name: 'Aloo Paratha', description: 'Flatbread stuffed with spiced mashed potatoes.', img: '../../assets/aloo_paratha.jpg', category: 'Veg', price: 100 },
      { name: 'Butter Chicken', description: 'Tender chicken cooked in a creamy tomato-based gravy.', img: '../../assets/butter_chicken.jpg', category: 'Non-Veg', price: 250 },
      { name: 'Gulab Jamun', description: 'Sweet fried dough balls soaked in sugar syrup.', img: '../../assets/gulab_jamun.jpg', category: 'Veg', price: 80 }
    ]
  };

  getItems(restaurantId: string) {
    return this.items[restaurantId as keyof typeof this.items] || [];
  }

  getVegItems(restaurantId: string) {
    const items = this.getItems(restaurantId);
    return items.filter(item => item.category === 'Veg');
  }

  getNonVegItems(restaurantId: string) {
    const items = this.getItems(restaurantId);
    return items.filter(item => item.category === 'Non-Veg');
  }
  searchItems(query: string) {
    const results: any[] = [];
    for (const restaurantId in this.items) {
      if (this.items.hasOwnProperty(restaurantId)) {
        const restaurantItems = this.items[restaurantId as keyof typeof this.items];
        const matchedItems = restaurantItems.filter(item =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
        );
        results.push(...matchedItems);
      }
    }
    return results;
  }
}
