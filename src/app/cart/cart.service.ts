import { Injectable } from '@angular/core';
import {Item} from "../models/item.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Item[] = [];
  value:number = 0
  constructor() { }

  added(){}

  yeet(){}
}
