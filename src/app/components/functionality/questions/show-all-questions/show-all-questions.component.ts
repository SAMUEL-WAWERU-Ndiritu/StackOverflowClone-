import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Questions } from 'src/app/components/interfaces';
import { AuthService } from 'src/app/Services/auth.service';
import { QuestionsService } from 'src/app/Services/questions.service';
import { AppState } from 'src/app/State/appState';
import { deleteQuestions, getQuestions } from 'src/app/State/Actions/questionsActions';
import { myQuestions } from 'src/app/State/Reducers/questionsReducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-all-questions',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './show-all-questions.component.html',
  styleUrls: ['./show-all-questions.component.css']
})
export class ShowAllQuestionsComponent implements OnInit {

  questions: Questions[] = [];

  constructor(
    public auth: AuthService,
    private router: Router,
    private store: Store<AppState>,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    combineLatest([this.route.queryParams, this.store.select(myQuestions)]).pipe(
      map(([params, questions]) => {
        const questionsArray = [];
        for (const key in questions) {
          if (Object.prototype.hasOwnProperty.call(questions, key)) {
            questionsArray.push({ ...questions[key], id: key });
          }
        }
        return questionsArray;
      })
    ).subscribe(questions => {
      console.log(questions);
      this.questions = questions;
    });
  }

  deleteProduct(id: string): void {
    this.store.dispatch(deleteQuestions({ id }));
  }

  getQuestionLink(questionId: string): string {
    
    if (!isNaN(Number(questionId))) {
      return `singleQuestion/${questionId}`;
    } else {
      // handle the case where questionId is not a valid number
      return '';
    }
  }

}
