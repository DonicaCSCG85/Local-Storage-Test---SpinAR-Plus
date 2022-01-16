import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ItemComponent } from './components/item/item.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { SocketIoConfig } from 'ngx-socket-io';

import { ItemService } from './services/item.service';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ItemComponent,
    ItemFormComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
