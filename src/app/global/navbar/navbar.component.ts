import { Component, OnInit } from '@angular/core';
import {CartService} from "../../cart/cart.service";
import {Item} from "../../models/item.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  value:number = 0;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.value = this.cartService.value
    this.cartService.cartChanged.subscribe( items => {
      this.value = 0
      items.forEach(item => {this.value += item.price})
    })
  }

}
