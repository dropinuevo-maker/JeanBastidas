export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  images: string[];
  description: string;
  category: string;
  isTrending?: boolean;
  shippingInfo?: string;
}
