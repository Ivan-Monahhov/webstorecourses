import { Component, OnInit } from '@angular/core';
import {CartService} from "./cart.service";
import {Item} from "../models/item.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items:Item[]=[]
  cartValue:number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.cart;
    this.cartValue = this.cartService.value;
    this.items.forEach(item => {
      this.cartValue += item.price
    })
  }

  onDeleteFromCart(i:number, item:Item){
    let index:number = this.cartService.cart.indexOf(item)
    this.cartService.cart.splice(i,1);
    this.cartService.value -= item.price
    this.cartValue = this.cartService.value
    //this.cartService.cart.splice(index,1)
  }
  onDeleteAllItems(){
    //this.cartService.cart = []; do not assign new array as it when private you get passed a copy
    this.cartService.cart.splice(0,this.cartService.cart.length)
    this.cartService.value = 0
  }

}
