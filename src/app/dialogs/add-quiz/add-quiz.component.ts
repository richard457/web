import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Quiz } from '../../contracts/quiz.class';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  question:Quiz;
  constructor( private real_time_db: AngularFireDatabase) {
    this.question = new Quiz();
   }

  ngOnInit() {

  }
  is_option(answer){
    this.question.answers.push(answer);
  }
  saveQuiz(){
   
  
    this.real_time_db.database.ref('quizes').push(this.question);
  }

}
