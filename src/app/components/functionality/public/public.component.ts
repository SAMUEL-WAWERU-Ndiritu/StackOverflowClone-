import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShowAllQuestionsComponent } from "../questions/show-all-questions/show-all-questions.component";
import { FooterComponent } from "../../footer/footer.component";
import { AskQuestionComponent } from "../questions/ask-question/ask-question.component";
import { SingleQuestionComponent } from "../questions/single-question/single-question.component";

@Component({
    selector: 'app-public',
    standalone: true,
    templateUrl: './public.component.html',
    styleUrls: ['./public.component.css'],
    imports: [CommonModule, RouterModule, ShowAllQuestionsComponent, FooterComponent, AskQuestionComponent, SingleQuestionComponent]
})
export class PublicComponent {

}
