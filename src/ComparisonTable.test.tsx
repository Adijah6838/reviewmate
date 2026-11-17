import { render, screen } from '@testing-library/react';
import { ComparisonTable } from './components/ComparisonTable';
import { products } from './data';

describe('ComparisonTable', () => {
  it('renders empty state when no products are provided', () => {
    render(<ComparisonTable products={[]} />);
    expect(screen.getByText('No products selected')).toBeInTheDocument();
  });

  it('renders attributes correctly for selected products', () => {
    const selected = [products[0], products[1]]; // Salesforce and HubSpot
    render(<ComparisonTable products={selected} />);
    
    // Check headers
    expect(screen.getByText('Salesforce')).toBeInTheDocument();
    expect(screen.getByText('HubSpot')).toBeInTheDocument();
    
    // Check boolean formatting
    expect(screen.getAllByText('No').length).toBeGreaterThan(0); // Salesforce Free Tier
    expect(screen.getAllByText('Yes').length).toBeGreaterThan(0); // HubSpot Free Tier

    // Check array formatting
    // Note: Both Salesforce and HubSpot have 'Slack', so we expect multiple elements
    expect(screen.getAllByText('Slack').length).toBe(2);
  });
});