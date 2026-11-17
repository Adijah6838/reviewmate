import { createContext, useContext, ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';

interface ComparisonContextType {
  selectedIds: string[];
  toggleCompare: (id: string) => void;
  clearComparison: () => void;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const compareParam = searchParams.get('compare');
  const selectedIds = compareParam ? compareParam.split(',') : [];

  const toggleCompare = (id: string) => {
    const newParams = new URLSearchParams(searchParams);
    let newSelected = [...selectedIds];

    if (newSelected.includes(id)) {
      newSelected = newSelected.filter((item) => item !== id);
    } else {
      newSelected.push(id);
    }

    if (newSelected.length > 0) {
      newParams.set('compare', newSelected.join(','));
    } else {
      newParams.delete('compare');
    }
    
    setSearchParams(newParams);
  };

  const clearComparison = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('compare');
    setSearchParams(newParams);
  };

  return (
    <ComparisonContext.Provider value={{ selectedIds, toggleCompare, clearComparison }}>
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (!context) throw new Error('useComparison must be used within ComparisonProvider');
  return context;
}