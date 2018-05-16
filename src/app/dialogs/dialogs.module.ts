import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule, MatGridListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatGridListModule,
    FormsModule
  ],
  entryComponents:[AddQuizComponent],
  declarations: [AddQuizComponent]
})
export class DialogsModule { }
