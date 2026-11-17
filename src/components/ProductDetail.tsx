import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import { useComparison } from '../ComparisonContext';

export function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { selectedIds, toggleCompare } = useComparison();

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Product not found</h1>
        <Link to="/" className="text-blue-600 hover:underline">← Back to Directory</Link>
      </div>
    );
  }

  const isSelected = selectedIds.includes(product.id);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-600 hover:underline text-sm mb-6 inline-block">
        ← Back to Directory
      </Link>
      
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">{product.category}</span>
            <h1 className="text-4xl font-bold text-gray-900 mt-1">{product.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{product.description}</p>
          </div>
          <button
            onClick={() => toggleCompare(product.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              isSelected 
                ? 'bg-red-100 text-red-700 hover:bg-red-200' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {isSelected ? 'Remove from Compare' : 'Add to Compare'}
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 border-b pb-2 mb-4 mt-8">Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.attributes.map((attr) => (
            <div key={attr.name} className="border-b border-gray-100 pb-2">
              <span className="block text-sm text-gray-500 mb-1">{attr.name}</span>
              <span className="font-medium text-gray-900">
                {attr.type === 'boolean' 
                  ? (attr.value ? 'Yes' : 'No') 
                  : Array.isArray(attr.value) 
                    ? attr.value.join(', ') 
                    : attr.value.toString()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}