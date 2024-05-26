import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private apiUrl = 'api/skills'; 
  constructor(private http: HttpClient) { }

  incrementLikes(skillId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${skillId}/like`, {}).pipe(
      map(response => {
        if (response && response.data) {
          return response.data;
        } else {
          throw new Error('Invalid response format');
        }
      })
    );
  }
}
