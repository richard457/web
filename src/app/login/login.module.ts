import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {MatFormFieldModule, MatSelectModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
    apiKey: 'AIzaSyAWUhfRWtdzfx-WKzbytapWzJHNHU2DOz0',
    authDomain: 'testingflipper.firebaseapp.com',
    databaseURL: 'https://testingflipper.firebaseio.com',
    projectId: 'testingflipper',
    storageBucket: 'testingflipper.appspot.com',
    messagingSenderId: '106990428181'
};


@NgModule({
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(firebaseConfig),
        // AngularFireModule.initializeApp(firebaseConfig),
        AngularFirestoreModule,
        AngularFireModule.initializeApp(firebaseConfig, 'quiz'),
        // AngularFireDatabaseModule
    ],
    declarations: [LoginComponent],

})
export class LoginModule {
}
