import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
  }

  deleteItem(item: Item){
    if(confirm('Are you sure you want to delete the item?')){
      this.itemService.deleteItem(item);
    }
  }

}
