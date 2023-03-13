import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/Services/auth.service';
import { myUser} from 'src/app/State/Reducers/user.reducer';
import { AppState } from 'src/app/State/appState';
import {User} from '../../../components/interfaces'
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    random = Math.floor(Math.random() *10000)
  users!: User[];
  constructor(public auth:AuthService, private router:Router, private store:Store<AppState>, private route:ActivatedRoute){}
  ngOnInit(): void {

    this.store.select(myUser).subscribe(users =>{
      console.log(users);
      let questionsArray=[]
            for(let key in users){
              questionsArray.push({...users[key], id: Number(key)} as User)
            }
            console.log( questionsArray)
      this.users =questionsArray
     })
  } 
  
  // deleteProduct(id: string) {
  //   this.questions$=this.store.select(myQuestions)
  //   this.store.dispatch(deleteQuestions({id}));
   
  //  }
}
