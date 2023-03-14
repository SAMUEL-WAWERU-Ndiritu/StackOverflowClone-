import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answers, Message } from '../components/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  // getUsers() {
  //   return this.http.get('https://stack-overflow-2abf3-default-rtdb.firebaseio.com/User.json') 
  // }
  getAnswer(): Observable<Answers[]> {
    return this.http.get<Answers[]>('https://stack-overflow-2abf3-default-rtdb.firebaseio.com/Answers.json');
  }
  
  constructor(private http:HttpClient) { }


  addAnswer( answers:Answers):Observable<Message>{
    // return this.http.post<Message>('http://localhost:4000/flights', questions)
    return this.http.post<Message>('https://stack-overflow-2abf3-default-rtdb.firebaseio.com/Answers.json',answers)
  }
  deleteAnswers(id:string):Observable<Message>{
    // return  this.http.delete<Message>(`http://localhost:4000/flights/${id}`)
    return  this.http.delete<Message>(`https://stack-overflow-2abf3-default-rtdb.firebaseio.com/Answers.json/${id}`)
   }
}
