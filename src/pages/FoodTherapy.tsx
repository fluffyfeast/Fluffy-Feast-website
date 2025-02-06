import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import type { Product } from '../types';

interface FoodTherapyProps {
  onAddToCart?: (product: Product) => void;
}

export function FoodTherapy({ onAddToCart }: FoodTherapyProps) {
  const { category } = useParams();
  
  const categories = [
    { id: 'all', name: 'All Food Therapy' },
    { id: 'eyes', name: 'Eye Disease' },
    { id: 'kidney', name: 'Kidney Disease' },
    { id: 'heart', name: 'Heart Disease' },
    { id: 'skin', name: 'Skin & Hair Problems' },
    { id: 'respiratory', name: 'Asthma & Throat Disease' }
  ];

  const currentCategory = categories.find(c => c.id === category) || categories[0];

  // Filter products based on category (mock filter - you'll need to implement real filtering)
  const filteredProducts = products;

  return (
    <div className="pt-24 pb-16">
      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <div className="space-y-2">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={`/therapy/${cat.id}`}
                  className={`block px-4 py-2 rounded-md ${
                    cat.id === category
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-indigo-50'
                  }`}
                >
                  {cat.name}
                </Link>
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
              
              <div>
                <h3 className="font-medium mb-2">Brand</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Premium Care</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Natural Balance</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2">Healthy Choice</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {currentCategory.name}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}