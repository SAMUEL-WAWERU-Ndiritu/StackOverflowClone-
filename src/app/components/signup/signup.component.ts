import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginUser, User } from '../interfaces/index';
import * as UserActions from '../../State/Actions/user.actions'

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
  
})
export class SignupComponent implements OnInit{
  form!:FormGroup
  constructor(private fb:FormBuilder, private router:Router,private store : Store<{user:User}>){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name:[null, Validators.required],
      email:[null, [Validators.required, Validators.email]],
      password:[null, Validators.required]
    })
  }
  submitForm(){
    if(this.form.valid){
      console.log(this.form.value)
      this.store.dispatch(UserActions.register({
        name: this.form.value.name, email: this.form.value.email, password: this.form.value.password,
        id:Math.floor(Math.random() *10000)}
      ))
      this.form.reset();
      this.router.navigate(['Login'])
    }
  }
}









