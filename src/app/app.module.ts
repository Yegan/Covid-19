import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    LoginComponent,
    StatsComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component: LoginComponent},
      {path:'question', component: QuestionComponent},
      {path:'stats', component:StatsComponent}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
