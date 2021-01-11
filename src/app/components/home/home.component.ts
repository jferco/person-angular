import { Component, OnInit } from '@angular/core';
import { People, PeopleService } from 'src/app/services/people.service';

export interface iterObject {
  data: Array<People>;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  peopleObject: Array<People>;

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.peopleService.getPeople().then((data: iterObject) => {
      this.peopleObject = data.data;
      console.log(this.peopleObject);
    });
  }
}
