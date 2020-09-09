import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://api.github.com/users"
  // injecter le client Http pour pouvoir l'utiliser dans la classe 
  constructor( private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}?per_page=10`)
  }

  getUser(username: string) {
    return this.http.get(`${this.apiUrl}/${username}`)
  }
}
