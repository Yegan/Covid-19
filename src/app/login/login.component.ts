import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  yes:string = 'Yes';
  no:string = 'No';
  showDiv:boolean = false;
  count:number = 0;
  username: string = '';
  adminDiv:boolean = false;

  positive:boolean = true;
  negative:boolean = false;

  yesClick:number = 0;
  noClick:number=0;

  toggleDiv():void{
    this.showDiv = !this.showDiv;
    this.count = this.count+1;

}
}
