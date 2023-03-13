import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { LoginUser } from '../../components/interfaces/index';
import * as UserActions from '../../State/Actions/user.actions'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {
  form!:FormGroup
  error=null
  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService,
    private store: Store,
    private router: Router // Inject the Router service
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      Email:[null, [Validators.required, Validators.email]],
      Password:[null, Validators.required]
    })
  }

  submitForm(){
    if(this.form.valid){
      this.store.dispatch(UserActions.login({Email:this.form.value.Email,Password:this.form.value.Password}))
      this.AuthService.login()
      this.form.reset();
      this.router.navigate(['public/allQuestions'])
    
    }
  }


  Close(){
    this.error=null
  }

 
}

