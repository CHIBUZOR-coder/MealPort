export const categories = [
  {
    id: 1,
    name: "Burgers",
    image: require("../assets/categories/burgers.jpg"),
  },
  {
    id: 2,
    name: "Pizza",
    image: require("../assets/categories/pizza.jpg"),
  },
  {
    id: 3,
    name: "Cupcake",
    image: require("../assets/categories/cupcake.jpg"),
  },
  {
    id: 4,
    name: "Spag",
    image: require("../assets/categories/spaghetti.jpg"),
  },
  {
    id: 5,
    name: "Fish",
    image: require("../assets/categories/fish.jpg"),
  },
  {
    id: 6,
    name: "Drink",
    image: require("../assets/categories/drinks.jpg"),
  },
  {
    id: 7,
    name: "Desserts",
    image: require("../assets/categories/desserts.jpg"),
  },
];

export const featuredDishes = [
  {
    id: 1,
    description: "Lorem ipsum dolor sit amet consectetur elit.",
    tittle: "Hot and Spicy",
    image: require("../assets/featured/spicy/spicy.jpg"),
    content: [
      {
        id: 1,
        star: "⭐⭐⭐⭐⭐",
        name: "Flame Bites",
        description: "A fiery mix of hot spices",
        image: require("../assets/featured/spicy/spicy.jpg"),
        dishes: [
          {
            id: 1,
            name: "Spicy Chicken Wings",
            price: "8.99",
            description: "Crispy wings tossed in fiery buffalo sauce",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Chili Garlic Noodles",
            price: "9.50",
            description: "Wok-fried noodles with chili oil and garlic",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Spicy Paneer Tikka",
            price: "7.99",
            description: "Grilled paneer cubes marinated in spicy yogurt",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Peri Peri Fries",
            price: "5.50",
            description: "Crispy fries tossed in peri peri seasoning",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Volcano Burger",
            price: "10.25",
            description: "Juicy beef burger with spicy pepper sauce",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Sizzling Szechuan Tofu",
            price: "8.75",
            description: "Tofu stir-fried with spicy Szechuan sauce",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Firecracker Shrimp",
            price: "11.99",
            description: "Shrimp coated in hot chili glaze",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Ghost Pepper Nachos",
            price: "9.00",
            description: "Loaded nachos with ghost pepper cheese sauce",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Spicy Chicken Ramen",
            price: "12.00",
            description: "Ramen with spicy chicken broth and chili oil",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Blazing BBQ Ribs",
            price: "14.99",
            description: "Pork ribs smothered in spicy BBQ sauce",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 2,
        star: "⭐⭐⭐",
        name: "Yoruba Plate",
        description: "Crispy Doro coated in spicy sauce",
        image: require("../assets/featured/spicy/doro_wat.jpg"),
        dishes: [
          {
            id: 1,
            name: "Doro Wat",
            price: "9.99",
            description: "Ethiopian spicy chicken stew with berbere spice",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Egusi Soup",
            price: "8.75",
            description: "Melon seed soup served with fufu",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Spicy Suya Skewers",
            price: "7.50",
            description: "Grilled meat with hot peanut spice rub",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Ofada Rice & Ayamase",
            price: "10.25",
            description: "Local rice with spicy green pepper sauce",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Jollof Rice",
            price: "6.99",
            description: "Classic West African spicy tomato rice",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Spicy Moi Moi",
            price: "4.99",
            description: "Steamed bean pudding with chili pepper",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Pepper Soup",
            price: "8.00",
            description: "Hot and spicy broth with assorted meats",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Fried Plantain with Chili",
            price: "5.25",
            description: "Golden sweet plantains tossed with pepper",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Boli with Groundnut Sauce",
            price: "6.50",
            description: "Roasted plantain served with spicy peanut dip",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Ata Din Din Sauce",
            price: "4.75",
            description: "Slow-cooked spicy tomato and chili sauce",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 3,
        star: "⭐⭐⭐⭐",
        name: "Jerk Chicken",
        description: "Spicy Jerk chicken spicy sauce",
        image: require("../assets/featured/spicy/jerk_chicken.jpg"),
        dishes: [
          {
            id: 1,
            name: "Doro Wat",
            price: "9.99",
            description: "Ethiopian spicy chicken stew with berbere spice",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Egusi Soup",
            price: "8.75",
            description: "Melon seed soup served with fufu",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Spicy Suya Skewers",
            price: "7.50",
            description: "Grilled meat with hot peanut spice rub",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Ofada Rice & Ayamase",
            price: "10.25",
            description: "Local rice with spicy green pepper sauce",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Jollof Rice",
            price: "6.99",
            description: "Classic West African spicy tomato rice",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Spicy Moi Moi",
            price: "4.99",
            description: "Steamed bean pudding with chili pepper",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Pepper Soup",
            price: "8.00",
            description: "Hot and spicy broth with assorted meats",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Fried Plantain with Chili",
            price: "5.25",
            description: "Golden sweet plantains tossed with pepper",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Boli with Groundnut Sauce",
            price: "6.50",
            description: "Roasted plantain served with spicy peanut dip",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Ata Din Din Sauce",
            price: "4.75",
            description: "Slow-cooked spicy tomato and chili sauce",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 4,
        star: "⭐⭐⭐⭐⭐",
        name: "Spice Street",
        description: "Penne Allarrabbiata spicy sauce",
        image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
        dishes: [
          {
            id: 1,
            name: "Classic Penne Arrabbiata",
            price: "10.99",
            description: "Penne pasta in a fiery tomato and garlic chili sauce",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Arrabbiata with Grilled Chicken",
            price: "12.50",
            description: "Spicy Penne pasta topped with tender grilled chicken",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Arrabbiata Alfredo Fusion",
            price: "11.75",
            description: "Creamy Alfredo meets spicy tomato in a penne fusion",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Baked Penne Arrabbiata",
            price: "13.25",
            description: "Spicy penne baked with cheese and herbs",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Vegan Arrabbiata Delight",
            price: "10.50",
            description:
              "Plant-based penne with extra chili, tomatoes, and basil",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Shrimp Arrabbiata",
            price: "14.00",
            description: "Penne tossed with spicy sauce and sautéed shrimp",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Arrabbiata Meatball Pasta",
            price: "13.50",
            description: "Spicy penne served with homemade beef meatballs",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Arrabbiata Primavera",
            price: "11.25",
            description: "Mixed veggies tossed in spicy arrabbiata with penne",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Penne Arrabbiata with Sausage",
            price: "13.00",
            description: "Spicy Italian sausage served with fiery penne sauce",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Truffle Arrabbiata Penne",
            price: "15.75",
            description: "Spicy tomato sauce with a touch of truffle oil",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 5,
        star: "⭐⭐⭐⭐⭐",
        name: "Phaal Curry",
        description: "Phaal Curry with spicy sauce",
        image: require("../assets/featured/spicy/phaal_curry.jpg"),
        dishes: [
          {
            id: 1,
            name: "Classic Phaal Curry",
            price: "13.99",
            description:
              "The original British-Indian ultra-spicy curry with ghost pepper",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Chicken Phaal Inferno",
            price: "14.50",
            description:
              "Fiery chicken curry made with habanero and scotch bonnet chilies",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Lamb Phaal Blaze",
            price: "15.25",
            description:
              "Tender lamb chunks simmered in an intensely spicy curry sauce",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Phaal Paneer Firestorm",
            price: "12.75",
            description:
              "Indian paneer cheese cooked in a lava-hot tomato chili base",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Seafood Phaal Madness",
            price: "16.00",
            description:
              "Shrimp and calamari in a hell-hot Phaal-style curry blend",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Beef Phaal Heatwave",
            price: "15.75",
            description:
              "Chunks of beef in a spicy tomato-based curry with naga chilies",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Vegetable Phaal Burn",
            price: "11.99",
            description:
              "Assorted vegetables simmered in one of the world's spiciest sauces",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Ghost Pepper Phaal Challenge",
            price: "17.99",
            description: "Our hottest dish—only for the bravest spice warriors",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Phaal Curry Rice Bowl",
            price: "13.50",
            description: "Phaal curry served over fragrant basmati rice",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Phaal Roti Wrap",
            price: "12.25",
            description:
              "Spicy curry rolled in warm Indian flatbread for a fiery bite",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
        ],
      },

      {
        id: 6,
        star: "⭐⭐⭐",
        name: "Sichuan Hot Pot",
        description: "Sichuan Hot Pot with spicy sauce",
        image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
        dishes: [
          {
            id: 1,
            name: "Spicy Beef Slices",
            price: "13.50",
            description:
              "Thinly sliced beef soaked in spicy Sichuan chili oil broth",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Mala Tofu Cubes",
            price: "10.99",
            description:
              "Silken tofu cubes marinated in numbing Sichuan peppercorn sauce",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Chongqing Fish Fillets",
            price: "15.75",
            description:
              "Fresh fish fillets steeped in fiery Sichuan hot pot broth",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Lotus Root Discs",
            price: "8.25",
            description:
              "Crisp lotus roots that absorb the rich, spicy flavors of the broth",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Handmade Meatballs",
            price: "12.99",
            description:
              "Juicy pork and beef meatballs simmered in boiling chili soup",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Shrimp Dumplings",
            price: "11.50",
            description:
              "Tender dumplings filled with shrimp, dipped in peppery broth",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Wood Ear Mushrooms",
            price: "9.50",
            description:
              "Black mushrooms soaked in a numbing, spicy Sichuan base",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Quail Eggs Delight",
            price: "10.25",
            description:
              "Boiled quail eggs tossed in a tongue-tingling chili infusion",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Enoki Mushroom Cluster",
            price: "8.99",
            description:
              "Delicate mushrooms perfect for absorbing fiery flavors",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Glass Noodles Soak",
            price: "9.99",
            description: "Slippery noodles drenched in hot Sichuan broth",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 7,
        star: "⭐⭐⭐⭐⭐",
        name: "Spice Lab",
        description: "Somtum with spicy sauce",
        image: require("../assets/featured/spicy/somtum.jpg"),
        dishes: [
          {
            id: 1,
            name: "Spicy Beef Slices",
            price: "13.50",
            description:
              "Thinly sliced beef soaked in spicy Sichuan chili oil broth",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Mala Tofu Cubes",
            price: "10.99",
            description:
              "Silken tofu cubes marinated in numbing Sichuan peppercorn sauce",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Chongqing Fish Fillets",
            price: "15.75",
            description:
              "Fresh fish fillets steeped in fiery Sichuan hot pot broth",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Lotus Root Discs",
            price: "8.25",
            description:
              "Crisp lotus roots that absorb the rich, spicy flavors of the broth",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Handmade Meatballs",
            price: "12.99",
            description:
              "Juicy pork and beef meatballs simmered in boiling chili soup",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Shrimp Dumplings",
            price: "11.50",
            description:
              "Tender dumplings filled with shrimp, dipped in peppery broth",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Wood Ear Mushrooms",
            price: "9.50",
            description:
              "Black mushrooms soaked in a numbing, spicy Sichuan base",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Quail Eggs Delight",
            price: "10.25",
            description:
              "Boiled quail eggs tossed in a tongue-tingling chili infusion",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Enoki Mushroom Cluster",
            price: "8.99",
            description:
              "Delicate mushrooms perfect for absorbing fiery flavors",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Glass Noodles Soak",
            price: "9.99",
            description: "Slippery noodles drenched in hot Sichuan broth",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
        ],
      },

      {
        id: 8,
        star: "⭐⭐⭐⭐⭐",
        name: "Bold & Spicy",
        description: "Spicy Soup with Assorted",
        image: require("../assets/featured/spicy/soup.jpg"),
        dishes: [
          {
            id: 1,
            name: "Tom Yum Goong",
            price: "12.99",
            description:
              "Hot and sour Thai soup with shrimp, lemongrass, and chili paste",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Spicy Miso Ramen",
            price: "13.50",
            description:
              "Rich miso broth with chili oil, noodles, egg, and pork",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Kimchi Jjigae",
            price: "11.75",
            description: "Korean spicy stew with kimchi, tofu, and pork belly",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Sichuan Spicy Beef Soup",
            price: "14.25",
            description:
              "Fiery beef broth with peppercorns, sliced beef, and noodles",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Laksa",
            price: "13.00",
            description:
              "Malaysian coconut curry noodle soup with shrimp and chili oil",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Spicy Chicken Tortilla Soup",
            price: "10.95",
            description:
              "Hearty soup with shredded chicken, jalapeños, and crispy tortillas",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Hot & Sour Soup",
            price: "9.99",
            description:
              "Chinese soup with tofu, mushrooms, vinegar, and a spicy kick",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Spicy Lentil Soup",
            price: "9.50",
            description:
              "Boldly seasoned red lentil soup with cumin and chili flakes",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Fiery Pho",
            price: "12.75",
            description:
              "Vietnamese beef noodle soup with an extra chili oil infusion",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Spicy Tomato Basil Soup",
            price: "8.99",
            description:
              "Creamy tomato soup spiced with red pepper flakes and fresh basil",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 9,
        star: "⭐⭐⭐⭐⭐",
        name: "Tangy Bite",
        description: "Spicy Chicken Soup with sauce",
        image: require("../assets/featured/spicy/spicy.jpg"),
        dishes: [
          {
            id: 1,
            name: "Zesty Chicken Lime Soup",
            price: "11.99",
            description: "Tangy lime chicken broth with jalapeños and cilantro",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Buffalo Chicken Soup",
            price: "12.50",
            description:
              "Creamy soup with shredded chicken and hot buffalo flavor",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Chili Garlic Chicken Soup",
            price: "10.75",
            description:
              "Bold soup with spicy chili garlic paste and tender chicken",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Tangy Tamarind Chicken Broth",
            price: "12.25",
            description: "Tamarind-infused broth with a spicy chicken twist",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Smoky Chipotle Chicken Soup",
            price: "11.49",
            description:
              "Chipotle peppers add smoky heat to shredded chicken soup",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Spicy Thai Chicken Soup",
            price: "13.00",
            description:
              "Coconut milk soup with red curry, lemongrass, and chicken",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Hot Jalapeño Chicken Soup",
            price: "10.99",
            description: "Classic chicken soup with extra jalapeño heat",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Lemon Pepper Chicken Soup",
            price: "9.95",
            description: "Bright lemon and cracked pepper bring tang and spice",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Kashmiri Chicken Yakhni",
            price: "12.75",
            description:
              "Spiced yogurt chicken soup with warming Kashmiri flavors",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Peri-Peri Chicken Soup",
            price: "13.25",
            description:
              "African peri-peri chili adds fire to this chicken delight",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
    ],
  },

  {
    id: 2,
    description: "Lorem ipsum dolor sit amet, adipisicing elit.",
    tittle: "Cheesy Delights",
    image: require("../assets/featured/cheesy/Ajaruli khachapuri.jpg"),
    content: [
      {
        id: 1,
        star: "⭐⭐⭐⭐⭐",
        name: "Cheddar Delight",
        description: "Ajaruli khachapuri cheesy feast",
        image: require("../assets/featured/cheesy/Ajaruli khachapuri.jpg"),
        dishes: [
          {
            id: 1,
            name: "Classic Mac and Cheese",
            price: "9.99",
            description:
              "Creamy cheese sauce over tender macaroni, baked with a crispy topping.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheddar Jalapeño Burger",
            price: "12.50",
            description:
              "Juicy beef patty with melted cheddar and spicy jalapeños on a toasted bun.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese Fondue",
            price: "15.75",
            description:
              "Melted Swiss and cheddar cheese served with bread cubes, vegetables, and fruit.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Cheese Stuffed Mushrooms",
            price: "8.99",
            description:
              "Mushrooms filled with a rich blend of cheeses and baked to perfection.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheddar & Bacon Potato Skins",
            price: "10.25",
            description:
              "Crispy potato skins filled with melted cheddar, crispy bacon, and green onions.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Three-Cheese Pizza",
            price: "14.00",
            description:
              "A blend of mozzarella, cheddar, and parmesan cheeses, topped with a rich tomato sauce.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheddar Broccoli Soup",
            price: "7.99",
            description:
              "A creamy, comforting soup filled with cheddar cheese and tender broccoli.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese-stuffed Chicken Breast",
            price: "18.25",
            description:
              "Chicken breast stuffed with a melty blend of cheddar and mozzarella, served with sides.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Grilled Cheese Sandwich",
            price: "6.50",
            description:
              "Golden, buttery bread with melted cheddar cheese served warm.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheddar Cheese Fries",
            price: "8.99",
            description:
              "Crispy fries smothered in melted cheddar cheese and topped with sour cream.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 2,
        star: "⭐⭐⭐⭐",
        name: "Cheese Feast",
        description: "Banitsa sas sirene cheesy feast",
        image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
        dishes: [
          {
            id: 1,
            name: "Banitsa",
            price: "7.50",
            description:
              "Traditional Bulgarian pastry filled with feta cheese and egg, baked until golden.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese and Spinach Pie",
            price: "9.00",
            description:
              "A flaky pie filled with spinach and a rich blend of cheeses.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Fried Cheese Balls",
            price: "6.50",
            description:
              "Golden, crispy fried cheese balls with a gooey, cheesy center.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Grilled Halloumi",
            price: "10.25",
            description:
              "Grilled Halloumi cheese, served with fresh vegetables and a lemon drizzle.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese-stuffed Pastry",
            price: "8.75",
            description:
              "Flaky pastry filled with rich cheese, baked to a perfect golden crisp.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Cheese and Tomato Tart",
            price: "12.00",
            description:
              "A savory tart with cheese and fresh tomatoes on a crisp pastry base.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheese & Bacon Croissant",
            price: "5.99",
            description:
              "Flaky croissant filled with melted cheese and crispy bacon.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Baked Macaroni with Cheese",
            price: "11.50",
            description:
              "Baked macaroni in a cheesy, creamy sauce, topped with a golden crust.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Cheese and Mushroom Quiche",
            price: "9.99",
            description:
              "A savory quiche filled with a blend of cheese, mushrooms, and herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheddar & Cheese Nachos",
            price: "8.00",
            description:
              "Crispy nachos smothered in melted cheddar cheese, jalapeños, and sour cream.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 3,
        star: "⭐⭐⭐",
        name: "Oak & Ember",
        description: "Burek sa sirom cheesy feast",
        image: require("../assets/featured/cheesy/Burek_sa_sirom.jpg"),
        dishes: [
          {
            id: 1,
            name: "Burek sa Sirom",
            price: "7.00",
            description:
              "A savory pastry filled with creamy cheese, baked to a golden crisp.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese-filled Doughnuts",
            price: "5.99",
            description:
              "Soft, fried doughnuts stuffed with a sweet and savory cheese filling.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese Pizza",
            price: "10.50",
            description:
              "Classic pizza topped with a generous layer of mozzarella and cheddar cheese.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Cheese-Stuffed Zucchini",
            price: "8.25",
            description:
              "Zucchini stuffed with a blend of cheeses, herbs, and spices, baked to perfection.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese and Ham Croissant",
            price: "6.75",
            description:
              "A buttery croissant filled with melted cheese and savory ham.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Spinach and Cheese Stuffed Bread",
            price: "9.50",
            description:
              "Fluffy bread stuffed with spinach and a mix of cheeses, baked to golden perfection.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheese-Stuffed Peppers",
            price: "7.75",
            description:
              "Bell peppers stuffed with a blend of cheeses and herbs, then roasted.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese and Bacon Stuffed Muffins",
            price: "6.25",
            description:
              "Savory muffins packed with crispy bacon and melted cheese.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Four-Cheese Lasagna",
            price: "12.50",
            description:
              "Layers of pasta, rich marinara sauce, and a mix of four delicious cheeses.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese & Herb Focaccia",
            price: "7.00",
            description:
              "Fluffy Italian bread topped with melted cheese and fresh herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 4,
        star: "⭐⭐⭐⭐",
        name: "Velvet Vine",
        description: "Cacio pepe cheesy feast",
        image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),

        dishes: [
          {
            id: 1,
            name: "Cacio e Pepe",
            price: "11.00",
            description:
              "A classic Roman pasta dish made with Pecorino Romano cheese and black pepper.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese-Stuffed Ravioli",
            price: "12.50",
            description:
              "Delicate ravioli stuffed with a rich cheese filling, served with a light butter sauce.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese Fondue",
            price: "15.00",
            description:
              "Melted Gruyère and Emmental cheese served with bread cubes, vegetables, and fruits for dipping.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Mozzarella Sticks",
            price: "8.00",
            description:
              "Golden-fried mozzarella sticks served with marinara sauce for dipping.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese Croquettes",
            price: "7.50",
            description:
              "Crispy, golden croquettes filled with gooey cheese and herbs.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Mac and Cheese",
            price: "9.75",
            description:
              "A creamy, cheesy pasta dish made with elbow macaroni and a blend of cheeses.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheese & Spinach Cannelloni",
            price: "10.50",
            description:
              "Pasta tubes stuffed with a cheese and spinach filling, baked in marinara sauce.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese-Stuffed Chicken Breast",
            price: "14.00",
            description:
              "Chicken breast stuffed with melted cheese and spinach, then roasted.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Grilled Cheese Sandwich",
            price: "6.50",
            description:
              "Toasted sandwich with melted cheddar cheese, served with tomato soup.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese and Herb Flatbread",
            price: "7.00",
            description:
              "A crispy flatbread topped with a blend of cheeses and aromatic herbs.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 5,
        star: "⭐⭐⭐⭐⭐",
        name: "Willow & Pine",
        description: "Indulge in a cheesy feast",
        image: require("../assets/featured/cheesy/cheesy.jpg"),
        dishes: [
          {
            id: 1,
            name: "Four Cheese Pizza",
            price: "14.00",
            description:
              "A delicious pizza topped with mozzarella, cheddar, parmesan, and blue cheese.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheddar Biscuits",
            price: "6.50",
            description:
              "Fluffy, cheesy biscuits served warm with a buttery glaze.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese Quesadillas",
            price: "9.00",
            description:
              "Flour tortillas filled with melted cheese and served with salsa and sour cream.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Cheese Gnocchi",
            price: "12.00",
            description:
              "Soft, pillowy gnocchi served with a rich and creamy cheese sauce.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese and Mushroom Tart",
            price: "11.50",
            description:
              "A savory tart filled with mushrooms and melted cheese in a flaky crust.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Spinach and Cheese Stuffed Bread",
            price: "10.00",
            description:
              "Fresh bread stuffed with spinach and a blend of melted cheese.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Baked Brie with Jam",
            price: "13.00",
            description:
              "Creamy baked Brie topped with sweet fruit jam, served with crackers.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese and Garlic Bread",
            price: "7.00",
            description: "Garlic bread topped with melted mozzarella cheese.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Cheese Ravioli",
            price: "11.50",
            description:
              "Pasta filled with a delicious cheese mixture, served in a rich marinara sauce.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese and Chive Scones",
            price: "8.50",
            description:
              "Fluffy scones with cheese and fresh chives, perfect for a light snack.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 6,
        star: "⭐⭐⭐⭐⭐",
        name: "Sunset Grille",
        description: "Fondue Jurassienne in a cheesy feast",
        image: require("../assets/featured/cheesy/Fondue_jurassienne.jpg"),
        dishes: [
          {
            id: 1,
            name: "Fondue Jurassienne",
            price: "18.00",
            description:
              "A rich, creamy Swiss cheese fondue served with bread and vegetables for dipping.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Grilled Cheese Sandwich",
            price: "7.50",
            description:
              "Golden brown, buttery bread stuffed with melted cheddar and mozzarella cheese.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese Croquettes",
            price: "8.00",
            description:
              "Golden fried croquettes filled with a delicious blend of cheeses and herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Cheese Stuffed Mushrooms",
            price: "9.50",
            description:
              "Mushrooms stuffed with a creamy mixture of cheese and spices, baked to perfection.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese Soufflé",
            price: "12.00",
            description:
              "Light and fluffy soufflé made with a blend of melted cheeses.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Mac and Cheese",
            price: "10.50",
            description:
              "Classic mac and cheese with a rich, cheesy sauce and crispy topping.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheese-Stuffed Chicken Breast",
            price: "14.00",
            description:
              "Chicken breast stuffed with melted mozzarella and parmesan cheese, baked to golden perfection.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese Fondue Pot",
            price: "22.00",
            description:
              "Melted cheese served in a fondue pot with an assortment of dippables like bread, fruits, and meats.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Cheese and Potato Gratin",
            price: "11.00",
            description:
              "Layers of creamy mashed potatoes and cheese, baked to a golden brown.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese and Herb Pizza",
            price: "13.50",
            description:
              "A pizza topped with a mixture of cheeses and fresh herbs, baked to perfection.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 7,
        star: "⭐⭐⭐⭐⭐",
        name: "Guruli Khachapuri",
        description: "Guruli khachapuri feast",
        image: require("../assets/featured/cheesy/Guruli_khachapuri.jpg"),
        dishes: [
          {
            id: 1,
            name: "Guruli Khachapuri",
            price: "15.00",
            description:
              "A traditional Georgian cheesy bread filled with a blend of cheeses, eggs, and butter.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Khachapuri Adjaruli",
            price: "13.50",
            description:
              "Boat-shaped bread filled with cheese, topped with a raw egg and butter.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese-filled Buns",
            price: "6.50",
            description:
              "Soft buns filled with a delicious blend of Georgian cheese.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Spinach and Cheese Pie",
            price: "9.00",
            description:
              "Flaky pastry filled with spinach and a mixture of Georgian cheeses.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese-filled Phyllo Pastry",
            price: "8.00",
            description:
              "Crispy phyllo dough wrapped around melted cheese and herbs.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Satsivi with Cheese",
            price: "14.00",
            description:
              "A rich, spiced chicken dish with cheese and walnut sauce.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Kachapuri with Mushrooms",
            price: "12.00",
            description:
              "A cheesy khachapuri filled with sautéed mushrooms and herbs.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese Platter",
            price: "18.00",
            description:
              "An assortment of Georgian cheeses served with bread and fresh fruits.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Cheese-stuffed Pide",
            price: "10.50",
            description:
              "Turkish-style boat-shaped bread filled with melted cheese and a variety of spices.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese and Herb Fritters",
            price: "7.00",
            description:
              "Crispy fritters filled with a blend of cheeses and fresh herbs.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 8,
        star: "⭐⭐⭐⭐⭐",
        name: "Kasspatzln",
        description: "Cheesy Kasspatzln feast",
        image: require("../assets/featured/cheesy/Kasspatzln.jpg"),
        dishes: [
          {
            id: 1,
            name: "Kasspatzln",
            price: "16.00",
            description:
              "A traditional Austrian dish of egg noodles, melted cheese, and crispy onions.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese Spaetzle",
            price: "14.50",
            description:
              "Soft egg noodles mixed with rich melted cheese and sautéed onions.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Truffle Cheese Spaetzle",
            price: "18.00",
            description:
              "A luxurious version of the classic dish with truffle oil and truffle cheese.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Gnocchi with Cheese",
            price: "15.00",
            description:
              "Soft gnocchi tossed in a creamy cheese sauce and topped with fresh herbs.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Swiss Fondue",
            price: "20.00",
            description:
              "Melted Swiss cheese served with bread cubes, vegetables, and potatoes for dipping.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Cheese Rösti",
            price: "13.00",
            description:
              "Crispy Swiss-style potato pancakes topped with melted cheese.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheese-stuffed Schnitzel",
            price: "17.50",
            description:
              "A breaded schnitzel filled with melted cheese, served with a creamy sauce.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese and Herb Strudel",
            price: "12.50",
            description:
              "Flaky pastry filled with a blend of cheeses and fresh herbs.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Cheese and Potato Gratin",
            price: "14.00",
            description:
              "Sliced potatoes baked in a creamy cheese sauce, with a crispy top.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese Croquettes",
            price: "8.50",
            description: "Golden, crispy croquettes filled with creamy cheese.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 9,
        star: "⭐⭐⭐⭐⭐",
        name: "Sabroso Spice",
        description: "Provoleta Kasspatzln feast",
        image: require("../assets/featured/cheesy/Provoleta.jpg"),
        dishes: [
          {
            id: 1,
            name: "Provoleta",
            price: "12.00",
            description:
              "A deliciously melted provolone cheese, grilled to perfection and served with fresh herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese Empanadas",
            price: "10.00",
            description:
              "Crispy, golden empanadas stuffed with a mix of cheese and spices.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Spicy Cheese Quesadillas",
            price: "11.50",
            description:
              "Flour tortillas filled with melted cheese and a spicy jalapeño kick.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Grilled Cheese Sandwich",
            price: "9.00",
            description:
              "Classic comfort food, grilled to perfection with gooey melted cheese inside.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese Nachos",
            price: "8.50",
            description:
              "Crispy tortilla chips smothered in spicy cheese sauce, perfect for sharing.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Chili Cheese Fries",
            price: "7.00",
            description:
              "Crispy fries topped with a hearty chili and melted cheese.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Mac and Cheese",
            price: "13.00",
            description:
              "Creamy pasta in a rich cheese sauce, baked to golden perfection.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese-stuffed Peppers",
            price: "14.50",
            description:
              "Bell peppers stuffed with a blend of cheeses and spices, then baked.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Spicy Cheese Fondue",
            price: "18.00",
            description:
              "A spicy, melted cheese fondue served with bread and vegetables for dipping.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese and Chorizo Paella",
            price: "16.00",
            description:
              "A rich paella dish with melted cheese and spicy chorizo sausage.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 10,
        star: "⭐⭐⭐⭐",
        name: "Quesadilla",
        description: "Quesadilla cheesy feast",
        image: require("../assets/featured/cheesy/Quesadilla.jpg"),
        dishes: [
          {
            name: "Chicken Quesadilla",
            price: "12.00",
            description:
              "Grilled chicken and melted cheese inside a crispy tortilla, served with salsa.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            name: "Beef Quesadilla",
            price: "13.00",
            description:
              "Seasoned ground beef with cheese wrapped in a tortilla and grilled to perfection.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            name: "Veggie Quesadilla",
            price: "11.50",
            description:
              "A delicious blend of sautéed vegetables and cheese wrapped in a grilled tortilla.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            name: "Cheese Quesadilla",
            price: "9.00",
            description:
              "Melted cheese folded in a soft tortilla, grilled until crispy and golden.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            name: "Spicy Quesadilla",
            price: "11.00",
            description:
              "A cheesy quesadilla with spicy jalapeños and fresh salsa.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            name: "Steak Quesadilla",
            price: "14.00",
            description:
              "Juicy steak with melted cheese wrapped in a tortilla, grilled to crispy perfection.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            name: "Shrimp Quesadilla",
            price: "15.00",
            description:
              "Grilled shrimp with a blend of cheese, wrapped in a tortilla and grilled until crispy.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            name: "BBQ Chicken Quesadilla",
            price: "13.50",
            description:
              "Shredded BBQ chicken with melted cheese inside a grilled tortilla.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            name: "Mushroom Quesadilla",
            price: "10.50",
            description:
              "Sautéed mushrooms with a creamy cheese filling, wrapped in a grilled tortilla.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            name: "Bacon Quesadilla",
            price: "12.50",
            description:
              "Crispy bacon and melted cheese wrapped in a tortilla and grilled to perfection.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 11,
        star: "⭐⭐⭐",
        name: "Yoruba Plate",
        description: "Saganaki cheesy feast",
        image: require("../assets/featured/cheesy/Saganaki.jpg"),
        dishes: [
          {
            id: 1,
            name: "Grilled Saganaki",
            price: "14.00",
            description: "Flaming Greek cheese served with warm pita bread.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese Souvlaki",
            price: "15.50",
            description:
              "Grilled skewers of cheese and vegetables, served with a side of tzatziki sauce.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Spinach & Feta Saganaki",
            price: "16.00",
            description:
              "Melted cheese with spinach and feta, grilled to perfection and served with pita.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Cheese and Mushroom Saganaki",
            price: "17.00",
            description:
              "A blend of cheese and mushrooms, grilled to create a gooey and savory delight.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Saganaki Platter",
            price: "20.00",
            description:
              "A platter of grilled Saganaki cheese served with olives, pita, and roasted vegetables.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Cheese Baklava",
            price: "8.50",
            description:
              "A sweet and savory dessert with layers of phyllo dough and cheese filling.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Saganaki with Honey",
            price: "18.00",
            description:
              "Flaming cheese served with a drizzle of honey, creating a sweet-salty combination.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Kasseri Saganaki",
            price: "16.50",
            description:
              "Grilled Kasseri cheese, perfectly melted and served with warm pita.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Lamb & Cheese Saganaki",
            price: "19.00",
            description:
              "A unique twist on the traditional Saganaki, featuring tender lamb and melted cheese.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Herbed Cheese Saganaki",
            price: "15.00",
            description:
              "Grilled cheese infused with herbs like oregano, rosemary, and thyme.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 12,
        star: "⭐⭐⭐⭐",
        name: "Sirnica",
        description: "Sirnica cheesy feast",
        image: require("../assets/featured/cheesy/Sirnica.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 13,
        star: "⭐⭐⭐⭐⭐",
        name: "Casa de Efo",
        description: "Smažený Sýr cheesy feast",
        image: require("../assets/featured/cheesy/Smažený_sýr.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 14,
        star: "⭐⭐⭐⭐⭐",
        name: "Svrljiški Belmuž",
        description: "Svrljiški Belmuž cheesy feast",
        image: require("../assets/featured/cheesy/Svrljiški_belmuž.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0,
          },
        ],
      },
      {
        id: 15,
        star: "⭐⭐⭐⭐⭐",
        name: "Tartiflette",
        description: "Tartiflette lorem cheesy feast",
        image: require("../assets/featured/cheesy/Svrljiški_belmuž.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0,
          },
        ],
      },
      {
        id: 16,
        star: "⭐⭐⭐⭐⭐",
        name: "Tequeños",
        description: "Tequeños lorem cheesy feast",
        image: require("../assets/featured/cheesy/Svrljiški_belmuž.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 17,
        star: "⭐⭐⭐⭐⭐",
        name: "Tiropita",
        description: "Tiropita lorem cheesy feast",
        image: require("../assets/featured/cheesy/Tiropita.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
    ],
  },
  {
    id: 3,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    image: require("../assets/featured/sweets/sweats.jpg"),
    tittle: "Sweet Treats",
    content: [
      {
        id: 1,
        star: "⭐⭐⭐⭐⭐",
        name: "Sweets",
        description: "Delicious sweets and desserts.",
        image: require("../assets/featured/sweets/sweats.jpg"),
        dishes: [
          {
            id: 1,
            name: "Chocolate Lava Cake",
            price: "5.99",
            description: "Warm, gooey chocolate cake with molten center.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Strawberry Cheesecake",
            price: "6.49",
            description: "Creamy cheesecake topped with fresh strawberries.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Lemon Meringue Pie",
            price: "4.99",
            description: "Tart lemon filling with a fluffy meringue topping.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Tiramisu",
            price: "5.49",
            description:
              "Classic Italian dessert with layers of coffee-soaked ladyfingers.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Vanilla Cupcakes",
            price: "2.99",
            description: "Fluffy vanilla cupcakes with creamy frosting.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Carrot Cake",
            price: "4.99",
            description: "Spiced cake with cream cheese frosting and walnuts.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Apple Pie",
            price: "3.99",
            description: "Classic apple pie with a buttery crust.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Creme Brûlée",
            price: "7.49",
            description: "Rich custard topped with caramelized sugar.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Macarons",
            price: "2.49",
            description: "Colorful French meringue cookies with filling.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Banoffee Pie",
            price: "5.99",
            description: "Banana and toffee pie with a biscuit base.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 2,
        star: "⭐⭐⭐⭐⭐",
        name: "La Lagos Cocina",
        description: "Almond Bread Delicious desserts.",
        image: require("../assets/featured/sweets/Almond_Bread.jpg"),
        dishes: [
          {
            id: 1,
            name: "Almond Bread",
            price: "4.99",
            description: "Freshly baked almond bread with a soft, sweet crumb.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cinnamon Rolls",
            price: "3.49",
            description: "Warm cinnamon rolls with a drizzle of icing.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Chocolate Chip Cookies",
            price: "2.99",
            description:
              "Chewy chocolate chip cookies with a perfect balance of sweetness.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Peach Cobbler",
            price: "5.49",
            description: "Juicy peaches topped with a buttery, golden crumble.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Pumpkin Pie",
            price: "4.49",
            description: "Spiced pumpkin filling in a flaky pie crust.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Raspberry Sorbet",
            price: "3.99",
            description:
              "Sweet and tangy raspberry sorbet, a refreshing treat.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Berry Tart",
            price: "5.99",
            description:
              "Buttery tart crust filled with fresh berries and cream.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Chocolate Eclairs",
            price: "2.49",
            description:
              "Delicious puff pastry filled with creamy chocolate filling.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Apple Crumble",
            price: "4.99",
            description:
              "Baked apples topped with a cinnamon crumble, served with vanilla ice cream.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Strawberry Shortcake",
            price: "6.49",
            description:
              "Light sponge cake with fresh strawberries and whipped cream.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 3,
        star: "⭐⭐⭐⭐⭐",
        name: "Dreamy Delights",
        description: "Australian Sausage Delicious desserts.",
        image: require("../assets/featured/sweets/Australian_Sausage_Rolls.jpg"),
        dishes: [
          {
            id: 1,
            name: "Australian Sausage Rolls",
            price: "4.99",
            description:
              "Flaky pastry wrapped around a savory sausage filling.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Lamingtons",
            price: "3.99",
            description:
              "A traditional Australian dessert, sponge cake dipped in chocolate and rolled in coconut.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Pavlova",
            price: "5.49",
            description:
              "A light meringue base topped with fresh fruit and whipped cream.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Fairy Bread",
            price: "2.49",
            description:
              "Sliced white bread spread with butter and topped with hundreds and thousands.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Anzac Biscuits",
            price: "3.29",
            description:
              "Crunchy, golden oat biscuits made in honor of the ANZACs.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Cherry Ripe Slice",
            price: "4.29",
            description:
              "A rich chocolate and cherry dessert with a crunchy biscuit base.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Wattleseed Cake",
            price: "5.99",
            description:
              "A moist cake flavored with native Australian wattle seeds.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Golden Syrup Dumplings",
            price: "4.49",
            description:
              "Soft, fluffy dumplings served with a sweet golden syrup sauce.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Vegemite Chocolate Spread",
            price: "2.99",
            description:
              "A unique spread combining the iconic Vegemite and chocolate flavor.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Balfours Frog Cakes",
            price: "3.49",
            description:
              "A famous South Australian dessert, a soft sponge cake in the shape of a frog with a sweet fondant coating.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 4,
        star: "⭐⭐⭐⭐⭐",
        name: "The Sweet Spot",
        description: "Delicious desserts.",
        image: require("../assets/featured/sweets/Australian_Sausage_Rolls.jpg"),
        dishes: [
          {
            id: 1,
            name: "Australian Sausage Rolls",
            price: "4.99",
            description:
              "Flaky pastry wrapped around a savory sausage filling.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Chocolate Mud Cake",
            price: "5.99",
            description:
              "Rich and dense chocolate cake topped with a smooth chocolate ganache.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Sticky Date Pudding",
            price: "4.79",
            description:
              "Warm, moist sponge cake made with dates and served with butterscotch sauce.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Passionfruit Tart",
            price: "3.99",
            description:
              "Crispy tart shell filled with tangy passionfruit custard.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Baked Apple Crumble",
            price: "5.49",
            description:
              "Soft, baked apples topped with a buttery, crumbly topping and served with vanilla ice cream.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Churros",
            price: "3.49",
            description:
              "Deep-fried dough sticks coated in cinnamon sugar and served with chocolate sauce.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Macadamia Nut Cookies",
            price: "2.99",
            description:
              "Chewy cookies packed with macadamia nuts and white chocolate.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Vanilla Slice",
            price: "4.29",
            description:
              "A creamy custard slice with a crisp pastry base, topped with icing sugar.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Pavlova",
            price: "5.49",
            description:
              "A light meringue base topped with fresh fruit and whipped cream.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Coconut Slice",
            price: "3.79",
            description:
              "A soft coconut bar with a buttery base and a sweet coconut topping.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 5,
        star: "⭐⭐⭐⭐⭐",
        name: "Cupcake Corner",
        description: "Cheeseburger Dip desserts.",
        image: require("../assets/featured/sweets/Cheeseburger_Dip.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheeseburger Dip",
            price: "6.99",
            description:
              "A savory, cheesy dip with all the flavors of a cheeseburger.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Vanilla Cupcakes",
            price: "3.49",
            description:
              "Soft vanilla cupcakes topped with creamy buttercream frosting.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Red Velvet Cupcakes",
            price: "3.99",
            description:
              "Moist red velvet cupcakes with a velvety cream cheese frosting.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Chocolate Fudge Brownies",
            price: "4.49",
            description:
              "Decadent, gooey chocolate brownies loaded with rich fudge flavor.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Lemon Meringue Pie",
            price: "4.99",
            description:
              "Tangy lemon filling topped with fluffy meringue, baked to perfection.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Carrot Cake",
            price: "5.29",
            description:
              "Spiced carrot cake with walnuts, topped with a rich cream cheese frosting.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Peanut Butter Cupcakes",
            price: "3.79",
            description:
              "Cupcakes infused with peanut butter, topped with creamy frosting and a peanut butter cup.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Chocolate Eclairs",
            price: "4.79",
            description:
              "Delicate pastry filled with cream and covered in rich chocolate glaze.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Apple Crumble Pie",
            price: "5.49",
            description:
              "A warm, spiced apple filling with a buttery, crumbly topping.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Cinnamon Rolls",
            price: "3.99",
            description: "Soft, fluffy cinnamon rolls topped with sweet glaze.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 6,
        star: "⭐⭐",
        name: "Chocolate Bacon",
        description: "Chocolate Bacon desserts.",
        image: require("../assets/featured/sweets/Chocolate_Bacon.jpg"),
        dishes: [
          {
            id: 1,
            name: "Chocolate Bacon",
            price: "4.99",
            description:
              "Crispy bacon coated in rich, smooth chocolate for a sweet and savory combination.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Maple Bacon Cupcakes",
            price: "3.99",
            description:
              "Delicious cupcakes topped with maple frosting and crispy bacon bits.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Bacon Chocolate Chip Cookies",
            price: "5.49",
            description:
              "A twist on classic cookies with bits of crispy bacon and melty chocolate chips.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Bacon Donuts",
            price: "3.79",
            description:
              "Fluffy donuts with a drizzle of chocolate glaze and sprinkled with crispy bacon.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Bacon Chocolate Truffles",
            price: "6.29",
            description:
              "Decadent chocolate truffles with a hint of crispy bacon inside.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Bacon Brownies",
            price: "5.99",
            description: "Rich and fudgy brownies with a smoky bacon flavor.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Bacon Caramel Bars",
            price: "4.49",
            description:
              "Sweet caramel bars with a touch of salty bacon, creating a perfect flavor balance.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Chocolate Bacon Popcorn",
            price: "3.49",
            description:
              "Popcorn drizzled with smooth chocolate and sprinkled with crispy bacon bits.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Bacon Cheesecake",
            price: "6.99",
            description:
              "A creamy cheesecake topped with caramelized bacon and chocolate sauce.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Bacon Dipped Pretzels",
            price: "2.99",
            description:
              "Salty pretzels dipped in rich chocolate and sprinkled with crispy bacon.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 7,
        star: "⭐⭐⭐⭐",
        name: "Candyland Café",
        description: "Chocolate Pecan desserts.",
        image: require("../assets/featured/sweets/Chocolate_Pecan.jpg"),
        dishes: [
          {
            id: 1,
            name: "Chocolate Pecan Pie",
            price: "6.49",
            description:
              "A rich, gooey pecan pie with layers of smooth chocolate and crunchy pecans.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Chocolate Pecan Fudge",
            price: "4.99",
            description:
              "Decadent fudge made with chocolate and toasted pecans for the perfect bite.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Pecan Brownies",
            price: "5.49",
            description:
              "Fudgy brownies with toasted pecans and swirls of rich chocolate.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Pecan Truffles",
            price: "5.99",
            description:
              "Silky chocolate truffles with crunchy pecans and a creamy center.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Chocolate Pecan Bark",
            price: "3.79",
            description:
              "Sweet and salty chocolate bark with toasted pecans and a touch of sea salt.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Chocolate Pecan Cupcakes",
            price: "3.99",
            description:
              "Light and fluffy cupcakes with a chocolate pecan frosting.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Chocolate Pecan Tarts",
            price: "4.29",
            description:
              "Buttery tarts filled with a rich chocolate ganache and topped with pecans.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Chocolate Pecan Macaroons",
            price: "3.69",
            description:
              "Coconut macaroons dipped in chocolate and sprinkled with crunchy pecans.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Pecan Caramel Bars",
            price: "4.49",
            description:
              "Sweet caramel bars topped with chocolate and toasted pecans.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Chocolate Pecan Donuts",
            price: "2.99",
            description:
              "Fluffy donuts filled with chocolate and topped with a pecan glaze.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 8,
        star: "⭐⭐⭐⭐⭐",
        name: "Sweet Whispers",
        description: "Chunky Blue Cheese desserts.",
        image: require("../assets/featured/sweets/Chunky_Blue_Cheese.jpg"),
        dishes: [
          {
            id: 1,
            name: "Chocolate Pecan Pie",
            price: "6.49",
            description:
              "A rich, gooey pecan pie with layers of smooth chocolate and crunchy pecans.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Chocolate Pecan Fudge",
            price: "4.99",
            description:
              "Decadent fudge made with chocolate and toasted pecans for the perfect bite.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Pecan Brownies",
            price: "5.49",
            description:
              "Fudgy brownies with toasted pecans and swirls of rich chocolate.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Pecan Truffles",
            price: "5.99",
            description:
              "Silky chocolate truffles with crunchy pecans and a creamy center.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Chocolate Pecan Bark",
            price: "3.79",
            description:
              "Sweet and salty chocolate bark with toasted pecans and a touch of sea salt.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Chocolate Pecan Cupcakes",
            price: "3.99",
            description:
              "Light and fluffy cupcakes with a chocolate pecan frosting.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Chocolate Pecan Tarts",
            price: "4.29",
            description:
              "Buttery tarts filled with a rich chocolate ganache and topped with pecans.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Chocolate Pecan Macaroons",
            price: "3.69",
            description:
              "Coconut macaroons dipped in chocolate and sprinkled with crunchy pecans.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Pecan Caramel Bars",
            price: "4.49",
            description:
              "Sweet caramel bars topped with chocolate and toasted pecans.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Chocolate Pecan Donuts",
            price: "2.99",
            description:
              "Fluffy donuts filled with chocolate and topped with a pecan glaze.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 9,
        star: "⭐⭐⭐⭐",
        name: "Cookie Bars",
        description: "Cookie Bars Cheese desserts.",
        image: require("../assets/featured/sweets/Cookie_Bars.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheese Cookie Bars",
            price: "5.99",
            description:
              "Chewy cookie bars with a creamy cheese filling for a delightful balance of sweet and savory.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese and Chocolate Chip Cookie Bars",
            price: "6.29",
            description:
              "Classic chocolate chip cookie bars with a smooth layer of melted cheese for a unique twist.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Cheese Brownie Cookie Bars",
            price: "6.49",
            description:
              "Fudgy brownies topped with cookie dough and a creamy cheese center.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Lemon Cheese Cookie Bars",
            price: "5.79",
            description:
              "Zesty lemon-flavored cookie bars with a layer of rich cream cheese filling.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Raspberry Cheese Cookie Bars",
            price: "5.99",
            description:
              "Delicious cookie bars with a tangy cream cheese layer and fresh raspberry topping.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Caramel Cheesecake Cookie Bars",
            price: "6.19",
            description:
              "Cookie bars with a decadent caramel cheesecake filling for a rich, sweet dessert.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Peanut Butter Cheese Cookie Bars",
            price: "6.09",
            description:
              "A fusion of peanut butter and creamy cheese in a chewy cookie bar.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Apple Cinnamon Cheese Cookie Bars",
            price: "5.89",
            description:
              "Warm cookie bars with spiced apple and a velvety cheese filling.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Oreo Cheese Cookie Bars",
            price: "6.39",
            description:
              "Cookie bars filled with crushed Oreos and creamy cheese for a dreamy, indulgent dessert.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Coconut Cheese Cookie Bars",
            price: "5.79",
            description:
              "Chewy coconut cookie bars with a creamy cheese filling for a tropical treat.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 10,
        star: "⭐⭐⭐",
        name: "Bella Tavola",
        description: "Crunchy Italian Snack desserts.",
        image: require("../assets/featured/sweets/Crunchy_Italian_Snack.jpg"),
        dishes: [
          {
            id: 1,
            name: "Italian Biscotti",
            price: "4.99",
            description:
              "Crunchy almond cookies perfect for dipping into coffee or tea.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Tiramisu Crunch",
            price: "5.49",
            description:
              "A twist on traditional tiramisu with a crunchy biscotti base and rich coffee-flavored cream.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Ricotta Cheese Pastries",
            price: "5.79",
            description:
              "Flaky pastries filled with sweet ricotta cheese and a hint of citrus zest.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Pistachio Cannoli",
            price: "5.89",
            description:
              "Crispy cannoli shells filled with a sweet pistachio ricotta filling, dusted with powdered sugar.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Chocolate Hazelnut Biscotti",
            price: "4.79",
            description:
              "Crunchy Italian biscotti with a rich blend of chocolate and hazelnuts.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Italian Almond Cake",
            price: "5.99",
            description:
              "A light and moist almond cake topped with a thin glaze and sliced almonds.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Lemon Ricotta Cookies",
            price: "4.69",
            description:
              "Soft, lemon-infused cookies with a ricotta cheese center for a delicate Italian flavor.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Crispy Zucchini Fritters",
            price: "5.29",
            description:
              "Fried crispy fritters made with zucchini, served with a tangy dipping sauce.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Tartufo Gelato",
            price: "6.19",
            description:
              "Italian gelato served with crunchy chocolate coating and a rich hazelnut center.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Fried Italian Doughnuts (Zeppole)",
            price: "5.49",
            description:
              "Light, fried doughnuts dusted with powdered sugar and drizzled with honey.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 11,
        star: "⭐⭐⭐⭐⭐",
        name: "Dutch Meatballs",
        description: "Dutch Meatballs desserts.",
        image: require("../assets/featured/sweets/Dutch_Meatballs.jpg"),
        dishes: [
          {
            id: 1,
            name: "Dutch Stroopwafels",
            price: "3.99",
            description:
              "Delicious caramel-filled waffle cookies with a hint of cinnamon and vanilla.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Dutch Apple Pie",
            price: "5.49",
            description:
              "A traditional Dutch apple pie with a buttery crust and a generous amount of cinnamon-spiced apples.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Speculaas Cookies",
            price: "4.29",
            description:
              "Crunchy spiced cookies made with cinnamon, nutmeg, and cloves.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Dutch Pastry Puffs",
            price: "4.79",
            description:
              "Flaky puff pastries filled with sweet almond cream and dusted with powdered sugar.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Vanilla Custard Tarts",
            price: "5.29",
            description:
              "Creamy vanilla custard tarts with a crispy shell, topped with a sprinkle of nutmeg.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Dutch Hot Chocolate",
            price: "3.89",
            description:
              "Rich and creamy hot chocolate made with real Dutch cocoa, served with whipped cream.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Dutch Licorice",
            price: "2.99",
            description:
              "Sweet and salty Dutch licorice, a unique treat for those with an adventurous palate.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Boterkoek",
            price: "4.59",
            description:
              "A traditional Dutch buttery almond cake with a dense and rich texture.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Dutch Almond Croissants",
            price: "4.99",
            description:
              "Flaky croissants filled with almond paste and topped with sliced almonds.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Dutch Donuts (Oliebollen)",
            price: "5.19",
            description:
              "Fried doughnuts sprinkled with powdered sugar and often filled with raisins or currants.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 12,
        star: "⭐⭐⭐⭐⭐",
        name: "Pastry Perfection",
        description: "Java Muffins desserts.",
        image: require("../assets/featured/sweets/Java_Muffins.jpg"),
        dishes: [
          {
            id: 1,
            name: "Java Muffins",
            price: "3.99",
            description:
              "Deliciously soft muffins flavored with rich coffee and chocolate chips, perfect for a morning pick-me-up.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Chocolate Espresso Tarts",
            price: "5.49",
            description:
              "Rich chocolate tart with a smooth espresso filling, topped with a dusting of cocoa powder.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Cinnamon Swirl Brioche",
            price: "4.29",
            description:
              "Soft and buttery brioche dough with a swirl of cinnamon sugar, perfect for any time of day.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Espresso Crème Brûlée",
            price: "6.49",
            description:
              "A creamy coffee-flavored custard topped with a perfectly crisp caramelized sugar layer.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Almond Croissants",
            price: "4.79",
            description:
              "Flaky croissants filled with sweet almond paste and topped with slivered almonds for added crunch.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Mocha Cheesecake",
            price: "5.79",
            description:
              "A rich and creamy cheesecake with a hint of espresso, topped with a smooth mocha glaze.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Café Latte Cake",
            price: "5.29",
            description:
              "A moist cake infused with café latte flavor, paired with a light coffee frosting.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Coffee Éclairs",
            price: "4.59",
            description:
              "Choux pastry filled with coffee-flavored custard and topped with a rich chocolate glaze.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Hazelnut Coffee Cake",
            price: "4.99",
            description:
              "A moist coffee cake with a crunchy hazelnut topping, perfect for pairing with your favorite brew.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Tiramisu",
            price: "5.99",
            description:
              "A classic Italian dessert with layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa powder.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 13,
        star: "⭐⭐⭐⭐⭐",
        name: "Proper Plate",
        description: "Olive Stuffed Celery desserts.",
        image: require("../assets/featured/sweets/Olive_Stuffed_Celery.jpg"),
        dishes: [
          {
            id: 1,
            name: "Olive Stuffed Celery",
            price: "2.99",
            description:
              "Crisp celery stalks filled with creamy olive paste, a delightful savory bite.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Stuffed Dates with Almonds",
            price: "4.49",
            description:
              "Medjool dates stuffed with roasted almonds and drizzled with honey for a sweet and nutty treat.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Lemon and Herb Crostini",
            price: "3.79",
            description:
              "Crispy crostini topped with fresh lemon zest and herbs, a perfect balance of tangy and savory.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Savory Cheesecake Bites",
            price: "5.29",
            description:
              "Mini savory cheesecakes with a hint of garlic and fresh herbs, a delicious twist on the classic.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Stuffed Mushrooms",
            price: "4.99",
            description:
              "Mushrooms filled with a creamy blend of cheeses and herbs, baked to perfection.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Olive Tapenade",
            price: "3.89",
            description:
              "A Mediterranean blend of olives, capers, and garlic, served with crunchy toasted bread.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Bacon-Wrapped Dates",
            price: "5.49",
            description:
              "Sweet dates wrapped in crispy bacon for a salty-sweet combination, perfect for any gathering.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Bruschetta with Tomato and Basil",
            price: "4.19",
            description:
              "Fresh diced tomatoes, basil, and olive oil on toasted baguette slices, a classic Italian appetizer.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Caprese Skewers",
            price: "4.69",
            description:
              "Fresh mozzarella, cherry tomatoes, and basil, drizzled with balsamic glaze for a savory snack.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Feta-Stuffed Olives",
            price: "3.49",
            description:
              "Green olives stuffed with tangy feta cheese, perfect for a light and flavorful bite.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 14,
        star: "⭐⭐⭐⭐⭐",
        name: "Pizza Rollups",
        description: "Pizza Rollups desserts.",
        image: require("../assets/featured/sweets/Pizza_Rollups.jpg"),
        dishes: [
          {
            id: 1,
            name: "Classic Pizza Rollups",
            price: "4.99",
            description:
              "Pizza dough rolled with marinara sauce, mozzarella cheese, and Italian seasoning, baked to perfection.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Pepperoni Pizza Rollups",
            price: "5.49",
            description:
              "Pepperoni slices rolled up with gooey cheese and marinara sauce for a savory, bite-sized treat.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Veggie Pizza Rollups",
            price: "4.79",
            description:
              "A vegetarian version with bell peppers, onions, mushrooms, and cheese, all wrapped in pizza dough.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Cheesy Garlic Pizza Rollups",
            price: "5.29",
            description:
              "Garlic butter and mozzarella cheese rolled inside pizza dough, baked to a golden crisp.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "BBQ Chicken Pizza Rollups",
            price: "5.99",
            description:
              "Shredded BBQ chicken, mozzarella, and a tangy BBQ sauce rolled into dough for a smoky, savory bite.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Buffalo Chicken Pizza Rollups",
            price: "6.49",
            description:
              "Spicy buffalo chicken and cheese rolled into pizza dough, offering a perfect balance of heat and flavor.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Hawaiian Pizza Rollups",
            price: "5.19",
            description:
              "Ham, pineapple, and mozzarella cheese wrapped in pizza dough, baked for a sweet and savory flavor.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Margherita Pizza Rollups",
            price: "4.99",
            description:
              "Tomatoes, fresh basil, and mozzarella rolled up with marinara sauce for a classic taste of Italy.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Chicken Alfredo Pizza Rollups",
            price: "6.29",
            description:
              "Creamy Alfredo sauce, grilled chicken, and mozzarella rolled in dough for a rich and satisfying bite.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Mozzarella Stuffed Pizza Rollups",
            price: "5.59",
            description:
              "Pizza dough stuffed with melty mozzarella, served with marinara dipping sauce.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 15,
        star: "⭐⭐⭐",
        name: "Roasted Chickpeas",
        description: "Roasted Chickpeas desserts.",
        image: require("../assets/featured/sweets/Roasted_Chickpeas.jpg"),
        dishes: [
          {
            id: 1,
            name: "Classic Roasted Chickpeas",
            price: "3.49",
            description:
              "Crispy, golden roasted chickpeas seasoned with a pinch of sea salt for a healthy snack.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Smoked Paprika Roasted Chickpeas",
            price: "3.99",
            description:
              "Chickpeas roasted with smoky paprika and a dash of cayenne pepper for a spicy twist.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Garlic Parmesan Roasted Chickpeas",
            price: "4.29",
            description:
              "Roasted chickpeas with savory garlic and parmesan cheese, offering a rich, flavorful bite.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Cinnamon Sugar Roasted Chickpeas",
            price: "3.79",
            description:
              "A sweet treat with roasted chickpeas tossed in cinnamon and sugar, perfect for satisfying your sweet tooth.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Honey Roasted Chickpeas",
            price: "4.09",
            description:
              "Chickpeas coated with honey and a light sprinkle of sea salt for a perfect balance of sweet and savory.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "BBQ Roasted Chickpeas",
            price: "4.19",
            description:
              "Chickpeas roasted with tangy BBQ seasoning for a crunchy, smoky snack.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Lemon Herb Roasted Chickpeas",
            price: "3.99",
            description:
              "Chickpeas roasted with fresh lemon zest and a variety of herbs for a refreshing flavor.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Chili Lime Roasted Chickpeas",
            price: "4.29",
            description:
              "Chickpeas roasted with chili powder and lime for a zesty, spicy snack.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Maple Roasted Chickpeas",
            price: "4.39",
            description:
              "Chickpeas roasted with pure maple syrup and a hint of vanilla for a sweet, natural flavor.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Spicy Sriracha Roasted Chickpeas",
            price: "4.49",
            description:
              "Crispy chickpeas coated with spicy sriracha sauce for a bold, fiery flavor.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 16,
        star: "⭐⭐⭐⭐⭐",
        name: "Watermelon Cups",
        description: "Watermelon Cups desserts.",
        image: require("../assets/featured/sweets/Watermelon_Cups.jpg"),
        dishes: [
          {
            id: 1,
            name: "Classic Watermelon Cup",
            price: "2.99",
            description:
              "Refreshing watermelon served in a cup, perfect for a light and hydrating treat.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Watermelon with Mint & Lime",
            price: "3.49",
            description:
              "A refreshing twist with mint leaves and a squeeze of lime for extra zing.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Watermelon & Feta Cups",
            price: "3.79",
            description:
              "Sweet watermelon paired with creamy feta cheese, a delightful combination of flavors.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Watermelon Sorbet Cup",
            price: "4.29",
            description:
              "Chilled watermelon sorbet served in a cup for a cool, sweet treat on a hot day.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Watermelon & Berry Mix",
            price: "3.99",
            description:
              "Watermelon paired with fresh berries like strawberries and blueberries for a burst of flavor.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Spicy Watermelon Cups",
            price: "4.09",
            description:
              "Watermelon cups with a spicy chili lime seasoning for a unique, zesty kick.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Watermelon & Coconut Cups",
            price: "4.19",
            description:
              "Watermelon served with coconut flakes for a tropical, refreshing combination.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Watermelon Gelato Cup",
            price: "4.39",
            description:
              "Smooth watermelon gelato in a cup, perfect for a creamy, fruity dessert experience.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Watermelon & Yogurt Parfait",
            price: "4.49",
            description:
              "Layered watermelon and creamy yogurt, topped with granola for a crunchy, wholesome treat.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Watermelon & Chocolate Drizzle",
            price: "4.69",
            description:
              "Fresh watermelon cups topped with a rich chocolate drizzle for a sweet, indulgent treat.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
    ],
  },
  {
    id: 4,
    description: "Lorem, adipisicing elit.",
    tittle: "Seafood Specials",
    image: require("../assets/featured/seafood/anchovies.jpg"),
    content: [
      {
        id: 1,
        star: "⭐⭐⭐⭐⭐",
        name: "Crab Pot",
        description: "Anchovies cooked to perfection.",
        image: require("../assets/featured/seafood/anchovies.jpg"),

        dishes: [
          {
            id: 1,
            name: "Grilled Crab Legs",
            price: "19.99",
            description:
              "Fresh crab legs grilled to perfection, served with melted butter for dipping.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Crab Cakes",
            price: "14.99",
            description:
              "Delicious crab cakes made with fresh crab meat, seasoned and pan-fried to golden perfection.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Seafood Pasta",
            price: "18.49",
            description:
              "A creamy pasta dish featuring shrimp, crab, and clams, all tossed in a rich garlic butter sauce.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Garlic Butter Shrimp",
            price: "16.99",
            description:
              "Shrimp sautéed in a savory garlic butter sauce, served with your choice of side.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Lobster Tail",
            price: "22.99",
            description:
              "Succulent lobster tail grilled or steamed to perfection, served with drawn butter.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Fish Tacos",
            price: "12.99",
            description:
              "Fresh fish fillets lightly battered and fried, served in soft tortillas with slaw and a zesty sauce.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Clam Chowder",
            price: "8.99",
            description:
              "A creamy soup made with fresh clams, potatoes, and vegetables, served with a side of crusty bread.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Seafood Platter",
            price: "24.99",
            description:
              "A mixed platter featuring grilled shrimp, fried calamari, crab legs, and oysters, served with sides.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Crispy Calamari",
            price: "11.99",
            description:
              "Crispy, golden calamari rings served with a tangy marinara dipping sauce.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Seafood Paella",
            price: "21.49",
            description:
              "A flavorful Spanish dish made with a mix of shrimp, mussels, and clams, cooked in saffron-infused rice.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 2,
        star: "⭐⭐⭐⭐⭐",
        name: "Fishnet Grill",
        description: "Sardines cooked to perfection.",
        image: require("../assets/featured/seafood/sardines.jpg"),

        dishes: [
          {
            id: 1,
            name: "Grilled Sardines",
            price: "15.99",
            description:
              "Fresh sardines grilled to perfection, served with a zesty lemon and herb dressing.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Sardine Fish Tacos",
            price: "12.49",
            description:
              "Sardines in soft tortillas with crunchy slaw and a spicy mayo drizzle.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Sardine Pasta",
            price: "17.99",
            description:
              "Pasta with sardines in a garlic olive oil sauce, topped with parmesan.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Sardine Salad",
            price: "13.99",
            description:
              "Mixed greens topped with grilled sardines, avocado, and a lemon vinaigrette dressing.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Sardine Sandwich",
            price: "11.99",
            description:
              "Grilled sardines served on a toasted baguette with fresh lettuce, tomato, and a tangy tartar sauce.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Seafood Paella",
            price: "22.49",
            description:
              "A flavorful Spanish dish made with a mix of sardines, shrimp, mussels, and clams, cooked in saffron-infused rice.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Sardine Crostini",
            price: "9.99",
            description:
              "Toasted crostini topped with sardines, garlic, and fresh herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Fish Soup",
            price: "10.49",
            description:
              "A hearty soup made with sardines, vegetables, and a savory broth.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Grilled Seafood Platter",
            price: "24.99",
            description:
              "A mixed platter featuring sardines, shrimp, clams, and mussels, grilled to perfection.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Sardine Pizza",
            price: "18.99",
            description:
              "A thin-crust pizza topped with sardines, capers, olives, and mozzarella.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 3,
        star: "⭐⭐⭐⭐⭐",
        name: "Sea & Shell",
        description: "Scallops cooked to perfection.",
        image: require("../assets/featured/seafood/scallops.jpg"),

        dishes: [
          {
            id: 1,
            name: "Grilled Scallops",
            price: "19.99",
            description:
              "Fresh scallops grilled to perfection, served with a lemon butter sauce.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Scallop Risotto",
            price: "22.49",
            description:
              "Creamy risotto cooked with tender scallops, garlic, and white wine.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Scallop Tacos",
            price: "15.99",
            description:
              "Scallops in soft tortillas with a tangy salsa and avocado.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Scallop Salad",
            price: "17.99",
            description:
              "Mixed greens with grilled scallops, cherry tomatoes, and a balsamic vinaigrette.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Scallop Pasta",
            price: "21.49",
            description:
              "Pasta with scallops, garlic, and a light white wine sauce.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Scallop Ceviche",
            price: "14.99",
            description:
              "Fresh scallops marinated in citrus juice with cilantro, onions, and peppers.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Scallop and Shrimp Paella",
            price: "24.99",
            description:
              "A traditional Spanish dish with scallops, shrimp, and a saffron-infused rice base.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Scallop Skewers",
            price: "18.49",
            description:
              "Skewered and grilled scallops, served with a zesty dipping sauce.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Scallop Pizza",
            price: "19.99",
            description:
              "A gourmet pizza topped with scallops, mozzarella, and arugula.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Seafood Bouillabaisse",
            price: "26.99",
            description:
              "A rich French seafood stew with scallops, shrimp, mussels, and fish, served with garlic toast.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 4,
        star: "⭐⭐⭐⭐",
        name: "Seafoods",
        description: "Seafoods cooked to perfection.",
        image: require("../assets/featured/seafood/seafoods.jpg"),

        dishes: [
          {
            id: 1,
            name: "Grilled Lobster",
            price: "29.99",
            description:
              "Fresh lobster grilled with a garlic butter sauce, served with steamed vegetables.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Shrimp Scampi",
            price: "22.49",
            description: "Shrimp sautéed in a garlic butter sauce with pasta.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Seafood Paella",
            price: "26.99",
            description:
              "A Spanish-inspired dish with shrimp, mussels, clams, and fish, served with saffron rice.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Fried Calamari",
            price: "14.99",
            description:
              "Crispy fried calamari served with marinara dipping sauce.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Oysters Rockefeller",
            price: "18.99",
            description:
              "Oysters topped with spinach, cheese, and breadcrumbs, then baked to perfection.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Clam Chowder",
            price: "8.99",
            description:
              "A rich and creamy clam chowder with bacon, potatoes, and a touch of thyme.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Seafood Tacos",
            price: "16.99",
            description:
              "Soft tortillas filled with grilled shrimp, fish, and a tangy salsa.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Grilled Fish Fillet",
            price: "20.49",
            description:
              "A fresh fish fillet grilled with lemon and herbs, served with a side of rice and vegetables.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Mussels in White Wine Sauce",
            price: "18.49",
            description:
              "Mussels steamed in a white wine and garlic sauce, served with crusty bread.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Seafood Pasta",
            price: "24.99",
            description:
              "Pasta with shrimp, scallops, and clams in a rich cream sauce.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 5,
        star: "⭐⭐",
        name: "Ocean Delights",
        description: "Seaweed cooked to perfection.",
        image: require("../assets/featured/seafood/seafoods.jpg"),

        dishes: [
          {
            id: 1,
            name: "Seaweed Salad",
            price: "12.99",
            description:
              "Fresh seaweed tossed with sesame seeds, cucumber, and a tangy dressing.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Seaweed Soup",
            price: "10.49",
            description:
              "A light and flavorful broth with tender seaweed and a hint of ginger.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Seaweed Rolls",
            price: "14.99",
            description:
              "Nori rolls filled with seasoned rice, seaweed, and assorted vegetables.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Seaweed Chips",
            price: "6.99",
            description:
              "Crispy seaweed chips served with a soy dipping sauce.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Grilled Seaweed Wraps",
            price: "15.49",
            description:
              "Seaweed wrapped around grilled fish or vegetables, served with a soy glaze.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Tempura Seaweed",
            price: "13.99",
            description:
              "Crispy tempura-coated seaweed served with a dipping sauce.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Seaweed and Tofu Stir-Fry",
            price: "17.49",
            description: "Stir-fried seaweed with tofu, garlic, and soy sauce.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Seaweed Sushi Rolls",
            price: "18.99",
            description:
              "Sushi rolls filled with seaweed, avocado, and fish, topped with a spicy mayo.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Spicy Seaweed Tacos",
            price: "16.99",
            description:
              "Tacos filled with spicy seaweed, rice, and fresh vegetables.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 6,
        star: "⭐⭐⭐⭐",
        name: "Seaside Feast",
        description: "Squid cooked to perfection.",
        image: require("../assets/featured/seafood/squid.jpg"),

        dishes: [
          {
            id: 1,
            name: "Grilled Squid",
            price: "19.99",
            description:
              "Tender squid grilled to perfection, served with a garlic butter sauce.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Squid Ink Pasta",
            price: "22.49",
            description:
              "Pasta infused with squid ink, served with fresh seafood and a rich tomato sauce.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Squid Salad",
            price: "14.99",
            description:
              "Fresh squid served over a bed of mixed greens with a citrus vinaigrette.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Crispy Squid Rings",
            price: "12.49",
            description:
              "Deep-fried squid rings, golden and crispy, served with a spicy dipping sauce.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Stuffed Squid",
            price: "24.99",
            description:
              "Squid stuffed with a savory mixture of rice, herbs, and seafood, then grilled to perfection.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Squid Tempura",
            price: "18.99",
            description:
              "Crispy battered squid served with a soy-based dipping sauce.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Squid Stir-Fry",
            price: "21.49",
            description:
              "Stir-fried squid with fresh vegetables and a tangy soy-ginger sauce.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Squid Tacos",
            price: "17.99",
            description:
              "Soft tortillas filled with grilled squid, fresh salsa, and a creamy sauce.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Squid and Chorizo Paella",
            price: "26.49",
            description:
              "A flavorful Spanish dish with squid, chorizo, saffron rice, and fresh vegetables.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 7,
        star: "⭐⭐⭐⭐⭐",
        name: "Tilapia Dishes",
        description: "Tilapia cooked to perfection.",
        image: require("../assets/featured/seafood/tilapia.jpg"),

        dishes: [
          {
            id: 1,
            name: "Grilled Tilapia",
            price: "18.99",
            description:
              "Perfectly grilled tilapia fillets, seasoned with fresh herbs and served with lemon butter sauce.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Tilapia Tacos",
            price: "14.99",
            description:
              "Soft tacos filled with grilled tilapia, fresh salsa, and a tangy sauce.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Baked Tilapia",
            price: "19.49",
            description:
              "Baked tilapia fillets with a crispy herb crust, served with sautéed vegetables.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Tilapia with Mango Salsa",
            price: "21.99",
            description:
              "Grilled tilapia topped with a sweet and tangy mango salsa, served with rice.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Tilapia Fish and Chips",
            price: "16.99",
            description:
              "Classic fish and chips with crispy battered tilapia and golden fries.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Pan-Seared Tilapia",
            price: "20.49",
            description:
              "Pan-seared tilapia served with a creamy dill sauce and roasted potatoes.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Tilapia Stir-Fry",
            price: "22.49",
            description:
              "Stir-fried tilapia with fresh vegetables and a savory soy-ginger sauce.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Blackened Tilapia",
            price: "23.99",
            description:
              "Tilapia fillets coated in a spicy blackened seasoning, grilled to perfection.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Tilapia Paella",
            price: "25.99",
            description:
              "A Spanish-inspired dish with tilapia, saffron rice, and a variety of fresh seafood.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
        ],
      },
    ],
  },
  {
    // jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
    id: 5,
    description: "Lorem dolor amet consectetur, adipisicing elit.",
    tittle: "Chill Bar",
    image: require("../assets/featured/drinks/boozy_dole.jpg"),
    content: [
      {
        id: 1,
        star: "⭐⭐⭐⭐",
        name: "Drink Zone",
        description: "Boozy Dole with our refreshing beverages.",
        image: require("../assets/featured/drinks/boozy_dole.jpg"),

        dishes: [
          {
            id: 1,
            name: "Mojito",
            price: "8.99",
            description:
              "A refreshing blend of rum, mint, lime, and soda water.",
            image: require("../assets/featured/drinks/vodka_mojito.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Margarita",
            price: "9.49",
            description:
              "Tequila, lime juice, and triple sec, served with a salted rim.",
            image: require("../assets/featured/drinks/Margarita.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Piña Colada",
            price: "10.99",
            description:
              "A tropical mix of rum, pineapple juice, and coconut cream.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Daiquiri",
            price: "7.99",
            description:
              "Rum, lime juice, and sugar syrup, served on the rocks or blended.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Gin & Tonic",
            price: "7.49",
            description:
              "A classic drink made with gin and tonic water, garnished with lime.",
            image: require("../assets/featured/drinks/Tom_Collins.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Cuba Libre",
            price: "8.49",
            description: "Rum, cola, and lime juice.",
            image: require("../assets/featured/drinks/red_wine_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Bloody Mary",
            price: "9.99",
            description:
              "A savory cocktail made with vodka, tomato juice, and various spices.",
            image: require("../assets/featured/drinks/drinks.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Tequila Sunrise",
            price: "9.49",
            description:
              "Tequila, orange juice, and grenadine for a sunrise effect.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Long Island Iced Tea",
            price: "11.99",
            description:
              "A blend of vodka, tequila, rum, gin, triple sec, lemon juice, and a splash of cola.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Boozy Dole",
            price: "12.99",
            description:
              "A unique blend of tropical fruits and spirits, a signature drink at Drink Zone.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 2,
        star: "⭐⭐⭐⭐⭐",
        name: "Chill Sip",
        description: "Campari Soda Orange refreshing beverages.",
        image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
        dishes: [
          {
            id: 1,
            name: "Campari Soda Orange",
            price: "6.99",
            description:
              "A refreshing and slightly bitter beverage made with Campari and orange soda.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Orange Spritzer",
            price: "5.49",
            description:
              "A light and refreshing drink with orange juice and soda water.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Tequila Sunrise",
            price: "8.99",
            description:
              "A cocktail made with tequila, orange juice, and grenadine.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Screwdriver",
            price: "7.49",
            description:
              "A classic cocktail with vodka and fresh orange juice.",
            image: require("../assets/featured/drinks/date_shakes_recipe.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Mimosa",
            price: "9.49",
            description:
              "A sparkling combination of orange juice and champagne.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Negroni",
            price: "8.49",
            description:
              "A sophisticated blend of gin, Campari, and sweet vermouth.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Aperol Spritz",
            price: "7.99",
            description:
              "A refreshing Italian cocktail made with Aperol, prosecco, and soda.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Citrus Fizz",
            price: "6.49",
            description: "A fizzy drink made with lemon, lime, and soda water.",
            image: require("../assets/featured/drinks/red_wine_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Gin & Tonic",
            price: "7.99",
            description: "A classic gin and tonic served with a slice of lime.",
            image: require("../assets/featured/drinks/Tom_Collins.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Chill Sip Signature",
            price: "9.99",
            description:
              "A special blend of Campari, soda, and orange juice, perfect for any occasion.",
            image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 3,
        star: "⭐⭐⭐⭐⭐",
        name: "Cold Brew Coffee",
        description: "Cold Brew Coffee refreshing beverages.",
        image: require("../assets/featured/drinks/campari_soda_orange.jpg"),

        dishes: [
          {
            id: 1,
            name: "Boozy Dole",
            price: "6.99",
            description:
              "A tropical mix of pineapple juice and rum, perfect for summer vibes.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Campari Soda Orange",
            price: "5.99",
            description:
              "A refreshing and slightly bitter beverage made with Campari and orange soda.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Creamy Lemonade",
            price: "4.99",
            description:
              "Lemonade with a smooth and creamy twist, ideal for a hot day.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Cucumber Spritzer",
            price: "4.49",
            description:
              "A light and refreshing cucumber-infused soda spritzer.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Date Shakes",
            price: "5.99",
            description: "Sweet and creamy milkshake made with fresh dates.",
            image: require("../assets/featured/drinks/date_shakes_recipe.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Chill Sips Blend",
            price: "6.49",
            description:
              "An all-time favorite summer drink mix from Chill Sips.",
            image: require("../assets/featured/drinks/drinks.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Elderflower Spritz",
            price: "6.49",
            description:
              "Elegant spritz with floral elderflower tones and bubbly refreshment.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Frosé",
            price: "7.49",
            description:
              "Frozen rosé wine blended with fruit—your icy pink summer delight.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Gingery Berry",
            price: "5.99",
            description:
              "Spicy ginger paired with sweet berries in a vibrant drink.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Long Island Iced Tea",
            price: "8.99",
            description:
              "A strong cocktail with vodka, gin, rum, tequila, and a splash of cola.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
          {
            id: 11,
            name: "Margarita",
            price: "7.99",
            description:
              "Classic lime margarita with tequila and triple sec on the rocks.",
            image: require("../assets/featured/drinks/Margarita.jpg"),
            quantity: 0,
          },
          {
            id: 12,
            name: "Pineapple Punch",
            price: "5.99",
            description:
              "Sweet pineapple juice with citrus and a splash of soda.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
          {
            id: 13,
            name: "Raspberry Lemonade",
            price: "4.49",
            description: "Refreshing lemonade infused with tangy raspberries.",
            image: require("../assets/featured/drinks/Raspberry_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 14,
            name: "Red Wine Spritz",
            price: "6.99",
            description: "A bubbly, slightly sweet mix of red wine and soda.",
            image: require("../assets/featured/drinks/red_wine_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 15,
            name: "Tom Collins",
            price: "7.49",
            description:
              "A gin-based classic with lemon, soda, and a hint of sugar.",
            image: require("../assets/featured/drinks/Tom_Collins.jpg"),
            quantity: 0,
          },
          {
            id: 16,
            name: "Vodka Mojito",
            price: "6.99",
            description:
              "A twist on the mojito with vodka, mint, lime, and soda.",
            image: require("../assets/featured/drinks/vodka_mojito.jpg"),
            quantity: 0,
          },
          {
            id: 17,
            name: "Watermelon Fresca",
            price: "5.49",
            description:
              "Hydrating and light watermelon juice with a hint of lime.",
            image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 4,
        star: "⭐⭐⭐⭐⭐",
        name: "Creamy Lemonade",
        description: "Creamy Lemonade refreshing beverages.",
        image: require("../assets/featured/drinks/creamy_lemonade.jpg"),

        dishes: [
          {
            id: 1,
            name: "Classic Creamy Lemonade",
            price: "4.99",
            description:
              "Refreshing lemonade blended with creamy sweetness for a smooth and tangy flavor.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Strawberry Creamy Lemonade",
            price: "5.49",
            description:
              "A fruity twist on the classic, with fresh strawberries blended into the creamy lemonade.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Mango Creamy Lemonade",
            price: "5.99",
            description:
              "Tangy lemonade combined with the tropical flavor of mango and a creamy finish.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Blueberry Creamy Lemonade",
            price: "5.49",
            description:
              "A delicious fusion of sweet blueberries and tangy lemonade, topped with a creamy texture.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Peach Creamy Lemonade",
            price: "5.99",
            description:
              "Peach puree blended with lemonade and cream, offering a fruity and indulgent drink.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Pineapple Creamy Lemonade",
            price: "5.99",
            description:
              "Tropical pineapple flavor combined with smooth lemonade and creamy richness.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Raspberry Creamy Lemonade",
            price: "5.49",
            description:
              "Raspberries and lemonade combine for a tart and sweet drink with a creamy finish.",
            image: require("../assets/featured/drinks/Raspberry_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Lime Creamy Lemonade",
            price: "4.99",
            description:
              "A refreshing twist with lime added to the creamy lemonade for a zesty flavor.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Watermelon Creamy Lemonade",
            price: "5.99",
            description:
              "Sweet watermelon and lemonade blend, finished with a creamy texture for a refreshing treat.",
            image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Coconut Creamy Lemonade",
            price: "5.49",
            description:
              "A tropical coconut twist mixed with creamy lemonade for a smooth, refreshing experience.",
            image: require("../assets/featured/drinks/vodka_mojito.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 5,
        star: "⭐⭐⭐⭐⭐",
        name: "Beverage Bay",
        description: "Creamy Lemonade refreshing beverages.",
        image: require("../assets/featured/drinks/creamy_lemonade.jpg"),

        dishes: [
          {
            id: 1,
            name: "Boozy Dole Whip",
            price: "6.99",
            description:
              "A tropical pineapple and rum frozen treat for summer vibes.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Campari Soda Orange",
            price: "5.99",
            description:
              "A bittersweet Italian classic with orange zest and sparkling soda.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Creamy Lemonade",
            price: "4.99",
            description: "Classic lemonade with a smooth, creamy twist.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Cucumber Spritzer",
            price: "5.49",
            description:
              "Light and refreshing cucumber-infused sparkling drink.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Date Shake",
            price: "6.49",
            description:
              "A rich and creamy blend of dates and milk for a natural sweet taste.",
            image: require("../assets/featured/drinks/date_shakes_recipe.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Mixed Drinks Special",
            price: "7.99",
            description:
              "An assorted mix of refreshing drinks to suit every taste.",
            image: require("../assets/featured/drinks/drinks.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Elderflower Spritz",
            price: "5.99",
            description:
              "Delicate elderflower and bubbles in a light sparkling cocktail.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Frosé",
            price: "6.99",
            description:
              "Frozen rosé slushie, perfect for cooling down in style.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Gingery Berry Fizz",
            price: "5.49",
            description:
              "Spicy ginger and berry mix in a bold, sparkling drink.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Long Island Iced Tea",
            price: "8.99",
            description:
              "A strong blend of five spirits with a splash of cola and lemon.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
          {
            id: 11,
            name: "Margarita",
            price: "7.49",
            description: "Classic lime and tequila cocktail served over ice.",
            image: require("../assets/featured/drinks/Margarita.jpg"),
            quantity: 0,
          },
          {
            id: 12,
            name: "Pineapple Punch",
            price: "5.99",
            description:
              "A tropical pineapple drink bursting with sweet citrus flavor.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
          {
            id: 13,
            name: "Raspberry Lemonade",
            price: "4.99",
            description:
              "Tart raspberries and fresh lemonade in a fruity refresher.",
            image: require("../assets/featured/drinks/Raspberry_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 14,
            name: "Red Wine Spritz",
            price: "6.49",
            description:
              "A light red wine mixed with soda and a splash of orange.",
            image: require("../assets/featured/drinks/red_wine_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 15,
            name: "Tom Collins",
            price: "6.99",
            description:
              "Gin, lemon juice, and soda for a crisp and bubbly cocktail.",
            image: require("../assets/featured/drinks/Tom_Collins.jpg"),
            quantity: 0,
          },
          {
            id: 16,
            name: "Vodka Mojito",
            price: "6.49",
            description:
              "A twist on the classic mojito with fresh mint and vodka.",
            image: require("../assets/featured/drinks/vodka_mojito.jpg"),
            quantity: 0,
          },
          {
            id: 17,
            name: "Watermelon Fresca",
            price: "5.99",
            description:
              "Juicy watermelon blended into a light and hydrating fresca.",
            image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 6,
        star: "⭐⭐⭐⭐⭐",
        name: "Cucumber Spritzer",
        description:
          "Creamy Lemonade refreshing beverages with a cucumber twist, perfectly chilled for a refreshing experience.",
        image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
        dishes: [
          {
            id: 1,
            name: "Classic Cucumber Spritzer",
            price: "4.25",
            description:
              "A refreshing cucumber-based spritzer with a touch of lemon and mint.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Cucumber Lemon Fizz",
            price: "4.50",
            description:
              "A citrusy cucumber beverage with sparkling water and a fresh lemon zest.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Cucumber Lime Refresher",
            price: "4.75",
            description:
              "A tangy, light cucumber drink with lime and a hint of soda, perfect for hot days.",
            image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Cucumber Basil Sparkler",
            price: "5.00",
            description:
              "Infused with fresh basil and cucumber, this spritzer is a sophisticated, refreshing drink.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 7,
        star: "⭐⭐⭐",
        name: "Sip Vibe",
        description:
          "Date Shakes Recipe refreshing beverages, a rich and creamy shake made from dates, perfect for any time of the day.",
        image: require("../assets/featured/drinks/date_shakes_recipe.jpg"),
        dishes: [
          {
            id: 1,
            name: "Classic Date Shake",
            price: "5.00",
            description:
              "A sweet and creamy shake made with dates, milk, and a hint of vanilla.",
            image: require("../assets/featured/drinks/date_shakes_recipe.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Date and Almond Shake",
            price: "5.25",
            description:
              "A blend of dates and almond milk, creating a nutty, sweet, and healthy shake.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Chocolate Date Shake",
            price: "5.50",
            description:
              "A chocolatey twist on the classic date shake, adding cocoa for a rich, indulgent taste.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Date and Banana Shake",
            price: "5.75",
            description:
              "A smooth shake made from dates and ripe bananas for a creamy and naturally sweet flavor.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 8,
        star: "⭐⭐⭐⭐⭐",
        name: "Drink On",
        description:
          "Drink On refreshing beverages, serving a wide variety of cool and energizing drinks for all occasions.",
        image: require("../assets/featured/drinks/drinks.jpg"),
        dishes: [
          {
            id: 1,
            name: "Tropical Breeze",
            price: "6.00",
            description:
              "A refreshing blend of pineapple, coconut, and a splash of lime, perfect for a tropical escape.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Berry Blast",
            price: "6.50",
            description:
              "A vibrant mix of strawberries, blueberries, and raspberries, blended to create a fruity and energizing drink.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Mango Mojito",
            price: "7.00",
            description:
              "A zesty and sweet combination of mango, mint, and lime, creating a fun twist on the classic mojito.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Lemon Ginger Fizz",
            price: "5.50",
            description:
              "A bubbly and tangy mix of fresh lemon and ginger with sparkling water, perfect for refreshing your senses.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Pineapple Paradise",
            price: "6.00",
            description:
              "A tropical blend of pineapple and coconut water with a touch of honey for extra sweetness.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Citrus Cooler",
            price: "5.75",
            description:
              "A cool and citrusy drink made with orange, lemon, and lime juices, great for a refreshing pick-me-up.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Peach Perfection",
            price: "6.25",
            description:
              "A deliciously smooth blend of fresh peaches and a dash of mint, offering a sweet, summery flavor.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Watermelon Wave",
            price: "6.50",
            description:
              "A juicy and hydrating watermelon drink with a hint of lime, perfect for hot summer days.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Cucumber Mint Cooler",
            price: "5.50",
            description:
              "A refreshing blend of cucumber and mint, lightly sweetened with agave syrup, ideal for staying cool.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Strawberry Lemonade",
            price: "6.00",
            description:
              "A sweet and tart combination of ripe strawberries and freshly squeezed lemon, creating a perfect balance.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 9,
        star: "⭐⭐⭐⭐⭐",
        name: "Elderflower Spritz",
        description: "Elderflower Spritz beverages.",
        image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cucumber Salad",
            description:
              "A light and refreshing cucumber salad to complement your Elderflower Spritz.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Lemon Scones",
            description:
              "Zesty lemon scones, perfect for pairing with your Elderflower Spritz.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Chilled Shrimp Cocktail",
            description:
              "Chilled shrimp with a tangy cocktail sauce, a great appetizer to go with Elderflower Spritz.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Bruschetta",
            description:
              "Toasted bread topped with fresh tomatoes, basil, and olive oil.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Stuffed Mushrooms",
            description:
              "Mushrooms stuffed with a creamy filling, perfect as a light appetizer.",
            image: require("../assets/featured/drinks/date_shakes_recipe.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Cheese Platter",
            description:
              "A selection of gourmet cheeses to pair with your Elderflower Spritz.",
            image: require("../assets/featured/drinks/drinks.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Spinach Artichoke Dip",
            description:
              "A creamy and savory spinach artichoke dip served with crackers or bread.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Grilled Asparagus",
            description: "Grilled asparagus with a light lemon vinaigrette.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Smoked Salmon Canapés",
            description:
              "Delicate smoked salmon on crispy bread with a dill cream cheese spread.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Fruit Tart",
            description:
              "A fresh fruit tart with a buttery crust and creamy filling.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 10,
        star: "⭐⭐⭐⭐",
        name: "Frose",
        description: "Frose refreshing beverages.",
        image: require("../assets/featured/drinks/frose.jpg"),
        dishes: [
          {
            id: 1,
            name: "Grilled Chicken Skewers",
            description:
              "Juicy grilled chicken skewers, perfect to complement your Frose.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Caprese Salad",
            description:
              "Fresh mozzarella, tomatoes, and basil with a balsamic glaze.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Fried Calamari",
            description:
              "Crispy fried calamari served with a tangy dipping sauce.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Avocado Toast",
            description:
              "Ripe avocado on toasted bread with a drizzle of olive oil and sea salt.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Pasta Primavera",
            description:
              "A light pasta with fresh vegetables and a garlic olive oil sauce.",
            image: require("../assets/featured/drinks/date_shakes_recipe.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Cheese and Charcuterie Board",
            description:
              "An assortment of cheeses and cured meats, ideal for pairing with Frose.",
            image: require("../assets/featured/drinks/drinks.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Bruschetta",
            description:
              "Toasted bread with fresh tomatoes, basil, and balsamic glaze.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Zucchini Fritters",
            description: "Crispy zucchini fritters with a tangy dipping sauce.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Lobster Rolls",
            description:
              "Delicious lobster meat served in a toasted bun with mayo.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Berry Parfait",
            description:
              "Layers of fresh berries and whipped cream, a perfect light dessert.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 11,
        star: "⭐⭐⭐⭐⭐",
        name: "Frose",
        description: "Frose refreshing beverages.",
        image: require("../assets/featured/drinks/frose.jpg"),
        dishes: [
          {
            id: 1,
            name: "Grilled Chicken Skewers",
            description:
              "Juicy grilled chicken skewers, perfect to complement your Frose.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Caprese Salad",
            description:
              "Fresh mozzarella, tomatoes, and basil with a balsamic glaze.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Fried Calamari",
            description:
              "Crispy fried calamari served with a tangy dipping sauce.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Avocado Toast",
            description:
              "Ripe avocado on toasted bread with a drizzle of olive oil and sea salt.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Pasta Primavera",
            description:
              "A light pasta with fresh vegetables and a garlic olive oil sauce.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Cheese and Charcuterie Board",
            description:
              "An assortment of cheeses and cured meats, ideal for pairing with Frose.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Bruschetta",
            description:
              "Toasted bread with fresh tomatoes, basil, and balsamic glaze.",
            image: require("../assets/featured/drinks/date_shakes_recipe.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Zucchini Fritters",
            description: "Crispy zucchini fritters with a tangy dipping sauce.",
            image: require("../assets/featured/drinks/drinks.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Lobster Rolls",
            description:
              "Delicious lobster meat served in a toasted bun with mayo.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Berry Parfait",
            description:
              "Layers of fresh berries and whipped cream, a perfect light dessert.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 12,
        star: "⭐⭐⭐⭐⭐",
        name: "Gingery Berry",
        description: "Gingery Berry refreshing beverages.",
        image: require("../assets/featured/drinks/gingery_berry.jpg"),
        dishes: [
          {
            id: 1,
            name: "Grilled Chicken Skewers",
            description:
              "Juicy grilled chicken skewers, perfect to complement your Gingery Berry.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Caprese Salad",
            description:
              "Fresh mozzarella, tomatoes, and basil with a balsamic glaze.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Fried Calamari",
            description:
              "Crispy fried calamari served with a tangy dipping sauce.",
            image: require("../assets/featured/drinks/Margarita.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Avocado Toast",
            description:
              "Ripe avocado on toasted bread with a drizzle of olive oil and sea salt.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Pasta Primavera",
            description:
              "A light pasta with fresh vegetables and a garlic olive oil sauce.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Cheese and Charcuterie Board",
            description:
              "An assortment of cheeses and cured meats, ideal for pairing with Gingery Berry.",
            image: require("../assets/featured/drinks/Raspberry_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Bruschetta",
            description:
              "Toasted bread with fresh tomatoes, basil, and balsamic glaze.",
            image: require("../assets/featured/drinks/red_wine_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Zucchini Fritters",
            description: "Crispy zucchini fritters with a tangy dipping sauce.",
            image: require("../assets/featured/drinks/Tom_Collins.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Lobster Rolls",
            description:
              "Delicious lobster meat served in a toasted bun with mayo.",
            image: require("../assets/featured/drinks/vodka_mojito.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Berry Parfait",
            description:
              "Layers of fresh berries and whipped cream, a perfect light dessert.",
            image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 13,
        star: "⭐⭐⭐⭐⭐",
        name: "Island Tea",
        description: "Long Island Iced Tea beverages.",
        image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
        dishes: [
          {
            id: 1,
            name: "Grilled Chicken Skewers",
            description:
              "Juicy grilled chicken skewers, perfect to complement your Island Tea.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Caprese Salad",
            description:
              "Fresh mozzarella, tomatoes, and basil with a balsamic glaze.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Fried Calamari",
            description:
              "Crispy fried calamari served with a tangy dipping sauce.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Avocado Toast",
            description:
              "Ripe avocado on toasted bread with a drizzle of olive oil and sea salt.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Pasta Primavera",
            description:
              "A light pasta with fresh vegetables and a garlic olive oil sauce.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Cheese and Charcuterie Board",
            description:
              "An assortment of cheeses and cured meats, ideal for pairing with Island Tea.",
            image: require("../assets/featured/drinks/Margarita.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Bruschetta",
            description:
              "Toasted bread with fresh tomatoes, basil, and balsamic glaze.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Zucchini Fritters",
            description: "Crispy zucchini fritters with a tangy dipping sauce.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Lobster Rolls",
            description:
              "Delicious lobster meat served in a toasted bun with mayo.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Berry Parfait",
            description:
              "Layers of fresh berries and whipped cream, a perfect light dessert.",
            image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 14,
        star: "⭐⭐⭐⭐⭐",
        name: "Margarita",
        description: "Margarita fresh beverages.",
        image: require("../assets/featured/drinks/Margarita.jpg"),
        dishes: [
          {
            id: 1,
            name: "Nachos Supreme",
            description:
              "Crispy tortilla chips loaded with cheese, sour cream, and jalapeños.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Guacamole and Chips",
            description:
              "Freshly made guacamole served with crunchy tortilla chips.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Quesadillas",
            description:
              "Flour tortillas filled with cheese, served with salsa and sour cream.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Taco Salad",
            description:
              "A fresh salad topped with taco meat, cheese, and a tangy dressing.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Churros",
            description:
              "Sweet, fried dough sticks dusted with cinnamon sugar, perfect with your Margarita.",
            image: require("../assets/featured/drinks/Margarita.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Ceviche",
            description:
              "Fresh fish marinated in citrus with tomatoes, onions, and cilantro.",
            image: require("../assets/featured/drinks/date_shakes_recipe.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Mexican Street Corn",
            description:
              "Grilled corn on the cob with chili powder, cheese, and lime.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Fajitas",
            description:
              "Grilled chicken or beef with bell peppers and onions, served with tortillas.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Burritos",
            description:
              "Flour tortillas wrapped around rice, beans, and your choice of meat.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Salsa and Chips",
            description:
              "A classic pairing of fresh salsa with crispy tortilla chips.",
            image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 15,
        star: "⭐⭐⭐⭐",
        name: "Pineapple Punch",
        description: "Pineapple Punch fresh beverages.",
        image: require("../assets/featured/drinks/pineapple_punch.jpg"),
        dishes: [
          {
            id: 1,
            name: "Grilled Pineapple Skewers",
            description:
              "Sweet grilled pineapple served with a touch of cinnamon.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Pineapple Salsa",
            description:
              "Fresh pineapple mixed with red onions, cilantro, and lime.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Tropical Fruit Salad",
            description: "A refreshing mix of pineapple, mango, and kiwi.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Pineapple Upside Down Cake",
            description: "A moist cake with caramelized pineapple on top.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Pineapple Coconut Sorbet",
            description:
              "A creamy, refreshing dessert made with pineapple and coconut.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Grilled Chicken with Pineapple",
            description:
              "Tender grilled chicken served with caramelized pineapple slices.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Pineapple Fried Rice",
            description:
              "Fried rice mixed with pineapple, vegetables, and your choice of meat.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Pineapple Smoothie",
            description:
              "A creamy smoothie made with fresh pineapple and yogurt.",
            image: require("../assets/featured/drinks/Margarita.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Pineapple Mojito",
            description:
              "A tropical twist on the classic mojito, with fresh pineapple.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Pineapple Sorbet",
            description: "A sweet and tangy sorbet made with fresh pineapple.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 16,
        star: "⭐⭐⭐⭐⭐",
        name: "Raspberry Cocktail",
        description: "Raspberry Cocktail beverages.",
        image: require("../assets/featured/drinks/pineapple_punch.jpg"),
        dishes: [
          {
            id: 1,
            name: "Raspberry Sorbet",
            description: "A refreshing raspberry sorbet for a cool treat.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Raspberry Cheesecake",
            description:
              "A creamy cheesecake topped with a fresh raspberry compote.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Raspberry Jam",
            description:
              "Homemade raspberry jam perfect for toast or pastries.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Raspberry Mousse",
            description:
              "A smooth, creamy mousse flavored with ripe raspberries.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Raspberry Tart",
            description: "A crispy tart filled with sweet raspberry cream.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Raspberry Smoothie",
            description:
              "A blend of fresh raspberries and yogurt for a healthy drink.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Raspberry Lemonade",
            description: "A tangy lemonade with a splash of fresh raspberries.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Raspberry Muffins",
            description:
              "Fluffy muffins filled with fresh raspberries and topped with a crumble.",
            image: require("../assets/featured/drinks/Margarita.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Raspberry Pancakes",
            description:
              "Fluffy pancakes topped with raspberry sauce and fresh berries.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Raspberry Brownies",
            description: "Decadent brownies with a hint of raspberry flavor.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 17,
        star: "⭐⭐⭐",
        name: "Raspberry Lemonade",
        description: "Raspberry Lemonade beverages.",
        image: require("../assets/featured/drinks/Raspberry_lemonade.jpg"),
        dishes: [
          {
            id: 1,
            name: "Raspberry Sorbet",
            description: "A refreshing raspberry sorbet for a cool treat.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Raspberry Cheesecake",
            description:
              "A creamy cheesecake topped with a fresh raspberry compote.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Raspberry Jam",
            description:
              "Homemade raspberry jam perfect for toast or pastries.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Raspberry Mousse",
            description:
              "A smooth, creamy mousse flavored with ripe raspberries.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Raspberry Tart",
            description: "A crispy tart filled with sweet raspberry cream.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Raspberry Smoothie",
            description:
              "A blend of fresh raspberries and yogurt for a healthy drink.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Raspberry Lemonade Cake",
            description: "A moist cake flavored with raspberry lemonade.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Raspberry Muffins",
            description:
              "Fluffy muffins filled with fresh raspberries and topped with a crumble.",
            image: require("../assets/featured/drinks/Margarita.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Raspberry Pancakes",
            description:
              "Fluffy pancakes topped with raspberry sauce and fresh berries.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Raspberry Brownies",
            description: "Decadent brownies with a hint of raspberry flavor.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 18,
        star: "⭐⭐⭐⭐⭐",
        name: "Red Wine Spritz",
        description: "Red Wine Spritz fresh beverages.",
        image: require("../assets/featured/drinks/red_wine_spritz.jpg"),
        dishes: [
          {
            id: 1,
            name: "Red Wine Sorbet",
            description: "A refreshing sorbet made with rich red wine flavors.",
            image: require("../assets/featured/drinks/red_wine_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Red Wine Risotto",
            description:
              "A creamy risotto with a hint of red wine for depth of flavor.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Red Wine Jelly",
            description: "A sweet and tangy jelly made with red wine.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Red Wine Poached Pears",
            description: "Pears poached in red wine with spices and sugar.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Red Wine Chocolate Cake",
            description:
              "A decadent chocolate cake made with red wine for extra richness.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Red Wine Marinated Steak",
            description:
              "Steak marinated in red wine and grilled to perfection.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Red Wine Braised Lamb",
            description:
              "Lamb braised in red wine and herbs, making it tender and flavorful.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Red Wine Granita",
            description:
              "A frozen dessert made with red wine and a touch of citrus.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Red Wine Glazed Chicken",
            description:
              "Chicken glazed with a sweet and savory red wine sauce.",
            image: require("../assets/featured/drinks/Tom_Collins.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Red Wine Fruit Salad",
            description: "A refreshing fruit salad with a red wine dressing.",
            image: require("../assets/featured/drinks/vodka_mojito.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 19,
        star: "⭐⭐⭐⭐⭐",
        name: "Tom Collins",
        description: "Red Wine Spritz fresh beverages.",
        image: require("../assets/featured/drinks/Tom_Collins.jpg"),
        dishes: [
          {
            id: 1,
            name: "Tom Collins Salad",
            description:
              "A refreshing citrusy salad with a Tom Collins-inspired dressing.",
            image: require("../assets/featured/drinks/Tom_Collins.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Tom Collins Chicken Wings",
            description:
              "Crispy chicken wings tossed in a zesty Tom Collins-inspired glaze.",
            image: require("../assets/featured/drinks/Margarita.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Tom Collins Sorbet",
            description:
              "A tangy and refreshing sorbet made with citrus and gin.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Tom Collins Shrimp Cocktail",
            description:
              "Shrimp served with a tangy Tom Collins-inspired cocktail sauce.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Tom Collins Tartare",
            description: "A fresh fish tartare with a hint of citrus and gin.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Tom Collins Marinated Tofu",
            description:
              "Tofu marinated in a zesty Tom Collins-inspired dressing and grilled.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Tom Collins Glazed Salmon",
            description:
              "Salmon glazed with a tangy, citrus-infused Tom Collins sauce.",
            image: require("../assets/featured/drinks/red_wine_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Tom Collins Sorbet Bars",
            description:
              "Frozen sorbet bars with a refreshing Tom Collins flavor.",
            image: require("../assets/featured/drinks/date_shakes_recipe.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Tom Collins Cake",
            description:
              "A light and moist cake flavored with lemon and gin, inspired by the Tom Collins.",
            image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Tom Collins Margarita",
            description:
              "A fusion of Tom Collins and margarita, with a refreshing citrus blend.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 20,
        star: "⭐⭐⭐⭐⭐",
        name: "Vodka Mojito",
        description: "Red Wine Spritz fresh beverages.",
        image: require("../assets/featured/drinks/vodka_mojito.jpg"),
        dishes: [
          {
            id: 1,
            name: "Vodka Mojito Salad",
            description: "A fresh salad with a tangy mojito-inspired dressing.",
            image: require("../assets/featured/drinks/vodka_mojito.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Vodka Mojito Chicken Skewers",
            description:
              "Juicy chicken skewers marinated in a zesty mojito marinade.",
            image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Vodka Mojito Sorbet",
            description:
              "A cool and refreshing mojito-flavored sorbet with a hint of mint.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Vodka Mojito Shrimp Tacos",
            description:
              "Shrimp tacos with a mojito-infused salsa for an extra twist.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Vodka Mojito Prawns",
            description:
              "Prawns cooked in a fresh, minty mojito-inspired sauce.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Vodka Mojito Chicken Wings",
            description: "Crispy wings tossed in a vibrant mojito glaze.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Vodka Mojito Grilled Vegetables",
            description:
              "Grilled vegetables tossed in a refreshing mojito marinade.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Vodka Mojito Tiramisu",
            description:
              "A mojito-inspired twist on the classic tiramisu, infused with mint and lime.",
            image: require("../assets/featured/drinks/long_island_iced_tea.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Vodka Mojito Ice Cream",
            description:
              "Creamy ice cream with the perfect blend of mint, lime, and vodka.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Vodka Mojito Cake",
            description:
              "A moist cake with a mojito flavor, complete with a minty glaze.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 21,
        star: "⭐⭐⭐⭐⭐",
        name: "Watermelon Fresca",
        description: "Watermelon Fresca fresh beverages.",
        image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
        dishes: [
          {
            id: 1,
            name: "Watermelon Fresca Salad",
            description: "A fresh salad with juicy watermelon, feta, and mint.",
            image: require("../assets/featured/drinks/watermelon_fresca.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Watermelon Fresca Sorbet",
            description: "A refreshing watermelon sorbet to cool you down.",
            image: require("../assets/featured/drinks/boozy_dole.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Watermelon Fresca Smoothie",
            description:
              "A smooth and creamy watermelon beverage, perfect for a hot day.",
            image: require("../assets/featured/drinks/cucumber_spritzer.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Watermelon Fresca Chicken Skewers",
            description:
              "Grilled chicken skewers with a sweet watermelon glaze.",
            image: require("../assets/featured/drinks/campari_soda_orange.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Watermelon Fresca Margarita",
            description:
              "A watermelon twist on the classic margarita, perfect for parties.",
            image: require("../assets/featured/drinks/creamy_lemonade.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Watermelon Fresca Popsicles",
            description:
              "Ice pops made with fresh watermelon for a sweet treat.",
            image: require("../assets/featured/drinks/gingery_berry.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Watermelon Fresca Gazpacho",
            description:
              "A chilled soup made with fresh watermelon, cucumber, and herbs.",
            image: require("../assets/featured/drinks/frose.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Watermelon Fresca Smoothie Bowl",
            description:
              "A smoothie bowl made with watermelon, granola, and fresh fruit.",
            image: require("../assets/featured/drinks/elderflower_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Watermelon Fresca Cake",
            description:
              "A soft and moist watermelon-flavored cake topped with cream.",
            image: require("../assets/featured/drinks/red_wine_spritz.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Watermelon Fresca Ice Cream",
            description:
              "A creamy ice cream made with fresh watermelon for a cool dessert.",
            image: require("../assets/featured/drinks/pineapple_punch.jpg"),
            quantity: 0,
          },
        ],
      },
    ],
  },
  {
    id: 6,
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    tittle: "Healthy & Fresh",
    image: require("../assets/featured/healthy/almonds.jpg"),
    content: [
      {
        id: 1,
        star: "⭐⭐⭐⭐⭐",
        name: "Almonds",
        description: "Almonds options for a healthy diet.",
        image: require("../assets/featured/healthy/almonds.jpg"),
        dishes: [
          {
            id: 1,
            name: "Almond Milk Smoothie",
            description:
              "A smooth and creamy almond milk smoothie, perfect for a healthy start.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Almond-Crusted Chicken",
            description:
              "Tender chicken with a crunchy almond crust for a nutritious meal.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Almond Butter Toast",
            description:
              "Whole grain toast topped with creamy almond butter for a healthy snack.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Almond and Berry Salad",
            description:
              "A fresh salad with almonds, mixed berries, and a light vinaigrette.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Almond Energy Bars",
            description:
              "Homemade energy bars packed with almonds and other healthy ingredients.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Almond and Quinoa Bowl",
            description:
              "A nourishing quinoa bowl with almonds, avocado, and fresh veggies.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Almond Smoothie Bowl",
            description:
              "A smoothie bowl made with almond milk, fruits, and topped with almond slices.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Almond Oatmeal",
            description:
              "A warm bowl of oatmeal topped with sliced almonds and fresh fruit.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Almond-Coconut Energy Balls",
            description:
              "No-bake energy balls made with almonds and coconut for a quick snack.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Almond-Cashew Butter Smoothie",
            description:
              "A creamy and nutty smoothie made with almond and cashew butter.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 2,
        star: "⭐⭐⭐⭐⭐",
        name: "Broccoli",
        description: "Broccoli a healthy diet.",
        image: require("../assets/featured/healthy/broccoli.jpg"),
        dishes: [
          {
            id: 1,
            name: "Broccoli Salad",
            description:
              "A fresh salad made with steamed broccoli, cranberries, and a light dressing.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Broccoli Stir-Fry",
            description:
              "A flavorful stir-fry with broccoli, bell peppers, and soy sauce.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Broccoli Soup",
            description:
              "A creamy and nutritious broccoli soup perfect for any meal.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Broccoli and Cheese Stuffed Chicken",
            description:
              "Tender chicken breasts stuffed with broccoli and melted cheese.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Roasted Broccoli",
            description:
              "Crispy roasted broccoli seasoned with garlic and olive oil.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Broccoli Quinoa Bowl",
            description:
              "A nutrient-packed quinoa bowl with steamed broccoli and avocado.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Broccoli Frittata",
            description:
              "A savory frittata made with broccoli, eggs, and a sprinkle of cheese.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Broccoli and Sweet Potato Bake",
            description:
              "A healthy casserole with roasted broccoli and sweet potatoes.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Broccoli Pesto Pasta",
            description: "Whole wheat pasta with a fresh broccoli pesto sauce.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Broccoli Smoothie",
            description:
              "A green smoothie made with broccoli, spinach, and a touch of apple for sweetness.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 3,
        star: "⭐⭐⭐⭐⭐",
        name: "Chicken Breast",
        description: "Chicken Breast diet.",
        image: require("../assets/featured/healthy/chicken_breast.jpg"),
        dishes: [
          {
            id: 1,
            name: "Grilled Chicken Breast",
            description:
              "Tender grilled chicken breast served with a side of steamed vegetables.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Chicken Breast Salad",
            description:
              "Sliced chicken breast on a bed of fresh greens with a light vinaigrette.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Baked Chicken Breast with Herbs",
            description:
              "Oven-baked chicken breast seasoned with herbs and a squeeze of lemon.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Chicken Breast Stir Fry",
            description:
              "Sautéed chicken breast with a mix of colorful vegetables and soy sauce.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Chicken Breast with Quinoa",
            description:
              "A nutritious meal of grilled chicken breast served with quinoa and a side of steamed broccoli.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Chicken Breast Tacos",
            description:
              "Shredded chicken breast served in soft tortillas with fresh salsa and avocado.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Chicken Breast Wrap",
            description:
              "A whole wheat wrap filled with grilled chicken, lettuce, and a light yogurt dressing.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Chicken Breast and Sweet Potato",
            description:
              "A healthy meal with roasted chicken breast and sweet potatoes.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Chicken Breast with Avocado",
            description:
              "Grilled chicken breast served with fresh avocado slices and a lemon drizzle.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Chicken Breast Soup",
            description:
              "A hearty chicken breast soup with carrots, celery, and a light broth.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 4,
        star: "⭐⭐⭐⭐⭐",
        name: "Chimichurri Yogurt",
        description: "Chimichurri Yogurt diet.",
        image: require("../assets/featured/healthy/chimichurri_yogurt.jpg"),
        dishes: [
          {
            id: 1,
            name: "Chimichurri Yogurt Dip",
            description:
              "A fresh and creamy chimichurri yogurt dip, perfect for veggies or pita.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Chimichurri Yogurt Salad Dressing",
            description:
              "A tangy chimichurri yogurt dressing for your favorite salad greens.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Chimichurri Yogurt Bowl",
            description:
              "A wholesome bowl with chimichurri yogurt, quinoa, and grilled veggies.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Chimichurri Yogurt Chicken",
            description:
              "Tender grilled chicken breast served with chimichurri yogurt sauce.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Chimichurri Yogurt Tacos",
            description:
              "Soft tortillas filled with chimichurri yogurt, grilled chicken, and fresh salsa.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Chimichurri Yogurt Wrap",
            description:
              "A healthy wrap with chimichurri yogurt, grilled veggies, and quinoa.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Chimichurri Yogurt Smoothie",
            description:
              "A refreshing smoothie with chimichurri yogurt, mint, and cucumber.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Chimichurri Yogurt Marinade",
            description:
              "A zesty marinade with chimichurri yogurt for your favorite meats or veggies.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Chimichurri Yogurt with Grilled Vegetables",
            description:
              "Grilled seasonal vegetables served with chimichurri yogurt for a healthy side dish.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Chimichurri Yogurt Veggie Bowl",
            description:
              "A healthy veggie bowl topped with chimichurri yogurt and sunflower seeds.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 5,
        star: "⭐⭐⭐⭐⭐",
        name: "Dinn Red Fettuccine",
        description: "Dinn Red Fettuccine diet.",
        image: require("../assets/featured/healthy/Dinn_red_fettuccine.jpg"),
        dishes: [
          {
            id: 1,
            name: "Red Fettuccine with Pesto",
            description:
              "A healthy twist on classic fettuccine with pesto sauce and roasted vegetables.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Red Fettuccine Salad",
            description:
              "A fresh and light salad with red fettuccine, cherry tomatoes, and arugula.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Red Fettuccine with Grilled Chicken",
            description:
              "Grilled chicken breast paired with red fettuccine in a creamy, healthy sauce.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Red Fettuccine Primavera",
            description:
              "Red fettuccine served with a mix of fresh, sautéed seasonal vegetables.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Red Fettuccine with Tomato Basil Sauce",
            description:
              "A light tomato basil sauce over red fettuccine, a healthy classic Italian dish.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Red Fettuccine with Tofu",
            description:
              "A plant-based version of red fettuccine with crispy tofu and a light soy sauce.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Red Fettuccine with Spinach",
            description:
              "Red fettuccine tossed with sautéed spinach and garlic for a simple yet healthy dish.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Red Fettuccine with Lemon Garlic Shrimp",
            description:
              "Red fettuccine with succulent shrimp in a lemon garlic sauce.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Red Fettuccine with Broccoli",
            description:
              "Red fettuccine served with broccoli and a light olive oil dressing.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Red Fettuccine Veggie Stir Fry",
            description:
              "A colorful stir fry with red fettuccine and a variety of fresh vegetables.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 6,
        star: "⭐⭐⭐⭐⭐",
        name: "Salmon",
        description: "Salmon healthy diet.",
        image: require("../assets/featured/healthy/salmon.jpg"),
        dishes: [
          {
            id: 1,
            name: "Grilled Salmon with Asparagus",
            description:
              "Perfectly grilled salmon served with fresh, sautéed asparagus.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Salmon Salad",
            description:
              "A light salad with salmon fillets, mixed greens, and a citrus dressing.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Baked Salmon with Vegetables",
            description:
              "Baked salmon served with a variety of roasted vegetables for a nutritious meal.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Salmon with Avocado Salsa",
            description:
              "Grilled salmon topped with a refreshing avocado salsa.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Salmon with Quinoa",
            description:
              "A healthy combination of grilled salmon and quinoa, packed with nutrients.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Salmon Tacos",
            description:
              "Tasty tacos filled with grilled salmon, topped with fresh salsa and avocado.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Salmon with Spinach",
            description:
              "Pan-seared salmon served with sautéed spinach and garlic.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Salmon Poke Bowl",
            description:
              "A Hawaiian-style poke bowl with salmon, rice, and fresh vegetables.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Smoked Salmon on Toast",
            description:
              "Delicious smoked salmon served on whole grain toast with cream cheese.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Salmon and Broccoli",
            description:
              "A simple yet delicious pairing of grilled salmon with steamed broccoli.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 7,
        star: "⭐⭐⭐⭐⭐",
        name: "Sardines",
        description: "Sardines healthy diet.",
        image: require("../assets/featured/healthy/sardines.jpg"),
        dishes: [
          {
            id: 1,
            name: "Grilled Sardines",
            description:
              "Fresh sardines grilled to perfection, served with lemon and herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Sardine Salad",
            description:
              "A healthy salad with canned sardines, mixed greens, and olive oil dressing.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Sardines on Toast",
            description:
              "Crispy toast topped with sardines, garlic, and fresh tomatoes.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Sardine Pasta",
            description:
              "Pasta with sardines, olives, capers, and a light tomato sauce.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Sardines with Couscous",
            description:
              "A nutritious combination of sardines served with fluffy couscous and vegetables.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Sardine Tacos",
            description:
              "Delicious tacos filled with sardines, avocado, and fresh salsa.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Sardines and Veggies",
            description:
              "A simple and healthy dish with sardines and sautéed vegetables.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Sardine Sandwich",
            description:
              "A healthy sandwich with sardines, lettuce, and a light mayo spread.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Sardines with Quinoa",
            description:
              "Sardines served over a bed of quinoa, topped with fresh herbs.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Sardine Casserole",
            description:
              "A flavorful casserole with sardines, potatoes, and a crunchy topping.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 8,
        star: "⭐⭐⭐⭐⭐",
        name: "Sweet Potatoes",
        description: "Sweet Potatoes healthy diet.",
        image: require("../assets/featured/healthy/sweet_potatoes.jpg"),
        dishes: [
          {
            id: 1,
            name: "Baked Sweet Potatoes",
            description:
              "Sweet potatoes baked to perfection, seasoned with olive oil and herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Sweet Potato Fries",
            description:
              "Crispy baked sweet potato fries, lightly seasoned with salt and pepper.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Sweet Potato Mash",
            description:
              "Creamy mashed sweet potatoes with a touch of cinnamon and butter.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Sweet Potato Salad",
            description:
              "A light and healthy salad with roasted sweet potatoes, greens, and a vinaigrette dressing.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Sweet Potato Soup",
            description:
              "A velvety smooth soup made with roasted sweet potatoes, garlic, and herbs.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Stuffed Sweet Potatoes",
            description:
              "Sweet potatoes stuffed with black beans, avocado, and a dollop of sour cream.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Sweet Potato Quinoa Bowl",
            description:
              "A nutritious bowl of roasted sweet potatoes, quinoa, and vegetables.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Sweet Potato Tacos",
            description:
              "Tacos filled with roasted sweet potatoes, black beans, and fresh salsa.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Sweet Potato Casserole",
            description:
              "A comforting casserole with sweet potatoes, marshmallows, and a crunchy topping.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Sweet Potato and Chickpea Stew",
            description:
              "A hearty stew made with sweet potatoes, chickpeas, and warming spices.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 9,
        star: "⭐⭐⭐⭐⭐",
        name: "Sweet Potatoes",
        description: "Sweet Potatoes healthy diet.",
        image: require("../assets/featured/healthy/watermelon_juice.jpg"),
        dishes: [
          {
            id: 1,
            name: "Baked Sweet Potatoes",
            description:
              "Sweet potatoes baked to perfection, seasoned with olive oil and herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Sweet Potato Fries",
            description:
              "Crispy baked sweet potato fries, lightly seasoned with salt and pepper.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Sweet Potato Mash",
            description:
              "Creamy mashed sweet potatoes with a touch of cinnamon and butter.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Sweet Potato Salad",
            description:
              "A light and healthy salad with roasted sweet potatoes, greens, and a vinaigrette dressing.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Sweet Potato Soup",
            description:
              "A velvety smooth soup made with roasted sweet potatoes, garlic, and herbs.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Stuffed Sweet Potatoes",
            description:
              "Sweet potatoes stuffed with black beans, avocado, and a dollop of sour cream.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Sweet Potato Quinoa Bowl",
            description:
              "A nutritious bowl of roasted sweet potatoes, quinoa, and vegetables.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Sweet Potato Tacos",
            description:
              "Tacos filled with roasted sweet potatoes, black beans, and fresh salsa.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Sweet Potato Casserole",
            description:
              "A comforting casserole with sweet potatoes, marshmallows, and a crunchy topping.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Sweet Potato and Chickpea Stew",
            description:
              "A hearty stew made with sweet potatoes, chickpeas, and warming spices.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
      {
        id: 10,
        star: "⭐⭐⭐⭐⭐",
        name: "Wheat Germ",
        description: "Wheat Germ healthy diet.",
        image: require("../assets/featured/healthy/wheat_germ.jpg"),
        dishes: [
          {
            id: 1,
            name: "Wheat Germ Porridge",
            description:
              "A warm, nutritious porridge made with wheat germ, milk, and honey.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 2,
            name: "Wheat Germ Smoothie",
            description:
              "A smoothie made with wheat germ, banana, and almond milk.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"),
            quantity: 0,
          },
          {
            id: 3,
            name: "Wheat Germ Muffins",
            description:
              "Fluffy muffins made with wheat germ for an extra boost of fiber and nutrients.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"),
            quantity: 0,
          },
          {
            id: 4,
            name: "Wheat Germ Energy Bars",
            description:
              "Homemade energy bars made with wheat germ, oats, and dried fruit.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"),
            quantity: 0,
          },
          {
            id: 5,
            name: "Wheat Germ Pancakes",
            description:
              "Fluffy pancakes made with a mix of wheat germ and whole wheat flour.",
            image: require("../assets/featured/spicy/somtum.jpg"),
            quantity: 0,
          },
          {
            id: 6,
            name: "Wheat Germ Salad Topping",
            description:
              "Toasted wheat germ sprinkled over a fresh salad for added crunch and nutrition.",
            image: require("../assets/featured/spicy/soup.jpg"),
            quantity: 0,
          },
          {
            id: 7,
            name: "Wheat Germ Granola",
            description:
              "A healthy homemade granola with wheat germ, oats, and nuts.",
            image: require("../assets/featured/spicy/spicy.jpg"),
            quantity: 0,
          },
          {
            id: 8,
            name: "Wheat Germ Bread",
            description:
              "Whole wheat bread enriched with wheat germ for a hearty texture and flavor.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
            quantity: 0,
          },
          {
            id: 9,
            name: "Wheat Germ Yogurt Parfait",
            description:
              "A layered parfait with yogurt, wheat germ, and fresh fruit.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),
            quantity: 0,
          },
          {
            id: 10,
            name: "Wheat Germ Cookies",
            description:
              "Delicious cookies made with wheat germ, oats, and dark chocolate chips.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"),
            quantity: 0,
          },
        ],
      },
    ],
  },
  {
    id: 7,
    description: "Lorem ipsum dolor sit amet consectetur.",
    tittle: "Savory & Crunchy",
    image: require("../assets/featured/cheesy/Ajaruli khachapuri.jpg"),
    content: [
      {
        id: 1,
        star: "⭐⭐⭐⭐⭐",
        name: "Cheddar Delight",
        description: "Ajaruli khachapuri cheesy feast",
        image: require("../assets/featured/cheesy/Ajaruli khachapuri.jpg"),
        dishes: [
          {
            id: 1,
            name: "Classic Mac and Cheese",
            price: "9.99",
            description:
              "Creamy cheese sauce over tender macaroni, baked with a crispy topping.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheddar Jalapeño Burger",
            price: "12.50",
            description:
              "Juicy beef patty with melted cheddar and spicy jalapeños on a toasted bun.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese Fondue",
            price: "15.75",
            description:
              "Melted Swiss and cheddar cheese served with bread cubes, vegetables, and fruit.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 4,
            name: "Cheese Stuffed Mushrooms",
            price: "8.99",
            description:
              "Mushrooms filled with a rich blend of cheeses and baked to perfection.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheddar & Bacon Potato Skins",
            price: "10.25",
            description:
              "Crispy potato skins filled with melted cheddar, crispy bacon, and green onions.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 6,
            name: "Three-Cheese Pizza",
            price: "14.00",
            description:
              "A blend of mozzarella, cheddar, and parmesan cheeses, topped with a rich tomato sauce.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheddar Broccoli Soup",
            price: "7.99",
            description:
              "A creamy, comforting soup filled with cheddar cheese and tender broccoli.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese-stuffed Chicken Breast",
            price: "18.25",
            description:
              "Chicken breast stuffed with a melty blend of cheddar and mozzarella, served with sides.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 9,
            name: "Grilled Cheese Sandwich",
            price: "6.50",
            description:
              "Golden, buttery bread with melted cheddar cheese served warm.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheddar Cheese Fries",
            price: "8.99",
            description:
              "Crispy fries smothered in melted cheddar cheese and topped with sour cream.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0,
          },
        ],
      },
      {
        id: 2,
        star: "⭐⭐⭐⭐",
        name: "Cheese Feast",
        description: "Banitsa sas sirene cheesy feast",
        image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"),
        dishes: [
          {
            id: 1,
            name: "Banitsa",
            price: "7.50",
            description:
              "Traditional Bulgarian pastry filled with feta cheese and egg, baked until golden.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese and Spinach Pie",
            price: "9.00",
            description:
              "A flaky pie filled with spinach and a rich blend of cheeses.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 3,
            name: "Fried Cheese Balls",
            price: "6.50",
            description:
              "Golden, crispy fried cheese balls with a gooey, cheesy center.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 4,
            name: "Grilled Halloumi",
            price: "10.25",
            description:
              "Grilled Halloumi cheese, served with fresh vegetables and a lemon drizzle.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese-stuffed Pastry",
            price: "8.75",
            description:
              "Flaky pastry filled with rich cheese, baked to a perfect golden crisp.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 6,
            name: "Cheese and Tomato Tart",
            price: "12.00",
            description:
              "A savory tart with cheese and fresh tomatoes on a crisp pastry base.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheese & Bacon Croissant",
            price: "5.99",
            description:
              "Flaky croissant filled with melted cheese and crispy bacon.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 8,
            name: "Baked Macaroni with Cheese",
            price: "11.50",
            description:
              "Baked macaroni in a cheesy, creamy sauce, topped with a golden crust.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 9,
            name: "Cheese and Mushroom Quiche",
            price: "9.99",
            description:
              "A savory quiche filled with a blend of cheese, mushrooms, and herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheddar & Cheese Nachos",
            price: "8.00",
            description:
              "Crispy nachos smothered in melted cheddar cheese, jalapeños, and sour cream.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0,
          },
        ],
      },
      {
        id: 3,
        star: "⭐⭐⭐",
        name: "Oak & Ember",
        description: "Burek sa sirom cheesy feast",
        image: require("../assets/featured/cheesy/Burek_sa_sirom.jpg"),
        dishes: [
          {
            id: 1,
            name: "Burek sa Sirom",
            price: "7.00",
            description:
              "A savory pastry filled with creamy cheese, baked to a golden crisp.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese-filled Doughnuts",
            price: "5.99",
            description:
              "Soft, fried doughnuts stuffed with a sweet and savory cheese filling.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese Pizza",
            price: "10.50",
            description:
              "Classic pizza topped with a generous layer of mozzarella and cheddar cheese.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 4,
            name: "Cheese-Stuffed Zucchini",
            price: "8.25",
            description:
              "Zucchini stuffed with a blend of cheeses, herbs, and spices, baked to perfection.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese and Ham Croissant",
            price: "6.75",
            description:
              "A buttery croissant filled with melted cheese and savory ham.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 6,
            name: "Spinach and Cheese Stuffed Bread",
            price: "9.50",
            description:
              "Fluffy bread stuffed with spinach and a mix of cheeses, baked to golden perfection.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheese-Stuffed Peppers",
            price: "7.75",
            description:
              "Bell peppers stuffed with a blend of cheeses and herbs, then roasted.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese and Bacon Stuffed Muffins",
            price: "6.25",
            description:
              "Savory muffins packed with crispy bacon and melted cheese.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 9,
            name: "Four-Cheese Lasagna",
            price: "12.50",
            description:
              "Layers of pasta, rich marinara sauce, and a mix of four delicious cheeses.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese & Herb Focaccia",
            price: "7.00",
            description:
              "Fluffy Italian bread topped with melted cheese and fresh herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
        ],
      },
      {
        id: 4,
        star: "⭐⭐⭐⭐",
        name: "Velvet Vine",
        description: "Cacio pepe cheesy feast",
        image: require("../assets/featured/cheesy/Cacio_pepe.jpg"),

        dishes: [
          {
            id: 1,
            name: "Cacio e Pepe",
            price: "11.00",
            description:
              "A classic Roman pasta dish made with Pecorino Romano cheese and black pepper.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese-Stuffed Ravioli",
            price: "12.50",
            description:
              "Delicate ravioli stuffed with a rich cheese filling, served with a light butter sauce.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese Fondue",
            price: "15.00",
            description:
              "Melted Gruyère and Emmental cheese served with bread cubes, vegetables, and fruits for dipping.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 4,
            name: "Mozzarella Sticks",
            price: "8.00",
            description:
              "Golden-fried mozzarella sticks served with marinara sauce for dipping.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese Croquettes",
            price: "7.50",
            description:
              "Crispy, golden croquettes filled with gooey cheese and herbs.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 6,
            name: "Mac and Cheese",
            price: "9.75",
            description:
              "A creamy, cheesy pasta dish made with elbow macaroni and a blend of cheeses.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheese & Spinach Cannelloni",
            price: "10.50",
            description:
              "Pasta tubes stuffed with a cheese and spinach filling, baked in marinara sauce.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese-Stuffed Chicken Breast",
            price: "14.00",
            description:
              "Chicken breast stuffed with melted cheese and spinach, then roasted.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 9,
            name: "Grilled Cheese Sandwich",
            price: "6.50",
            description:
              "Toasted sandwich with melted cheddar cheese, served with tomato soup.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese and Herb Flatbread",
            price: "7.00",
            description:
              "A crispy flatbread topped with a blend of cheeses and aromatic herbs.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0,
          },
        ],
      },
      {
        id: 5,
        star: "⭐⭐⭐⭐⭐",
        name: "Willow & Pine",
        description: "Indulge in a cheesy feast",
        image: require("../assets/featured/cheesy/cheesy.jpg"),
        dishes: [
          {
            id: 1,
            name: "Four Cheese Pizza",
            price: "14.00",
            description:
              "A delicious pizza topped with mozzarella, cheddar, parmesan, and blue cheese.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheddar Biscuits",
            price: "6.50",
            description:
              "Fluffy, cheesy biscuits served warm with a buttery glaze.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese Quesadillas",
            price: "9.00",
            description:
              "Flour tortillas filled with melted cheese and served with salsa and sour cream.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 4,
            name: "Cheese Gnocchi",
            price: "12.00",
            description:
              "Soft, pillowy gnocchi served with a rich and creamy cheese sauce.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese and Mushroom Tart",
            price: "11.50",
            description:
              "A savory tart filled with mushrooms and melted cheese in a flaky crust.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 6,
            name: "Spinach and Cheese Stuffed Bread",
            price: "10.00",
            description:
              "Fresh bread stuffed with spinach and a blend of melted cheese.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 7,
            name: "Baked Brie with Jam",
            price: "13.00",
            description:
              "Creamy baked Brie topped with sweet fruit jam, served with crackers.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese and Garlic Bread",
            price: "7.00",
            description: "Garlic bread topped with melted mozzarella cheese.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 9,
            name: "Cheese Ravioli",
            price: "11.50",
            description:
              "Pasta filled with a delicious cheese mixture, served in a rich marinara sauce.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese and Chive Scones",
            price: "8.50",
            description:
              "Fluffy scones with cheese and fresh chives, perfect for a light snack.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0,
          },
        ],
      },
      {
        id: 6,
        star: "⭐⭐⭐⭐⭐",
        name: "Sunset Grille",
        description: "Fondue Jurassienne in a cheesy feast",
        image: require("../assets/featured/cheesy/Fondue_jurassienne.jpg"),
        dishes: [
          {
            id: 1,
            name: "Fondue Jurassienne",
            price: "18.00",
            description:
              "A rich, creamy Swiss cheese fondue served with bread and vegetables for dipping.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 2,
            name: "Grilled Cheese Sandwich",
            price: "7.50",
            description:
              "Golden brown, buttery bread stuffed with melted cheddar and mozzarella cheese.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese Croquettes",
            price: "8.00",
            description:
              "Golden fried croquettes filled with a delicious blend of cheeses and herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 4,
            name: "Cheese Stuffed Mushrooms",
            price: "9.50",
            description:
              "Mushrooms stuffed with a creamy mixture of cheese and spices, baked to perfection.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese Soufflé",
            price: "12.00",
            description:
              "Light and fluffy soufflé made with a blend of melted cheeses.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 6,
            name: "Mac and Cheese",
            price: "10.50",
            description:
              "Classic mac and cheese with a rich, cheesy sauce and crispy topping.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheese-Stuffed Chicken Breast",
            price: "14.00",
            description:
              "Chicken breast stuffed with melted mozzarella and parmesan cheese, baked to golden perfection.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese Fondue Pot",
            price: "22.00",
            description:
              "Melted cheese served in a fondue pot with an assortment of dippables like bread, fruits, and meats.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 9,
            name: "Cheese and Potato Gratin",
            price: "11.00",
            description:
              "Layers of creamy mashed potatoes and cheese, baked to a golden brown.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese and Herb Pizza",
            price: "13.50",
            description:
              "A pizza topped with a mixture of cheeses and fresh herbs, baked to perfection.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0,
          },
        ],
      },
      {
        id: 7,
        star: "⭐⭐⭐⭐⭐",
        name: "Guruli Khachapuri",
        description: "Guruli khachapuri feast",
        image: require("../assets/featured/cheesy/Guruli_khachapuri.jpg"),
        dishes: [
          {
            id: 1,
            name: "Guruli Khachapuri",
            price: "15.00",
            description:
              "A traditional Georgian cheesy bread filled with a blend of cheeses, eggs, and butter.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 2,
            name: "Khachapuri Adjaruli",
            price: "13.50",
            description:
              "Boat-shaped bread filled with cheese, topped with a raw egg and butter.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 3,
            name: "Cheese-filled Buns",
            price: "6.50",
            description:
              "Soft buns filled with a delicious blend of Georgian cheese.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 4,
            name: "Spinach and Cheese Pie",
            price: "9.00",
            description:
              "Flaky pastry filled with spinach and a mixture of Georgian cheeses.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 5,
            name: "Cheese-filled Phyllo Pastry",
            price: "8.00",
            description:
              "Crispy phyllo dough wrapped around melted cheese and herbs.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 6,
            name: "Satsivi with Cheese",
            price: "14.00",
            description:
              "A rich, spiced chicken dish with cheese and walnut sauce.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 7,
            name: "Kachapuri with Mushrooms",
            price: "12.00",
            description:
              "A cheesy khachapuri filled with sautéed mushrooms and herbs.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese Platter",
            price: "18.00",
            description:
              "An assortment of Georgian cheeses served with bread and fresh fruits.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 9,
            name: "Cheese-stuffed Pide",
            price: "10.50",
            description:
              "Turkish-style boat-shaped bread filled with melted cheese and a variety of spices.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese and Herb Fritters",
            price: "7.00",
            description:
              "Crispy fritters filled with a blend of cheeses and fresh herbs.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0,
          },
        ],
      },
      {
        id: 8,
        star: "⭐⭐⭐⭐⭐",
        name: "Kasspatzln",
        description: "Cheesy Kasspatzln feast",
        image: require("../assets/featured/cheesy/Kasspatzln.jpg"),
        dishes: [
          {
            id: 1,
            name: "Kasspatzln",
            price: "16.00",
            description:
              "A traditional Austrian dish of egg noodles, melted cheese, and crispy onions.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 2,
            name: "Cheese Spaetzle",
            price: "14.50",
            description:
              "Soft egg noodles mixed with rich melted cheese and sautéed onions.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 3,
            name: "Truffle Cheese Spaetzle",
            price: "18.00",
            description:
              "A luxurious version of the classic dish with truffle oil and truffle cheese.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 4,
            name: "Gnocchi with Cheese",
            price: "15.00",
            description:
              "Soft gnocchi tossed in a creamy cheese sauce and topped with fresh herbs.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 5,
            name: "Swiss Fondue",
            price: "20.00",
            description:
              "Melted Swiss cheese served with bread cubes, vegetables, and potatoes for dipping.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 6,
            name: "Cheese Rösti",
            price: "13.00",
            description:
              "Crispy Swiss-style potato pancakes topped with melted cheese.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 7,
            name: "Cheese-stuffed Schnitzel",
            price: "17.50",
            description:
              "A breaded schnitzel filled with melted cheese, served with a creamy sauce.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 8,
            name: "Cheese and Herb Strudel",
            price: "12.50",
            description:
              "Flaky pastry filled with a blend of cheeses and fresh herbs.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 9,
            name: "Cheese and Potato Gratin",
            price: "14.00",
            description:
              "Sliced potatoes baked in a creamy cheese sauce, with a crispy top.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0,
          },
          {
            id: 10,
            name: "Cheese Croquettes",
            price: "8.50",
            description: "Golden, crispy croquettes filled with creamy cheese.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0,
          },
        ],
      },
      {
        id: 9,
        star: "⭐⭐⭐⭐⭐",
        name: "Sabroso Spice",
        description: "Provoleta Kasspatzln feast",
        image: require("../assets/featured/cheesy/Provoleta.jpg"),
        dishes: [
          {
            id: 1,
            name: "Provoleta",
            price: "12.00",
            description:
              "A deliciously melted provolone cheese, grilled to perfection and served with fresh herbs.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese Empanadas",
            price: "10.00",
            description:
              "Crispy, golden empanadas stuffed with a mix of cheese and spices.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Spicy Cheese Quesadillas",
            price: "11.50",
            description:
              "Flour tortillas filled with melted cheese and a spicy jalapeño kick.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Grilled Cheese Sandwich",
            price: "9.00",
            description:
              "Classic comfort food, grilled to perfection with gooey melted cheese inside.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Cheese Nachos",
            price: "8.50",
            description:
              "Crispy tortilla chips smothered in spicy cheese sauce, perfect for sharing.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Chili Cheese Fries",
            price: "7.00",
            description:
              "Crispy fries topped with a hearty chili and melted cheese.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Mac and Cheese",
            price: "13.00",
            description:
              "Creamy pasta in a rich cheese sauce, baked to golden perfection.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Cheese-stuffed Peppers",
            price: "14.50",
            description:
              "Bell peppers stuffed with a blend of cheeses and spices, then baked.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Spicy Cheese Fondue",
            price: "18.00",
            description:
              "A spicy, melted cheese fondue served with bread and vegetables for dipping.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Cheese and Chorizo Paella",
            price: "16.00",
            description:
              "A rich paella dish with melted cheese and spicy chorizo sausage.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 10,
        star: "⭐⭐⭐⭐",
        name: "Quesadilla",
        description: "Quesadilla cheesy feast",
        image: require("../assets/featured/cheesy/Quesadilla.jpg"),
        dishes: [
          {
            name: "Chicken Quesadilla",
            price: "12.00",
            description:
              "Grilled chicken and melted cheese inside a crispy tortilla, served with salsa.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            name: "Beef Quesadilla",
            price: "13.00",
            description:
              "Seasoned ground beef with cheese wrapped in a tortilla and grilled to perfection.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            name: "Veggie Quesadilla",
            price: "11.50",
            description:
              "A delicious blend of sautéed vegetables and cheese wrapped in a grilled tortilla.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            name: "Cheese Quesadilla",
            price: "9.00",
            description:
              "Melted cheese folded in a soft tortilla, grilled until crispy and golden.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            name: "Spicy Quesadilla",
            price: "11.00",
            description:
              "A cheesy quesadilla with spicy jalapeños and fresh salsa.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            name: "Steak Quesadilla",
            price: "14.00",
            description:
              "Juicy steak with melted cheese wrapped in a tortilla, grilled to crispy perfection.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            name: "Shrimp Quesadilla",
            price: "15.00",
            description:
              "Grilled shrimp with a blend of cheese, wrapped in a tortilla and grilled until crispy.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            name: "BBQ Chicken Quesadilla",
            price: "13.50",
            description:
              "Shredded BBQ chicken with melted cheese inside a grilled tortilla.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            name: "Mushroom Quesadilla",
            price: "10.50",
            description:
              "Sautéed mushrooms with a creamy cheese filling, wrapped in a grilled tortilla.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            name: "Bacon Quesadilla",
            price: "12.50",
            description:
              "Crispy bacon and melted cheese wrapped in a tortilla and grilled to perfection.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 11,
        star: "⭐⭐⭐",
        name: "Yoruba Plate",
        description: "Saganaki cheesy feast",
        image: require("../assets/featured/cheesy/Saganaki.jpg"),
        dishes: [
          {
            id: 1,
            name: "Grilled Saganaki",
            price: "14.00",
            description: "Flaming Greek cheese served with warm pita bread.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese Souvlaki",
            price: "15.50",
            description:
              "Grilled skewers of cheese and vegetables, served with a side of tzatziki sauce.",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Spinach & Feta Saganaki",
            price: "16.00",
            description:
              "Melted cheese with spinach and feta, grilled to perfection and served with pita.",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Cheese and Mushroom Saganaki",
            price: "17.00",
            description:
              "A blend of cheese and mushrooms, grilled to create a gooey and savory delight.",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Saganaki Platter",
            price: "20.00",
            description:
              "A platter of grilled Saganaki cheese served with olives, pita, and roasted vegetables.",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Cheese Baklava",
            price: "8.50",
            description:
              "A sweet and savory dessert with layers of phyllo dough and cheese filling.",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Saganaki with Honey",
            price: "18.00",
            description:
              "Flaming cheese served with a drizzle of honey, creating a sweet-salty combination.",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Kasseri Saganaki",
            price: "16.50",
            description:
              "Grilled Kasseri cheese, perfectly melted and served with warm pita.",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Lamb & Cheese Saganaki",
            price: "19.00",
            description:
              "A unique twist on the traditional Saganaki, featuring tender lamb and melted cheese.",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Herbed Cheese Saganaki",
            price: "15.00",
            description:
              "Grilled cheese infused with herbs like oregano, rosemary, and thyme.",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 12,
        star: "⭐⭐⭐⭐",
        name: "Sirnica",
        description: "Sirnica cheesy feast",
        image: require("../assets/featured/cheesy/Sirnica.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 13,
        star: "⭐⭐⭐⭐⭐",
        name: "Casa de Efo",
        description: "Smažený Sýr cheesy feast",
        image: require("../assets/featured/cheesy/Smažený_sýr.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 14,
        star: "⭐⭐⭐⭐⭐",
        name: "Svrljiški Belmuž",
        description: "Svrljiški Belmuž cheesy feast",
        image: require("../assets/featured/cheesy/Svrljiški_belmuž.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 15,
        star: "⭐⭐⭐⭐⭐",
        name: "Tartiflette",
        description: "Tartiflette lorem cheesy feast",
        image: require("../assets/featured/cheesy/Svrljiški_belmuž.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 16,
        star: "⭐⭐⭐⭐⭐",
        name: "Tequeños",
        description: "Tequeños lorem cheesy feast",
        image: require("../assets/featured/cheesy/Svrljiški_belmuž.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
      {
        id: 17,
        star: "⭐⭐⭐⭐⭐",
        name: "Tiropita",
        description: "Tiropita lorem cheesy feast",
        image: require("../assets/featured/cheesy/Tiropita.jpg"),
        dishes: [
          {
            id: 1,
            name: "Cheddar Delight",
            price: "14.99",
            description: "Ajaruli khachapuri cheesy feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 2,
            name: "Cheese Feast",
            price: "12.99",
            description: "Banitsa sas sirene cheesy feast",
            image: require("../assets/featured/spicy/penne_allarrabbiata.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 3,
            name: "Oak & Ember",
            price: "16.99",
            description: "Burek sa sirom cheesy feast",
            image: require("../assets/featured/spicy/phaal_curry.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 4,
            name: "Velvet Vine",
            price: "18.99",
            description: "Cacio pepe cheesy feast",
            image: require("../assets/featured/spicy/sichuan_hot_pot.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 5,
            name: "Willow & Pine",
            price: "20.99",
            description: "Indulge in a cheesy feast",
            image: require("../assets/featured/spicy/somtum.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 6,
            name: "Sunset Grille",
            price: "22.99",
            description: "Fondue Jurassienne in a cheesy feast",
            image: require("../assets/featured/spicy/soup.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 7,
            name: "Guruli Khachapuri",
            price: "19.99",
            description: "Guruli khachapuri feast",
            image: require("../assets/featured/spicy/spicy.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 8,
            name: "Kasspatzln",
            price: "17.99",
            description: "Cheesy Kasspatzln feast",
            image: require("../assets/featured/cheesy/Banitsa_sas_sirene.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 9,
            name: "Sabroso Spice",
            price: "15.99",
            description: "Provoleta Kasspatzln feast",
            image: require("../assets/featured/cheesy/Cacio_pepe.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
          {
            id: 10,
            name: "Quesadilla",
            price: "13.99",
            description: "Quesadilla cheesy feast",
            image: require("../assets/featured/sweets/Java_Muffins.jpg"), // Assigned image
            quantity: 0, // Added quantity field
          },
        ],
      },
    ],
  },
];
