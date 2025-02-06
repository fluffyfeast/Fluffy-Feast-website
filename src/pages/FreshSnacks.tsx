import React from "react";
import { ProductCard } from "../components/ProductCard";

const categories = [
  { id: "treats", name: "Treats & Biscuits" },
  { id: "chews", name: "Natural Chews" },
  { id: "dental", name: "Dental Treats" },
  { id: "training", name: "Training Treats" },
  { id: "jerky", name: "Jerky & Dried Treats" },
];

// Mock products - replace with real data
const products = [
  {
    id: 201,
    name: "Chicken Breast Jerky",
    price: 8.99,
    image: "..//src/assets/snacks.jpeg",
    category: "therapy",
    description:
      "Ingredients 🟢 Cod, Beef, Tomato, Carrot, Cordyceps Flower, Lemon",
    detailImages: [
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=300",
      "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=300",
    ],
    fullDescription:
      "Our Immunity Boost Formula is specially crafted to support your dog's immune system. Made with premium ingredients including antioxidants, vitamins, and minerals essential for maintaining optimal health.",
    benefits: [
      "✔️ Multi-Vitamin and Mineral Nutrition ",
      " ✔️ Strengthens the immune system to fight infections and diseases",
      " ✔️ Improves stamina and endurance",
      " ✔️ For eye health",
      " ✔️ Promotes healthy skin and hair",
    ],
    usage:
      "Feed according to your dog's weight and age. See feeding guide on package for detailed instructions.",
  },
];

export function FreshSnacks() {
  return (
    <div className="pt-24 pb-16">
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="block w-full px-4 py-2 text-left text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-md"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-4 mt-4">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Price Range</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Under $10</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">$10 - $20</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Over $20</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Fresh Snacks
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => {}}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
