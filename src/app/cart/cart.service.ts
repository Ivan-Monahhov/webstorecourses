import { Injectable } from '@angular/core';
import {Item} from "../models/item.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Item[] = [];
  value:number = 0
  cartChanged = new Subject<Item[]>();
  constructor() { }

  added(){}

  yeet(){}
}
