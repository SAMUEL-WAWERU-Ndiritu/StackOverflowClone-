import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { StoreModule } from '@ngrx/store'; 
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './State/Reducers/user.reducer';
import { UserEffects } from './State/Effects/user.effects';
import{HttpClientModule} from "@angular/common/http";
import { EditorModule } from '@tinymce/tinymce-angular';

import { questionsReducer } from './State/Reducers/questionsReducer';
import { QuestionsEffect } from './State/Effects/questionsEffects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CounterReducer } from './State/Reducers/countReducer';

@NgModule({
    declarations: [
        AppComponent,
    
    ],
    providers: [],
    bootstrap: [AppComponent,],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeComponent,
        NavbarComponent,
        HttpClientModule,
        EditorModule,
        FooterComponent,
        StoreModule.forRoot({ users:userReducer, Questions: questionsReducer,counter:CounterReducer,}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        EffectsModule.forRoot([UserEffects,QuestionsEffect]),  
      
       
    ]
})
export class AppModule { }
