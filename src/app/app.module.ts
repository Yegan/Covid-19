import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { questionTempComponent } from './app/questionTemp/questionTemp.component';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    // questionTempComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {



 }
