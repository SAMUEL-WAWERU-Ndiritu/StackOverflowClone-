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
      Name:[null, Validators.required],
      Email:[null, [Validators.required, Validators.email]],
      Password:[null, Validators.required]
    })
  }
  submitForm(){
    if(this.form.valid){
      console.log(this.form.value)
      this.store.dispatch(UserActions.register({Name:this.form.value.Name,Email:this.form.value.Email,Password:this.form.value.Password}))
      this.router.navigate([''])
    }
  }
}
