export const products = [
  {
    id: 1,
    name: "Immunity Boost Formula",
    price: 20.00,
    discount:20.00,
    image: "..//src/assets/product1.jpeg",
    category: "therapy",
    description: "Ingredients 🟢 Cod, Beef, Tomato, Carrot, Cordyceps Flower, Lemon",
    detailImages: [
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=300"
    ],
    fullDescription: "Our Immunity Boost Formula is specially crafted to support your dog's immune system. Made with premium ingredients including antioxidants, vitamins, and minerals essential for maintaining optimal health.",
    benefits: [
      "✔️ Multi-Vitamin and Mineral Nutrition ",
      " ✔️ Strengthens the immune system to fight infections and diseases",
      " ✔️ Improves stamina and endurance",
      " ✔️ For eye health",
      " ✔️ Promotes healthy skin and hair"
    ],
    usage: "Feed according to your dog's weight and age. See feeding guide on package for detailed instructions."
  },
  {
    id: 2,
    name: "Eye Care Formula",
    price: 20,
    image: "..//src/assets/product2.jpeg",
    category: "therapy",
    description: "Ingredients 🟢 pumpkin, carrots, beef liver, goji berries, tomatoes, flax seeds, mulberries, sweet potatoes",
    detailImages: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=300"
    ],
    fullDescription: "Our Gourmet Cat Food is made with the finest ingredients to satisfy even the most discerning feline palates. Each serving is packed with high-quality proteins and essential nutrients.",
    benefits: [
      "Premium protein sources",
      "Balanced nutrition",
      "Promotes healthy digestion",
      "Supports urinary health"
    ],
    usage: "Serve at room temperature. Adult cats typically need 2-3 servings per day."
  },
  {
    id: 3,
    name: "Gastrointestinal Health Formula",
    price: 20,
    image: "..//src/assets/product3.jpeg",
    category: "therapy",
    description: "Ingredients 🟢 Pumpkin, Beef Liver, Purple Licorice, Burdock Root, Tomato, Chinese yam",
    detailImages: [
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&q=80&w=300"
    ],
    fullDescription: "Our Gourmet Cat Food is made with the finest ingredients to satisfy even the most discerning feline palates. Each serving is packed with high-quality proteins and essential nutrients.",
    benefits: [
      "Premium protein sources",
      "Balanced nutrition",
      "Promotes healthy digestion",
      "Supports urinary health"
    ],
    usage: "Serve at room temperature. Adult cats typically need 2-3 servings per day."
  },
  // ... similar updates for other products
] as const;