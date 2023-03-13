import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { AddQuestions, Message, Questions } from '../components/interfaces';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor( private http:HttpClient) { }
  questions$=new Subject<Questions[]>()
  getQuestions(): Observable<Questions[]> {
    return this.http.get<Questions[]>('https://stack-overflow-2abf3-default-rtdb.firebaseio.com/Questions.json');
  }
  addQuestions( questions:AddQuestions):Observable<Message>{
    // return this.http.post<Message>('http://localhost:4000/flights', questions)
    return this.http.post<Message>('https://stack-overflow-2abf3-default-rtdb.firebaseio.com/Questions.json',questions)
  }
  
  getUserQuestions():Observable<Questions[]>{
    // return this.http.get<Questions[]>('http://localhost:4000/flights/booking/emails');
     return this.http.get<Questions[]>('https://stack-overflow-2abf3-default-rtdb.firebaseio.com/Questions.json');
  }

  getOneQuestions(id:string):Observable<Questions>{
  //  return  this.http.get<Questions>(`http://localhost:4000/flights/${id}`)
  return  this.http.get<Questions>(`https://stack-overflow-2abf3-default-rtdb.firebaseio.com/Questions.json/${id}`)
  }

  deleteQuestions(id:string):Observable<Message>{
    // return  this.http.delete<Message>(`http://localhost:4000/flights/${id}`)
    return  this.http.delete<Message>(`https://stack-overflow-2abf3-default-rtdb.firebaseio.com/Questions.json/${id}`)
   }

   updateQuestions(id:string,updatedQuestions:AddQuestions):Observable<Questions>{
    // return  this.http.put<Questions>(`http://localhost:4000/flights/${id}`, updatedQuestions)
      return  this.http.put<Questions>(`https://stack-overflow-2abf3-default-rtdb.firebaseio.com/Questions.json/${id}`, updatedQuestions)
   }
 
 


}
