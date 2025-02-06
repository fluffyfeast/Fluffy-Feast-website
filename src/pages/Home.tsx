import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { useTranslation } from "react-i18next";

export function Home() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section with Mission Statement */}
      <div className="bg-indigo-600 -mt-29 mb-12 py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t("home.welcome")}</h1>
          <p className="text-xl mb-8">{t("home.mission")}</p>
        </div>
      </div>
      {/* Quick Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <Link
          to="/therapy/all"
          className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            {t("home.foodTherapy")}
          </h2>
          <p className="text-gray-600">{t("home.therapyDescription")}</p>
        </Link>
        <Link
          to="/fresh-snacks"
          className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            {t("home.petSnacks")}
          </h2>
          <p className="text-gray-600">{t("home.snacksDescription")}</p>
        </Link>
      </div>
      {/* Featured Products */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        {t("home.featuredProducts")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
