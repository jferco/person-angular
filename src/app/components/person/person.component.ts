import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  @Input() info: People;
  constructor() {}

  ngOnInit(): void {}
}
