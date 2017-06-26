import { Component, OnInit } from '@angular/core';
import { UsersListService } from './../../../services/users-list.service';
import { Biker } from './../../../classes/biker';

@Component({
  selector: 'bk-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  bikers: Biker[];
  constructor(private usersListService: UsersListService) {}

  ngOnInit() {
    this.usersListService.getBikers();
    //this.getBikers();
  }

  // private getBikers():void {
  //   this.usersListService.getBikers()
  //   .then(bikers => {
  //     this.bikers = bikers;
  //   });
  // }


}
