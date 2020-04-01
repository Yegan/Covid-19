import { Component } from '@angular/core';
import { questions } from '../assets/symptoms-questions';



@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  questions = questions

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
