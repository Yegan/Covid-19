import { Component, SystemJsNgModuleLoader } from '@angular/core';



@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  yes:string = 'Yes';
  no:string = 'No';
  showDiv:boolean = false;
  count:number = 0;
  username: string = '';

  loginBtn:string = "login";

  adminDiv:boolean = false;

  toggleDiv():void{
    this.showDiv = !this.showDiv;
    this.count = this.count+1;

  }

  toggleAdmin():void{
    this.adminDiv = !this.adminDiv;
  }




}
