// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router, RouterModule } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { IncreaseValue, DecreaseValue } from 'src/app/State/Actions/counterAction';
// import { CountState } from 'src/app/State/Reducers/countReducer';
// import { AppState } from 'src/app/State/appState';
// import {CounterService } from '../../../../Services/countService'
// import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Answers, User } from 'src/app/components/interfaces';
// // import { CountState } from '../../../../State/Reducers/countReducer';
// // import { AppState } from '../../../../State/appState';
// // import { IncreaseValue, DecreaseValue } from '../../../../State/Actions/counterAction';
// import * as AnswersActions from '../../../../State/Actions/answersAction'
// @Component({
//   selector: 'app-single-question',
//   standalone: true,
//   imports: [CommonModule,RouterModule,ReactiveFormsModule],
//   templateUrl: './single-question.component.html',
//   styleUrls: ['./single-question.component.css']
// })
// export class SingleQuestionComponent implements OnInit {
//   form!:FormGroup
//   CounterService: any;
//   // counterService: any;

//   constructor(private fb:FormBuilder, private router:Router,private store:Store<AppState>){
//   }


//   ngOnInit(): void {
//     this.form = this.fb.group({
//       Answer:[null, Validators.required],
      
//     })
//     this.store.select(CountState).subscribe(state=>{
//       console.log(state);
//        this.count=state
//     })
//   }


//   submitForm(){
//     if(this.form.valid){

//       let answers :Answers= {...this.form.value, id:Math.floor(Math.random() *10000)};
//       console.log(this.form.value)
//       this.store.dispatch(AnswersActions.addAnswers({newanswers:answers}))
//       this.form.reset();
//       this.router.navigate(['public/allQuestions'])
//     }
//   }
// count!:number

//   Add(){
//   this.store.dispatch(IncreaseValue({increaseBy:1}))
//   this.CounterService.increment();
//     this.count = this.CounterService.count;
//   }
//   Minus(){
//     this.store.dispatch(DecreaseValue({decreaseBy:1}))
//     this.CounterService.decrement();
//     this.count = this.CounterService.count;
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { IncreaseValue, DecreaseValue } from 'src/app/State/Actions/counterAction';
import { CountState } from 'src/app/State/Reducers/countReducer';
import { AppState } from 'src/app/State/appState';
import { CounterService } from '../../../../Services/countService';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Answers, User } from 'src/app/components/interfaces';
import * as AnswersActions from '../../../../State/Actions/answersAction';
import { AnswerService } from 'src/app/Services/AnswerService';

@Component({
  selector: 'app-single-question',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {
  form!: FormGroup;
  count!: number;

  constructor(private fb: FormBuilder, private router: Router, private store: Store<AppState>, private counterService: CounterService,private AnswersService: AnswerService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Answer: [null, Validators.required],
      Count: [null]
    });
    this.store.select(CountState).subscribe(state=>{
      console.log(state);
      this.count=state;
      this.sendCountToForm();
    });
  }

  submitForm() {
    if (this.form.valid) {
      let answers: Answers = { ...this.form.value, id: Math.floor(Math.random() * 10000), count: this.count };
      console.log(this.form.value);
      this.store.dispatch(AnswersActions.addAnswers({ newanswers: answers }));
      this.form.reset();
      this.router.navigate(['public/allQuestions']);
    }
  }


  getAnswers() {
    this.AnswersService.getAnswer().subscribe(
      (answers) => console.log(answers),
      (error) => console.error(error)
    );
  }

  Add() {
    this.store.dispatch(IncreaseValue({ increaseBy: 1 }));
    this.counterService.increment();
    this.count = this.counterService.count;
    this.sendCountToForm();
  }

  Minus() {
    this.store.dispatch(DecreaseValue({ decreaseBy: 1 }));
    this.counterService.decrement();
    this.count = this.counterService.count;
    this.sendCountToForm();
  }

  sendCountToForm() {
    this.form.patchValue({ Count: this.count });
  }
}
