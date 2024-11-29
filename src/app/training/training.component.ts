import { Component } from '@angular/core';
import { CertificationsComponent } from '../certifications/certifications.component';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [CertificationsComponent],
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  seminar: seminars [] = [
    {
      title: "SEO Rank and Rise",
      year: "2024"
    },
    {
      title: "Remote: A New Normal Workplace",
      year: "2023"
    }
  ]
}

export interface seminars{
  title: string;
  year: string;
}