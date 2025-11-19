'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
            <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 011 1v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6zM9 15a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"/>
          </svg>
        </div>
        <span className="text-lg font-bold text-slate-900">RetailPro</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <a href="/" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">
          Home
        </a>
        <a href="#about" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">
          About
        </a>
        <a href="#portfolio" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">
          Portfolio
        </a>
        
        {/* Dropdown Menu */}
        <div className="relative group">
          <button className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200 flex items-center gap-1">
            Solutions
            <svg className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          
          {/* Dropdown Content */}
          <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
            <a href="#inventory" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              Inventory Management
            </a>
            <a href="#pos" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              Point of Sale
            </a>
            <a href="#analytics" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              Analytics & Insights
            </a>
            <a href="#crm" className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
              Customer Relations
            </a>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="hidden md:flex items-center gap-3">
        <button className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors duration-200">
          Sign In
        </button>
        <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200">
          Get Started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>
  );
}