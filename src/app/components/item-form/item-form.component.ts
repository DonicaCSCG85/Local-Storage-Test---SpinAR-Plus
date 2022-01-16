import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {

  constructor(public itemService: ItemService) { }

  ngOnInit(): void {
  }

  addItem(newTitle: HTMLInputElement, newDescription: HTMLTextAreaElement){
    console.log("adding...", newTitle.value, newDescription.value);
    this.itemService.addItem({
      title: newTitle.value,
      description: newDescription.value,
      hide: true
    });
    console.log(this.itemService.getItem());
    newTitle.value = "";
    newDescription.value = "";
    newTitle.focus();
    return false;
  }
}
