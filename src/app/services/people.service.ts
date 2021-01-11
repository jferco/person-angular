import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface People {
  name: String;
  age: Number;
  salary: Number;
  isActive: Boolean;
}
@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  jsonFile = '../assets/people.json';
  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get(this.jsonFile).toPromise();
  }
}
