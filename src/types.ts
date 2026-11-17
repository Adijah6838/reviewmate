export type AttributeValue = string | number | boolean | string[];

export interface ProductAttribute {
  name: string;
  type: 'text' | 'number' | 'boolean' | 'array';
  value: AttributeValue;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  attributes: ProductAttribute[];
}