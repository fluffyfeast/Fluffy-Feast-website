export interface Product {
  id: number;
  name: string;
  price: number;
  discount:number;
  image: string;
  category: 'therapy' | 'Snacks';
  description: string;
  detailImages?: string[];
  fullDescription?: string;
  benefits?: string[];
  usage?: string;
}

export interface CartItem extends Product {
  quantity: number;
}