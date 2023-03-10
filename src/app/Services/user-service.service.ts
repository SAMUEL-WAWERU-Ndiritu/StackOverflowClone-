import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../components/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  // getUsers() {
  //   return this.http.get('https://stack-overflow-2abf3-default-rtdb.firebaseio.com/User.json') 
  // }
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://stack-overflow-2abf3-default-rtdb.firebaseio.com/User.json');
  }
  
  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    return this.http.post('https://stack-overflow-2abf3-default-rtdb.firebaseio.com/User.json',{email,password})
    // return this.http.post('http://lopcalhost:3000/login',{email,password})
  }

  register(name:string,email:string,password:string){
    console.log(name,email,password)
     return this.http.post('https://stack-overflow-2abf3-default-rtdb.firebaseio.com/User.json',{name,email,password})
    // return this.http.post('http://localhost:3000/register',{name,email,password})
  }
}
