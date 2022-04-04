import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/phones';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  getProduct(id: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  uploadImg(data: any): Observable<any> {
    const formData = new FormData();
    formData.append("file", data);
    formData.append("upload_preset", "aksltmfh");
    return this.http.post("https://api.cloudinary.com/v1_1/web16303/image/upload", formData, {
      reportProgress: true,
    });
  }
  createProduct(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  updateProduct(id: number, data: any,): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, data);
  }
  removeProduct(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  updateStatus(id:number,data:any):Observable<any>{
    return this.http.patch(`${this.apiUrl}/${id}`,data);
  }
  productDesc():Observable<any>{
    return this.http.get(`${this.apiUrl}?sort=price:desc`);
  }
}
