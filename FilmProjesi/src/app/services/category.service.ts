import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url='http://localhost:3000/categories';

  constructor(private http:HttpClient) { }

  getCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.url);
  }
}
