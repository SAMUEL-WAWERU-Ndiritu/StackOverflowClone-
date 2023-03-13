import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { IncreaseValue, DecreaseValue } from 'src/app/State/Actions/counterAction';
import { CountState } from 'src/app/State/Reducers/countReducer';
import { AppState } from 'src/app/State/appState';
import {CounterService } from '../../../../Services/countService'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/components/interfaces';
// import { CountState } from '../../../../State/Reducers/countReducer';
// import { AppState } from '../../../../State/appState';
// import { IncreaseValue, DecreaseValue } from '../../../../State/Actions/counterAction';
@Component({
  selector: 'app-single-question',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.css']
})
export class SingleQuestionComponent implements OnInit {
  form!:FormGroup
  // CounterService: any;
  // counterService: any;

  constructor(private fb:FormBuilder, private router:Router,private store:Store<AppState>){
  }


  ngOnInit(): void {
    this.form = this.fb.group({
      Answer:[null, Validators.required],
      
    })
    this.store.select(CountState).subscribe(state=>{
      // console.log(state);
       this.count=state
    })
  }


  submitForm(){
    if(this.form.valid){
      console.log(this.form.value);
      // this.CounterService.sendCountToDatabase().subscribe(
      //   (        response: any) => console.log(response)
      // );
      // this.store.dispatch(UserActions.register({Name:this.form.value.Name,Email:this.form.value.Email,Password:this.form.value.Password}))
      this.form.reset();
       this.router.navigate(['public/allQuestions'])
    }
  }
count!:number
//  constructor(private store:Store<AppState>){}
  Add(){
  this.store.dispatch(IncreaseValue({increaseBy:1}))
  // this.CounterService.increment();
  //   this.count = this.CounterService.count;
  }
  Minus(){
    this.store.dispatch(DecreaseValue({decreaseBy:1}))
    // this.CounterService.decrement();
    // this.count = this.CounterService.count;
  }
}