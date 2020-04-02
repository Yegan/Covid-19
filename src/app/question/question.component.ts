import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { questions ,imageRoute  } from '../../assets/symptoms-questions';
import { RouterModule, Route} from '@angular/router'
import { ngModuleJitUrl } from '@angular/compiler';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'pm-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  yes:string = 'Yes';
  no:string = 'No';
  showDiv:boolean = false;
  count:number = 1;
  username: string = '';
  adminDiv:boolean = false;
  imageWidth: number=30;
  imageMargin:number=30;
  imageCenter:number=0;

  positive:boolean = true;
  negative:boolean = false;

  yesClick:number =0;
  noClick:number= 0;
  value: any;
  questions:any[] = questions;

  constructor() { }

  ngOnInit() {
  }
 toggleDiv(value:string):void{
    this.showDiv = !this.showDiv;

    this.count = this.count+1;
    console.log(value);
    if(value== "yes"){
      this.yesClick++
    }
    else{
      this.noClick++
    }
    
    console.log(this.yesClick)
 }
}