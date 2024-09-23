import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductByCategoryService {
  private apiUrl = 'https://dummyjson.com/products/category';

  constructor(private http: HttpClient) {}

  getProductsByCategory(category: string): Observable<any> {
    const url = `${this.apiUrl}/${category}`;
    return this.http.get<any>(url);
  }
}