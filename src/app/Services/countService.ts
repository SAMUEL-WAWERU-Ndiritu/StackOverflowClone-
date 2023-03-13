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
    const url = 'http://example.com/count';
    const data = { count: this.count };
    return this.http.post(url, data);
  }
}
