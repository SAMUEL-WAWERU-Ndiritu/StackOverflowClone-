import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { QuestionsService } from '../../../../Services/questions.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { Observable } from 'rxjs';

import { Questions } from 'src/app/components/interfaces';
import { getQuestions, addQuestions } from 'src/app/State/Actions/questionsActions';
import { myQuestions } from 'src/app/State/Reducers/questionsReducer';
import * as QuestionsActions from '../../../../State/Actions/questionsActions'

@Component({
  selector: 'app-ask-question',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,EditorComponent],
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.css']
})
export class AskQuestionComponent  implements OnInit {
  show=false
  form!:FormGroup
  questions$!:Observable<Questions[]>
  constructor(private fb:FormBuilder,public auth:AuthService, private router:Router, private store:Store<any>){}
  ngOnInit(): void {
    this.form = this.fb.group({
      Title:[null, [Validators.required]],
      Body:[null, Validators.required], 
      Tags:[null, Validators.required],
    })
 
  }

  submitForm(){
      // this.store.dispatch(addQuestions({newquestions:this.form.value}))
      this.store.dispatch(QuestionsActions.addQuestions({newquestions:this.form.value}))
      // this.router.navigate([''])
      console.log(this.form.value)
    
  }
  // showForm(){
  // // this.show=!this.show
  //   this.store.dispatch(ShowFormAction())
  // }
  // ShowMore(){
  // this.router.navigate(['/allQuestions'])
  // }
}
// function ShowFormAction(): any {
//   throw new Error('Function not implemented.');
// }

