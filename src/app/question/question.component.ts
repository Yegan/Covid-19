import { Component, OnInit } from '@angular/core';
import { questions } from '../../assets/symptoms-questions';

@Component({
  selector: 'pm-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions = questions

  constructor() { }

  ngOnInit() {
  }

}
