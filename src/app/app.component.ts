import { Component, OnInit, } from '@angular/core';
import { AppState } from './State/appState';
import { Store } from '@ngrx/store';
import * as UsersActions from './State/Actions/user.actions';
import * as AnswersActions from './State/Actions/answersAction';
import * as QuestionsActions from './State/Actions/questionsActions';
import { Questions, User } from './components/interfaces';
// import * counterActions from './State/Actions/counterAction'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  questions$: Questions[] = [];
  user$: User[] = [];
  constructor(private store: Store<AppState>) {

    
  }

  ngOnInit(): void {
    this.store.dispatch(QuestionsActions.getQuestions());
    this.store.dispatch(AnswersActions.getAnswers());
    this.store.dispatch(UsersActions.loadUser());
    // this.store.dispatch(TagsActions.loadTags());
    // this.store.dispatch(CompaniesActions.loadCompanies());
  }
}