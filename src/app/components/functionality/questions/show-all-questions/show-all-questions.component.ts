

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Params, ActivatedRoute } from '@angular/router';
import { myQuestions } from '../../../../State/Reducers/questionsReducer';
import { deleteQuestions, getQuestions } from 'src/app/State/Actions/questionsActions';
import { Questions } from 'src/app/components/interfaces';
import { AuthService } from 'src/app/Services/auth.service';
import { QuestionsService } from 'src/app/Services/questions.service'
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/app/State/appState';
@Component({
  selector: 'app-show-all-questions',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './show-all-questions.component.html',
  styleUrls: ['./show-all-questions.component.css']
})
export class ShowAllQuestionsComponent implements OnInit {

  questions!: Questions[];
  constructor(public auth:AuthService, private router:Router, private store:Store<AppState>, private route:ActivatedRoute){}
  ngOnInit(): void {

 this.store.select(myQuestions).subscribe(questions =>{
  console.log(questions);
  let questionsArray=[]
        for(let key in questions){
          questionsArray.push({...questions[key], id:key})
        }
        console.log( questionsArray)
  this.questions =questionsArray
 })
  } 
  
  // deleteProduct(id: string) {
  //   this.questions$=this.store.select(myQuestions)
  //   this.store.dispatch(deleteQuestions({id}));
   
  //  }
}
