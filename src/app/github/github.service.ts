import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private apiUrl = 'https://api.github.com/users/eduud1as'

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
}
