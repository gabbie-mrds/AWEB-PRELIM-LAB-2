import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educ: education[] = [
    {
      schLevel: "College",
      school: "Holy Angel University",
      years: "2022 - Present",
    },
    {
      schLevel: "Senior High School",
      school: "New Era University - Pampanga Branch",
      years: "2020 - 2022",
    },
    {
      schLevel: "Junior High School",
      school: "Republic Central Colleges",
      years: "2016 - 2020",
    },
    {
      schLevel: "Elementary",
      school: "Achievers Special Education Center",
      years: "2007 - 2016",
    },
  ]
}
export interface education {
  school: string;
  years: string;
  schLevel: string;
}
