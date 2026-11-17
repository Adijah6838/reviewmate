import type { Product, ProductAttribute } from '../types';
interface ComparisonTableProps {
  products: Product[];
}

// Helper to format values based on their type
function formatValue(attr: ProductAttribute | undefined) {
  if (!attr) return <span className="text-gray-400">N/A</span>;
  
  if (attr.type === 'boolean') {
    return attr.value ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Yes</span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">No</span>
    );
  }
  
  if (attr.type === 'array' && Array.isArray(attr.value)) {
    return (
      <div className="flex flex-wrap gap-1">
        {attr.value.map((v, i) => (
          <span key={i} className="inline-flex items-center px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs">
            {v}
          </span>
        ))}
      </div>
    );
  }
  
  if (attr.type === 'number') {
    return <span className="font-semibold">{attr.value.toString()}</span>;
  }

  return <span>{attr.value.toString()}</span>;
}

export function ComparisonTable({ products }: ComparisonTableProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">No products selected</h2>
        <p className="text-gray-500">Go back to the directory and select products to compare.</p>
      </div>
    );
  }

  // Get all unique attribute names across all selected products
  const allAttributes = Array.from(
    new Set(products.flatMap((p) => p.attributes.map((a) => a.name)))
  );

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-4 border-b border-gray-200 bg-gray-50 font-semibold text-gray-700 w-1/4 min-w-[200px]">
              Attribute
            </th>
            {products.map((p) => (
              <th key={p.id} className="p-4 border-b border-gray-200 bg-gray-50 w-1/4 min-w-[200px]">
                <div className="font-bold text-lg text-gray-900">{p.name}</div>
                <div className="text-sm font-normal text-gray-500">{p.category}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allAttributes.map((attrName) => (
            <tr key={attrName} className="hover:bg-gray-50 transition-colors">
              <td className="p-4 border-b border-gray-200 text-gray-600 font-medium">
                {attrName}
              </td>
              {products.map((p) => {
                const attr = p.attributes.find((a) => a.name === attrName);
                return (
                  <td key={p.id} className="p-4 border-b border-gray-200 text-gray-900">
                    {formatValue(attr)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}