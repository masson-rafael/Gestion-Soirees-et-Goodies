import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goodie } from '../models/goodie.model';

@Injectable({
  providedIn: 'root'
})
export class GoodieService {
  private apiUrl = 'http://127.0.0.1:8000/goodies';

  constructor(private http: HttpClient) {}

  getGoodies(): Observable<Goodie[]> {
    return this.http.get<Goodie[]>(this.apiUrl);
  }

  getGoodieById(id: number): Observable<Goodie> {
    return this.http.get<Goodie>(`${this.apiUrl}/${id}`);
  }

  addGoodie(goodie: Goodie): Observable<Goodie> {
    return this.http.post<Goodie>(this.apiUrl, goodie);
  }

  updateGoodie(goodie: Goodie): Observable<Goodie> {
    return this.http.put<Goodie>(`${this.apiUrl}/${goodie.id}`, goodie);
  }

  deleteGoodie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
