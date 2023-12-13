import { Product } from '../../products/interfaces/product.interface';

export type CartItem = Product & { quantity: number };
