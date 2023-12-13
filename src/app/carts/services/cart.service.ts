import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../../products/interfaces/product.interface';
import { CartItem } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = signal<CartItem[]>([]);
  promoCode = signal<string>('');

  discountPercent = computed(() => {
    const code = this.promoCode();
    if (code === 'DEVFESTHK2023') {
      return 0.1;
    } else if (code === 'ANGULARNATION') {
      return 0.2;
    }

    return 0;
  });

  summary = computed(() => {
    const results = this.cart().reduce(({ quantity, subtotal }, item) => {
      const newQuantity = quantity + item.quantity;
      const newSubtotal = subtotal + item.price * item.quantity;

      return { 
        quantity: newQuantity,
        subtotal: newSubtotal
      }
    }, { quantity: 0, subtotal: 0 });

    const { subtotal, quantity } = results;
    const discount = subtotal * this.discountPercent();
    const total = subtotal - discount; 

    return { 
      quantity, 
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      total: total.toFixed(2),
    };
  })

  addItem(product: Product, quantity: number) {
    const idx = this.cart().findIndex((item) => item.id === product.id);
    console.log('addItem', idx);
    if (idx >= 0) {
      this.cart.update((oldCart) => {
        const oldItem = oldCart[idx];
        const newQuantity = oldItem.quantity + quantity;
        oldCart.splice(idx, 1, {...oldItem, quantity: newQuantity });
        return oldCart;
      });
    } else {
      this.cart.update((cartItems) => ([...cartItems, { ...product, quantity } ]));
    }
  }

  deleteItem(id: number) {
    this.cart.update((cartItems) => cartItems.filter((item) => item.id !== id));
  }

  updateItem(id: number, quantity: number) {
    if (quantity <= 0) {
      this.deleteItem(id);
    } else {
      this.cart.update((cartItems) => cartItems.map((item) => 
        item.id === id ? { ...item, quantity} : item 
      ));
    }
  }
}
