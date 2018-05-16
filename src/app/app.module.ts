import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {AngularFireModule} from 'angularfire2';
import {ReactiveFormsModule} from '@angular/forms';
import {QuizModule} from './quiz/quiz.module';


@NgModule({
    declarations: [
        AppComponent
    ],

    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        QuizModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
