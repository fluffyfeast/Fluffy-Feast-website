import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isTherapyOpen, setIsTherapyOpen] = React.useState(false);
  const { t, i18n } = useTranslation();

  const therapyCategories = [
    { name: t("navbar.foodTherapy"), path: "/therapy/all" },
    { name: "Eye Disease", path: "/therapy/eyes" },
    { name: "Kidney Disease", path: "/therapy/kidney" },
    { name: "Heart Disease", path: "/therapy/heart" },
    { name: "Skin & Hair Problems", path: "/therapy/skin" },
    { name: "Asthma & Throat Disease", path: "/therapy/respiratory" },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div>
            <Link
              to="/"
              className="text-lg font-medium text-gray-900 tracking-tight"
            >
              {t("navbar.logo")}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsTherapyOpen(!isTherapyOpen)}
                className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none gap-1 transition"
              >
                {t("navbar.foodTherapy")}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isTherapyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isTherapyOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200">
                  <div className="py-2">
                    {therapyCategories.map((category) => (
                      <Link
                        key={category.path}
                        to={category.path}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition"
                        onClick={() => setIsTherapyOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/fresh-snacks"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              {t("navbar.freshSnacks")}
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              {t("navbar.aboutUs")}
            </Link>

            {/* Language Switcher */}
            <div className="flex space-x-2">
              <button
                onClick={() => changeLanguage("en")}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("zh-CN")}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                简
              </button>
              <button
                onClick={() => changeLanguage("zh-TW")}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                繁
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-500 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 py-2 space-y-2">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <button
              onClick={() => setIsTherapyOpen(!isTherapyOpen)}
              className="w-full flex items-center justify-between text-left text-gray-700 hover:text-blue-500 transition"
            >
              {t("navbar.foodTherapy")}
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  isTherapyOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {isTherapyOpen && (
              <div className="ml-4 space-y-2">
                {therapyCategories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="block text-gray-600 hover:text-blue-500 transition"
                    onClick={() => {
                      setIsTherapyOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/fresh-snacks"
              className="block text-gray-700 hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navbar.freshSnacks")}
            </Link>
            <Link
              to="/pet-supplies"
              className="block text-gray-700 hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navbar.petSupplies")}
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-blue-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("navbar.aboutUs")}
            </Link>

            {/* Language Switcher */}
            <div className="flex space-x-2">
              <button
                onClick={() => changeLanguage("en")}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                EN
              </button>
              <button
                onClick={() => changeLanguage("zh-CN")}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                简
              </button>
              <button
                onClick={() => changeLanguage("zh-TW")}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                繁
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
