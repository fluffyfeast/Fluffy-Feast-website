import React from 'react';
import { ProductCard } from '../components/ProductCard';

const categories = [
  { id: 'beds', name: 'Beds & Furniture' },
  { id: 'toys', name: 'Toys' },
  { id: 'grooming', name: 'Grooming Supplies' },
  { id: 'bowls', name: 'Bowls & Feeders' },
  { id: 'carriers', name: 'Carriers & Travel' },
  { id: 'clothing', name: 'Clothing & Accessories' }
];

// Mock products - replace with real data
const products = [
  {
    id: 101,
    name: "Cozy Pet Bed",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&q=80&w=500",
    category: "dog",
    description: "Ultra-comfortable bed for pets"
  },
  // Add more products...
];

export function PetSupplies() {
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
                    <span className="ml-2">Under $25</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">$25 - $50</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Over $50</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Pet Supplies</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map(product => (
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