import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Soiree } from '../models/soiree.model';

@Injectable({
  providedIn: 'root'
})
export class GoodieService {
  private apiUrl = 'http://127.0.0.1:8000/soirees'; // URL de ton API Laravel

  constructor(private http: HttpClient) { }

  getSoirees(): Observable<Soiree[]> {
    return this.http.get<Soiree[]>(this.apiUrl);
  }

  getSoireeById(id: number): Observable<Soiree> {
    return this.http.get<Soiree>(`${this.apiUrl}/${id}`);
  }

  addSoiree(soiree: Soiree): Observable<Soiree> {
    return this.http.post<Soiree>(this.apiUrl, soiree);
  }

  updateSoiree(id: number, soiree: Soiree): Observable<Soiree> {
    return this.http.put<Soiree>(`${this.apiUrl}/${id}`, soiree);
  }

  deleteSoiree(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
