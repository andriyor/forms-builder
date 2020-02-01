import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { FileUploadModule } from 'ng2-file-upload';

import { AppComponent } from './app.component';
import { ShortAnswerComponent } from './short-answer/short-answer.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { MultipleChoicesComponent } from './multiple-choices/multiple-choices.component';
import {AnswerDirective} from './answer.directive';
import { DropDownComponent } from './drop-down/drop-down.component';
import { FormItemComponent } from './form-item/form-item.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { DynamicControlComponent } from './dynamic-control/dynamic-control.component';
import { ShortAnswerEditComponent } from './short-answer-edit/short-answer-edit.component';
import { ParagraphEditComponent } from './paragraph-edit/paragraph-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShortAnswerComponent,
    ParagraphComponent,
    DateComponent,
    TimeComponent,
    FileUploadComponent,
    CheckboxesComponent,
    MultipleChoicesComponent,
    AnswerDirective,
    DropDownComponent,
    FormItemComponent,
    EditDialogComponent,
    DynamicControlComponent,
    ShortAnswerEditComponent,
    ParagraphEditComponent,
  ],
  entryComponents: [
    ShortAnswerComponent,
    ParagraphComponent,
    DateComponent,
    TimeComponent,
    FileUploadComponent,
    CheckboxesComponent,
    MultipleChoicesComponent,
    DropDownComponent,
    EditDialogComponent,
    ShortAnswerEditComponent,
    ParagraphEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatButtonModule,
    NgxMaterialTimepickerModule,
    FileUploadModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
