import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

private products: Iproducts[] = [
  { id:1, name: 'Dunk Low GS', price: 800.0, description: 'The insole are confortable so you can', img: "./dunkgs.jpg.png" },
  { id:2, name: 'Dunk Rosa Pink', price: 890.0, description: 'The insole are confortable so you can', img: "./dunkrosa.png.png"  },
  { id:3, name: 'Dunk Low Crimision Tint', price: 999.0, description: 'The insole are confortable so you can', img: "./dunksalmao.jpg.png" },
];
getProducts(): Iproducts[]{
  return this.products;
}
}
