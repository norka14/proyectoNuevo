import { Injectable } from '@angular/core';
import { API_URL } from '../../utils/constants';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './model/User';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersUrl = `${API_URL}/users`;
  user: User | null = null;

  constructor(private http: HttpClient, private router: Router){}

  login(email: string, password: string) {

    return of( 
      this.http.get<User[]>(this.usersUrl).subscribe((users) => {
        // Buscar el usuario en la lista
        const user = users.find((user) => user.email === email);

        if (!user) {
          // Si no existe, lanzamos un error
          throw new Error('Email es invalido');
        }

        if (user.password !== password) {
          // Si no existe, lanzamos un error
          throw new Error('Credenciales inválidas');
        }

        localStorage.setItem('token', user.email);
       
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigate(['login']);
  }

  isAuthenticated() {
   //return localStorage.getItem('token') !== null;

   const token =  localStorage.getItem('token');

   if(!token) {
    return false;
   }

   const isAuthenticated = token === this.user?.email;
   console.log(isAuthenticated);

   return isAuthenticated;
  }

}
