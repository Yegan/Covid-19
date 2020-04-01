import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ResultComponent } from './test-result/test.result.component';
import { QuestionTempComponent } from './questionTemp/questionTemp.component';

@NgModule({
   declarations: [
      AppComponent,
      ResultComponent,
      QuestionTempComponent
   ],
   imports: [
      BrowserModule
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
