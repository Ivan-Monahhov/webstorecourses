import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Item} from '../../models/item.model';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  id!: number;
  item!: Item;
  editItemForm: FormGroup = new FormGroup({});
  constructor(private route: ActivatedRoute , private itemService: ItemService , private  router: Router) { }

  ngOnInit(): void {
    this.id = (Number)(this.route.snapshot.paramMap.get('itemId'));
    this.item = this.itemService.items[this.id];
    this.editItemForm = new FormGroup(
      {
        title: new FormControl(this.item.title),
        price: new FormControl(this.item.price),
        imgSrc: new FormControl(this.item.imgSrc),
        category: new FormControl(this.item.category)
      }
    )
  }

  onSubmit (form: FormGroup){
    if(form.valid) {
      this.itemService.items[this.id] = form.value;
      this.router.navigateByUrl('admin/view-items');
    }
  }

}
