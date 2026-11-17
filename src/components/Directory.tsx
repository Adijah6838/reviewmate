import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import { useComparison } from '../ComparisonContext';

export function Directory() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const { selectedIds, toggleCompare } = useComparison();

  // Get unique categories for the filter
  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  // Filter products
  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase()) || 
                          p.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <header className="flex justify-between items-center mb-8 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">ReviewMate</h1>
          <p className="text-gray-500">Find and compare the best CRM software.</p>
        </div>
        {selectedIds.length > 0 && (
          <Link 
            to="/compare" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors"
          >
            Compare Selected ({selectedIds.length})
          </Link>
        )}
      </header>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => {
          const isSelected = selectedIds.includes(product.id);
          return (
            <div key={product.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{product.category}</span>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => toggleCompare(product.id)}
                    className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-600">Compare</span>
                </label>
              </div>
              
              <h2 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-gray-600 flex-1 mb-4">{product.description}</p>
              
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  to={`/product/${product.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  View Details →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}