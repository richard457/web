import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {ClockService} from '../../clock.service';
import { MatDialog } from '@angular/material';
import { AddQuizComponent } from '../../dialogs/add-quiz/add-quiz.component';
import {AngularFireDatabase, AngularFireDatabase} from 'angularfire2/database';
import { Quiz } from '../../contracts/quix.contract';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {

    private _clockSubscription: Subscription;
    time: Date;
    public quizes: Observable<Quiz[]>;


    constructor(private clockService: ClockService,
        private real_time_db: AngularFireDatabase,
        public dialog: MatDialog) {

    }

    ngOnInit() {
        this.quizes = this.real_time_db.list<Quiz>('/quizes').valueChanges();

        this._clockSubscription = this.clockService.getClock().subscribe(time => {
            // this.db.collection('users').up
            this.time = time;
        });
    }

    addQuiz() {
        const dialogRef = this.dialog.open(AddQuizComponent, {
            width: '250px',
            // data: { name: this.name, animal: this.animal }
          });

    }
    mark(quiz: Quiz) {
       console.log(quiz);
    }
    ngOnDestroy(): void {
        this._clockSubscription.unsubscribe();
    }

}
