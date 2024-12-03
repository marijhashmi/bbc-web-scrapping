import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BbcNewsService {
  private apiUrl = 'http://localhost:3000/homepage-news';

  constructor(private http: HttpClient) {}

 
  getHomepageNews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
