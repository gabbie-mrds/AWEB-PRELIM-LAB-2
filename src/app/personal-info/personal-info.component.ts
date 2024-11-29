import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  name: string ="Gabrielle Mae Rose S. Delos Santos";
  course: string = "Web Development Student";
  email: string = "gabmrds@gmail.com";
  phNum: string = "+63 929-819-3934";
}
