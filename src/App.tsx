import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComparisonProvider } from './ComparisonContext';
import { Directory } from './components/Directory';
import { ComparePage } from './components/ComparePage';
import { ProductDetail } from './components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <ComparisonProvider>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Directory />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/compare" element={<ComparePage />} />
          </Routes>
        </div>
      </ComparisonProvider>
    </BrowserRouter>
  );
}

export default App;