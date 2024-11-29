import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { TrainingComponent } from './training/training.component';
import { ReferencesComponent } from './references/references.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PersonalInfoComponent, EducationComponent, WorkComponent, TrainingComponent, ReferencesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'GABMRDS - CV';
}

