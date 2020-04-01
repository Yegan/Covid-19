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


counterCount():void{
this.count= this.count++;
console.log(this.count)
this.showDiv = false;
}

  toggleDiv():void{
    this.showDiv = !this.showDiv;
  }




}
