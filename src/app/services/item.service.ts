import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { getLocaleTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  items: Item[];

  constructor() { 
    this.items = [
      // {title: 'write', description: 'I need to write', hide: true},
      // {title: 'read', description: 'I need to read', hide: true}
    ]
  }


  // getItem(){
  //   if(localStorage.getItem('items') === null){
  //     return this.items;
  //   } else {
      
  //     return JSON.parse(this.socket.emit('getItems', this.items));
  //   }
  // }

  getItem(){
    if(localStorage.getItem('items') === null){
      return this.items;
    } else {
      let parsing = localStorage.getItem('items');
      if(parsing){
        this.items = JSON.parse(parsing);
      }
      return this.items;
    }
  }

  addItem(item: Item){
    this.items.push(item);
    let items: Item[] = [];
    if(localStorage.getItem('items') === null){
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
    } else {
      let parsing = localStorage.getItem('items');
      if(parsing){
        items = JSON.parse(parsing);
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      }
    }
  }

  deleteItem(item: Item){
    for(let i = 0; i < this.items.length; i++){
      if(item == this.items[i]){
        this.items.splice(i, 1);
        localStorage.setItem('items', JSON.stringify(this.items));
      }
    }
  }
}

