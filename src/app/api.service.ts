import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get("/api/cartitems", { responseType: "json"});
  }

  addItem(newItem) {
    return this.http.post("/api/cartitems", { id: newItem }, { responseType: "json"});
  }

  deleteItem(id) {
    return this.http.delete(`/api/cartitems/${id}`, { responseType: "json"});
  }

  updateItem(newid, oldid) {
    return this.http.put(`/api/cartitems/${oldid}`, { id: newid }, { responseType: "json"});
  }
  
}
