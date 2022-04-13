import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `http://localhost:3000/categories`;
  constructor(private categoryService: HttpClient) { }

  getCategories(): Observable<any> {
    return this.categoryService.get(this.apiUrl);
  }

  getCategory(id: number | string): Observable<any> {
    return this.categoryService.get(`${this.apiUrl}/${id}`);
  }

  createCategory(data: any): Observable<any> {
    return this.categoryService.post(this.apiUrl, data);
  }

  updateCategory(id: number | string, data: any) {
    return this.categoryService.patch(`${this.apiUrl}/${id}`, data);
  }

  removeCategory(id: number | string): Observable<any> {
    return this.categoryService.delete(`${this.apiUrl}/${id}`);
  }
}
