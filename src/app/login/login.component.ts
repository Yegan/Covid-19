import { Component, OnInit } from '@angular/core';
import { usersList } from "../../assets/database"

@Component({
  selector: 'pm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // template: `UserName : <input  [(ngModel)] = "username"  type="text" class="form-control" id="lg_username" name="lg_username" placeholder="username" >`


})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  db = usersList

  yes:string = 'Yes';
  no:string = 'No';
  showDiv:boolean = false;
  count:number = 0;
  username: string = '';
  password: string ='';
  adminDiv:boolean = false;

  positive:boolean = true;
  negative:boolean = false;

  yesClick:number = 0;
  noClick:number=0;

  toggleDiv():void{
    this.showDiv = !this.showDiv;
    this.count = this.count+1;
    console.log(this.username)
}


login(){
  usersList.push(
    {
      user: this.username,
      password: this.password,
      totalYes: 0,
      totalNo: 0
    }
  )
}

}
