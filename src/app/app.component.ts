import { Component, OnInit, } from '@angular/core';
import { AppState } from './State/appState';
import { Store } from '@ngrx/store';
import * as UsersActions from './State/Actions/user.actions';
import * as QuestionsActions from './State/Actions/questionsActions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // questions$: Question[] = [];

  constructor(private store: Store<AppState>) {

    
  }

  ngOnInit(): void {
    this.store.dispatch(QuestionsActions.getQuestions());
    this.store.dispatch(UsersActions.loadUser());
    // this.store.dispatch(TagsActions.loadTags());
    // this.store.dispatch(CompaniesActions.loadCompanies());
  }
}