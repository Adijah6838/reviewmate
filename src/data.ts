import type { Product } from './types';

export const products: Product[] = [
  {
    id: 'salesforce',
    name: 'Salesforce',
    description: 'The world\'s #1 CRM platform.',
    category: 'Enterprise',
    attributes: [
      { name: 'Pricing', type: 'text', value: '$$$' },
      { name: 'Free Tier', type: 'boolean', value: false },
      { name: 'Starting Price', type: 'number', value: 25 },
      { name: 'Integrations', type: 'array', value: ['Slack', 'Gmail', 'Zapier', 'Outlook'] },
    ],
  },
  {
    id: 'hubspot',
    name: 'HubSpot',
    description: 'Powerful, not overpowering.',
    category: 'Mid-Market',
    attributes: [
      { name: 'Pricing', type: 'text', value: '$$' },
      { name: 'Free Tier', type: 'boolean', value: true },
      { name: 'Starting Price', type: 'number', value: 0 },
      { name: 'Integrations', type: 'array', value: ['Slack', 'Gmail', 'Zapier'] },
    ],
  },
  {
    id: 'pipedrive',
    name: 'Pipedrive',
    description: 'CRM designed for salespeople.',
    category: 'Small Business',
    attributes: [
      { name: 'Pricing', type: 'text', value: '$' },
      { name: 'Free Tier', type: 'boolean', value: false },
      { name: 'Starting Price', type: 'number', value: 15 },
      { name: 'Integrations', type: 'array', value: ['Gmail', 'Zapier'] },
    ],
  },
];