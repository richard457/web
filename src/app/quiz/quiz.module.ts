import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuizComponent} from './quiz/quiz.component';
import {MatBadgeModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatDialogModule} from '@angular/material';
import {AmazingTimePickerModule} from 'amazing-time-picker';
import { DialogsModule } from '../dialogs/dialogs.module';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatDialogModule,
        AmazingTimePickerModule,
        DialogsModule
    ],
    declarations: [QuizComponent]
})
export class QuizModule {
}
