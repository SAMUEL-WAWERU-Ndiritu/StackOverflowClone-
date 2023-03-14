import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  count = 0;

  constructor(private http: HttpClient) {}

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  sendCountToDatabase() {
    const url = 'https://stack-overflow-2abf3-default-rtdb.firebaseio.com/Count.json';
    const data = {
      count: this.count,
      timestamp: new Date().getTime() // add timestamp to data
    };
    return this.http.post(url, data);
  }
}
