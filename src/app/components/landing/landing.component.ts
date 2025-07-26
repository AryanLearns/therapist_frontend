import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="landing-container">
      <div class="kims-header">
        <div class="kims-logo">
          <div class="logo-icon">🏥</div>
          <div class="logo-text">KIMSHEALTH</div>
        </div>
        <div class="header-message">
          <p>Share your experience with us! We value your feedback to enhance our services and provide the best care possible. Your input is essential in helping KIMS improve and serve you better.</p>
        </div>
      </div>
      <div class="content-wrapper">
        <div class="cta-section">
          <button 
            class="start-feedback-button" 
            (click)="startFeedback()"
          >
            Start Feedback Survey
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router: Router) {}

  startFeedback() {
    this.router.navigate(['/feedback']);
  }
}