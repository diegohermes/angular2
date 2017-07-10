import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bk-help-info',
  templateUrl: './help-info.component.html',
  styleUrls: ['./help-info.component.scss']
})
export class HelpInfoComponent implements OnInit {

  isOpen:boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
