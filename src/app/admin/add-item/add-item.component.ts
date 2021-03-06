import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ItemService} from "../../services/item.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
  }
  onSubmit (form: NgForm){
    if(form.valid) {
      console.log(form.value);
      this.itemService.items.push(form.value);
    } else {console.log(form);}
  }
}
