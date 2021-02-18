import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:{title:string,price:number,category:string,imgSrc:string}[] = [];
  constructor() { }

  added(){}

  yeet(){}
}
