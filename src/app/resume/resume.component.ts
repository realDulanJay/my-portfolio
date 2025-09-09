import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent {
  isEducationOpen: boolean = false;
  isProfessionalExperienceOpen: boolean = false;
  isSkillsOpen: boolean = false;
  isVolunteerExperienceOpen: boolean = false;
  isCertificationsOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Dulan Jayawickrama - Resume');
  }

  downloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/pdf/cv_dulan_jayawickrama.pdf');
    link.setAttribute('download', 'cv_dulan_jayawickrama.pdf');
    link.click();
    link.remove();
  }
}
