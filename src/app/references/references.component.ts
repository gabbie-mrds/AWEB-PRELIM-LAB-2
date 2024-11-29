import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  ref: reference [] = [
    {
      profName: "Carisma Caro",
      position: "IT Program Chair - Holy Angel University", 
      email: "ccarisma@hau.edu.ph"
    },
    {
      profName: "Chris Almocera",
      position: "Practicum Coordinator - Holy Angel University", 
      email: "calmocera@hau.edu.ph"
    }

  ]
}

export interface reference{
  profName: string;
  position: string;
  email: string;
}
