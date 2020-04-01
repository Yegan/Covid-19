import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { questionTempComponent } from './app/questionTemp/questionTemp.component';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    LoginComponent,
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
