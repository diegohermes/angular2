import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bk-users-registration',
  templateUrl: './users-registration.component.html',
  styleUrls: ['./users-registration.component.scss']
})
export class UsersRegistrationComponent implements OnInit {

  constructor() { }

  // Form submit method
  onSubmit(form) {
    console.log(form);
  }

  ngOnInit() {
  }

}