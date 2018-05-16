import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ClockService} from '../../clock.service';
import {AngularFirestore} from 'angularfire2/firestore';
import { MatDialog } from '@angular/material';
import { AddQuizComponent } from '../../dialogs/add-quiz/add-quiz.component';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Quiz } from '../../contracts/quix.contract';
import { Observable } from '@firebase/util';
@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit, OnDestroy {

    private _clockSubscription: Subscription;
    time: Date;
    start_time: number;
    public quizes: AngularFireList<Quiz[]>;
    constructor(private clockService: ClockService, 
        private db: AngularFirestore,
        private real_time_db: AngularFireDatabase,
        public dialog: MatDialog) {
            
    }

    ngOnInit() {
        this.quizes = this.real_time_db.list('/quizes');
        this._clockSubscription = this.clockService.getClock().subscribe(time => {
            // this.db.collection('users').up
            this.time = time;
        });
    }

    addQuiz(){
        let dialogRef = this.dialog.open(AddQuizComponent, {
            width: '250px',
            // data: { name: this.name, animal: this.animal }
          });
      
    }
    ngOnDestroy(): void {
        this._clockSubscription.unsubscribe();
    }

}
