import React from "react";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-indigo-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 transition-colors"
              aria-label="Xiaohongshu"
            >
              <svg xlink:href="Xiaohongshu.svg" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm1 4H9v2h4v2h-4v6h2v-4h2v4h2V8z" />
              </svg>
            </a>
          </div>
          <p className="text-gray-500">©2025 by Fluffy Feast</p>
        </div>
      </div>
    </footer>
  );
}
