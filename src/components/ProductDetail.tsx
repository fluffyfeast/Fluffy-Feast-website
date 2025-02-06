import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useTranslation } from "react-i18next";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-24 pb-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          {t("product.notFound")}
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
        >
          {t("common.goBack")}
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    // Add your cart logic here
    console.log(`Adding ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-indigo-600 hover:text-indigo-800 transition-colors flex items-center"
        >
          ← {t("common.goBack")}
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images Section */}
          <div className="space-y-4">
            <img
              src={mainImage || product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-md object-cover aspect-square"
            />
            {product.detailImages && (
              <div className="grid grid-cols-4 gap-4">
                <div
                  onClick={() => setMainImage(product.image)}
                  className={`cursor-pointer rounded-lg overflow-hidden ${
                    !mainImage ? "ring-2 ring-indigo-600" : ""
                  }`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover hover:opacity-75 transition-opacity"
                  />
                </div>
                {product.detailImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setMainImage(image)}
                    className={`cursor-pointer rounded-lg overflow-hidden ${
                      mainImage === image ? "ring-2 ring-indigo-600" : ""
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} detail ${index + 1}`}
                      className="w-full aspect-square object-cover hover:opacity-75 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div>
              <div className="text-sm text-indigo-600 mb-1">
                {t(`category.${product.category}`)}
              </div>
              <h1 className="text-3xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="mt-2 text-2xl font-bold text-indigo-600">
                ${product.price.toFixed(2)}
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="py-4 border-t border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 border-r hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 border-l hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  {t("product.addToCart")}
                </button>
              </div>
            </div>

            {/* Benefits Section */}
            {product.benefits && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("product.benefits")}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Description Section */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {t("product.description")}
              </h2>
              <p className="text-gray-600 whitespace-pre-line">
                {product.fullDescription || product.description}
              </p>
            </div>

            {/* Usage Instructions */}
            {product.usage && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {t("product.usage")}
                </h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {product.usage}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
