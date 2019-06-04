import { Component } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expressLab';

  cartitems: any;

  constructor(private apiService: ApiService) {
    this.apiService.getItems().subscribe(response => {
      this.cartitems = response;
    });
  }

  addNewItem(newItem) {
    this.apiService.addItem(newItem).subscribe(response => {
      this.cartitems = response;
    });
  }

  deleteItem(id) {
    this.apiService.deleteItem(id).subscribe(response => {
      this.cartitems = response;
    });
  }

  updateAnItem (newid, oldid) {
    this.apiService.updateItem(newid, oldid).subscribe(response => {
      this.cartitems = response;
    });
  }
}
