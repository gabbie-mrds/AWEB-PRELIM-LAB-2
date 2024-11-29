import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  cert: certifications [] =[
    {
      certName: "Cisco Certification in Cybersecurit Essentials",
      year: "2024"
    },
    {
      certName: "Cisco Certification in Introduction to Networks",
      year: "2023/2024"
    },
    {
      certName: "CompTia ITF+",
      year: "2023"
    }
  ]
}

export interface certifications {
  certName: string;
  year: string;

}
