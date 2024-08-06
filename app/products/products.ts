// type is 0 non Vegan, type 1 is veg
export const products =
    [
        {
          "name": "Paneer Butter Masala",
          "description": "Really good Rajma served with Rice + Salad + Mint chutney + Garlic yogurt. Comfort meal at it's best!",
          "imglink": "/images/paneer_butter_masala.jpg",
          "price": 250,
          "type": 1,
          "category": "desiMeals"
        },
        {
          "name": "Chicken Biryani",
          "description": "Really good Rajma served with Rice + Salad + Mint chutney + Garlic yogurt. Comfort meal at it's best!",
          "imglink": "/images/chicken_biryani.jpg",
          "price": 300,
          "type": 0,
          "category": "desiFoods"
        },
        {
          "name": "Masala Dosa",
          "description": "Really good Rajma served with Rice + Salad + Mint chutney + Garlic yogurt. Comfort meal at it's best!",
          "imglink": "/images/masala_dosa.jpg",
          "price": 100,
          "type": 1,
          "category": "desiFoods"
        },
        {
          "name": "Paneer Butter Masala",
          "description": "Really good Rajma served with Rice + Salad + Mint chutney + Garlic yogurt. Comfort meal at it's best!",
          "imglink": "/images/paneer_butter_masala.jpg",
          "price": 250,
          "type": 1,
          "category": "desiFoods"
        },
        {
          "name": "Chicken Biryani",
          "description": "Really good Rajma served with Rice + Salad + Mint chutney + Garlic yogurt. Comfort meal at it's best!",
          "imglink": "/images/chicken_biryani.jpg",
          "price": 300,
          "type": 0,
          "category": "desiMeals"
        },
        {
          "name": "Masala Dosa",
          "description": "Really good Rajma served with Rice + Salad + Mint chutney + Garlic yogurt. Comfort meal at it's best!",
          "imglink": "/images/masala_dosa.jpg",
          "price": 100,
          "type": 1,
          "category": "desiMeals"
        },
        {
          "name": "Paneer Butter Masala",
          "description": "Really good Rajma served with Rice + Salad + Mint chutney + Garlic yogurt. Comfort meal at it's best!",
          "imglink": "/images/paneer_butter_masala.jpg",
          "price": 250,
          "type": 1,
          "category": "desiProducts"
        },
        {
          "name": "Chicken Biryani",
          "description": "Really good Rajma served with Rice + Salad + Mint chutney + Garlic yogurt. Comfort meal at it's best!",
          "imglink": "/images/chicken_biryani.jpg",
          "price": 300,
          "type": 0,
          "category": "desiProducts"
        },
        {
          "name": "Masala Dosa",
          "description": "Really good Rajma served with Rice + Salad + Mint chutney + Garlic yogurt. Comfort meal at it's best!",
          "imglink": "/images/masala_dosa.jpg",
          "price": 100,
          "type": 1,
          "category": "desiProducts"
        },
      ]

export interface product {
        name: string;
        imglink: string;
        price: number;
        type: number;
        category: string;
        description:string;
    }    