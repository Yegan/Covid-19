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
  adminDiv:boolean = false;

  positive:boolean = true;
  negative:boolean = false;

  yesClick:number =0;
  noClick:number= 0;




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
