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
@Component({
  selector: 'app-show-all-questions',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './show-all-questions.component.html',
  styleUrls: ['./show-all-questions.component.css']
})
export class ShowAllQuestionsComponent implements OnInit {
  questions$!:Observable<Questions[]>;
  
  questions: { id: string; Id: string; Title: string; Body: string; Tags: string; Date: string; }[] | undefined;

  // questions$:Questions[]=[];
  constructor(public auth:AuthService, private router:Router, private store:Store<any>, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params:Params)=>{
   // this.bookingService.getUserBooking()
     this.questions$=this.store.select(myQuestions)
     this.store.dispatch(getQuestions());
     this.questions$.pipe(map(x=>{
        let questionsArray=[]
        for(let key in x){
          questionsArray.push({...x[key], id:key})
        }
        return questionsArray
      })).subscribe(question=>{
        this.questions =question
      })
  
  
    })
 
  } 
  
  // deleteProduct(id: string) {
  //   this.questions$=this.store.select(myQuestions)
  //   this.store.dispatch(deleteQuestions({id}));
   
  //  }
}
