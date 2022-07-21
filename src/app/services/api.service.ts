import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiServerUrl = "https://hackathon2022-backend.herokuapp.com"
  constructor(private http:HttpClient) {

  }
  public getAllPets(): Observable<Object[]>{
    return this.http.get<Object[]>(`${this.apiServerUrl}/api/pets/list`);

  }
}
