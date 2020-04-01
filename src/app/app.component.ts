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


// counterCount(num:number):void{
// this.count= num++

// console.log(this.yes)

// //this.showDiv = false;
// }

  toggleDiv():void{
    this.showDiv = !this.showDiv;
    this.count = this.count+1;
    console.log(this.count)

  }




}
