import { Link } from 'react-router-dom';
import { useComparison } from '../ComparisonContext';
import { products } from '../data';
import { ComparisonTable } from './ComparisonTable';

export function ComparePage() {
  const { selectedIds, clearComparison } = useComparison();
  
  // Find the full product objects for the selected IDs
  const selectedProducts = selectedIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p) => p !== undefined);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8 border-b pb-4">
        <div>
          <Link to="/" className="text-blue-600 hover:underline text-sm mb-2 inline-block">
            ← Back to Directory
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Compare Products</h1>
        </div>
        {selectedProducts.length > 0 && (
          <button
            onClick={clearComparison}
            className="text-sm text-red-600 hover:text-red-800 font-medium"
          >
            Clear All
          </button>
        )}
      </div>

      <ComparisonTable products={selectedProducts} />
    </div>
  );
}