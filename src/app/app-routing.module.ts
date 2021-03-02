import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import {HomeComponent} from "./home/home.component";
import {EditItemComponent} from "./admin/edit-item/edit-item.component";
import {AddItemComponent} from "./admin/add-item/add-item.component";
import {ViewItemsComponent} from "./admin/view-items/view-items.component";
import {AdminHomeComponent} from "./admin/admin-home/admin-home.component";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {path:"cart", component: CartComponent},
  {path:"", component: HomeComponent},
  {path:"admin",component:AdminHomeComponent},
  {path:"admin/add-item",component:AddItemComponent},
  {path:"admin/view-items",component:ViewItemsComponent},
  {path:"admin/edit-item",component:EditItemComponent},
  {path:"**", redirectTo:"/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
