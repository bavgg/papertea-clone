export interface Product {
  id: number;
  title: string;
  description: string;
  category: string; 
  price: number; 
  discountPercentage: number; 
  rating: number; 
  tags: string[];
  images: string[]; thumbnail: string;
}
