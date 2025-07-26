import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface FeedbackData {
  personalInfo: {
    name: string;
    mrNumber: string;
    mobileNumber: string;
    emailId: string;
    coordinator: string;
  };
  ratings: {
    overallSatisfaction: number;
    recommendationScore: number;
    kimsWebsiteScheduling: number;
    kimsCallCenterScheduling: number;
    psychiatryBehaviourMedicine: number;
    neurology: number;
    pharmacy: number;
  };
  additionalComments: string;
}

@Component({
  selector: 'app-feedback-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-container">
      <div class="form-wrapper">
        <!-- KIMS Header -->
        <div class="kims-header">
          <div class="kims-logo">
            <div class="logo-icon">🏥</div>
            <div class="logo-text">KIMSHEALTH</div>
          </div>
          <div class="header-message">
            <p>Share your experience with us! We value your feedback to enhance our services and provide the best care possible. Your input is essential in helping KIMS improve and serve you better.</p>
          </div>
        </div>

        <form (ngSubmit)="onSubmit()" #feedbackForm="ngForm" class="feedback-form">
          <!-- Personal Information Section -->
          <div class="form-section">
            <div class="form-group">
              <label for="name">Name <span class="required">*</span></label>
              <div class="input-wrapper">
                <span class="input-icon">👤</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="formData.personalInfo.name"
                  placeholder="Enter your full name"
                  required
                  class="form-input"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="mrNumber">MR Number <span class="required">*</span></label>
              <div class="input-wrapper">
                <span class="input-icon">🔗</span>
                <input
                  type="text"
                  id="mrNumber"
                  name="mrNumber"
                  [(ngModel)]="formData.personalInfo.mrNumber"
                  value="005163025"
                  required
                  class="form-input"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="mobileNumber">Mobile number <span class="required">*</span></label>
              <div class="input-wrapper phone-wrapper">
                <select class="country-code">
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  [(ngModel)]="formData.personalInfo.mobileNumber"
                  placeholder="Enter your mobile number"
                  required
                  class="form-input phone-input"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="emailId">Email ID</label>
              <div class="input-wrapper">
                <span class="input-icon">🌐</span>
                <input
                  type="email"
                  id="emailId"
                  name="emailId"
                  [(ngModel)]="formData.personalInfo.emailId"
                  placeholder="Your email id registered with KIMS Healthcare"
                  class="form-input"
                >
              </div>
            </div>

            <div class="form-group">
              <label for="coordinator">Coordinator</label>
              <div class="input-wrapper">
                <span class="input-icon">ℹ️</span>
                <input
                  type="text"
                  id="coordinator"
                  name="coordinator"
                  [(ngModel)]="formData.personalInfo.coordinator"
                  placeholder="Please enter your Co-ordinator Name"
                  class="form-input"
                >
              </div>
            </div>
          </div>

          <!-- Rating Questions -->
          <div class="rating-section">
            <!-- Overall Satisfaction -->
            <div class="rating-question">
              <label>How satisfied are you with our services at KIMSHEALTH? <span class="required">*</span></label>
              <div class="emoji-rating">
                <div 
                  *ngFor="let emoji of emojiRatings; let i = index"
                  class="emoji-option"
                  [class.selected]="formData.ratings.overallSatisfaction === i + 1"
                  (click)="setRating('overallSatisfaction', i + 1)"
                >
                  {{ emoji }}
                </div>
              </div>
            </div>

            <!-- Recommendation Score -->
            <div class="rating-question">
              <label>How likely are you to recommend KIMS to your friends and family? <span class="required">*</span></label>
              <div class="number-rating">
                <div 
                  *ngFor="let num of numberRatings; let i = index"
                  class="number-option"
                  [class.selected]="formData.ratings.recommendationScore === num"
                  [class]="getNumberClass(num)"
                  (click)="setRating('recommendationScore', num)"
                >
                  {{ num }}
                </div>
              </div>
            </div>

            <!-- KIMS Website Scheduling -->
            <div class="rating-question">
              <label>Convenience of scheduling appointments through KIMS Website.</label>
              <div class="emoji-rating">
                <div 
                  *ngFor="let emoji of emojiRatings; let i = index"
                  class="emoji-option"
                  [class.selected]="formData.ratings.kimsWebsiteScheduling === i + 1"
                  (click)="setRating('kimsWebsiteScheduling', i + 1)"
                >
                  {{ emoji }}
                </div>
              </div>
            </div>

            <!-- KIMS Call Center Scheduling -->
            <div class="rating-question">
              <label>Convenience of scheduling appointments through KIMS call center.</label>
              <div class="emoji-rating">
                <div 
                  *ngFor="let emoji of emojiRatings; let i = index"
                  class="emoji-option"
                  [class.selected]="formData.ratings.kimsCallCenterScheduling === i + 1"
                  (click)="setRating('kimsCallCenterScheduling', i + 1)"
                >
                  {{ emoji }}
                </div>
              </div>
            </div>

            <!-- Dr.Susha John PSYCHIATRY & BEHAVIOUR MEDICINE -->
            <div class="rating-question">
              <label>Dr.Susha John PSYCHIATRY & BEHAVIOUR MEDICINE.</label>
              <div class="emoji-rating">
                <div 
                  *ngFor="let emoji of emojiRatings; let i = index"
                  class="emoji-option"
                  [class.selected]="formData.ratings.psychiatryBehaviourMedicine === i + 1"
                  (click)="setRating('psychiatryBehaviourMedicine', i + 1)"
                >
                  {{ emoji }}
                </div>
              </div>
            </div>

            <!-- Dr.Syamlal SNEUROLOGY -->
            <div class="rating-question">
              <label>Dr.Syamlal SNEUROLOGY.</label>
              <div class="emoji-rating">
                <div 
                  *ngFor="let emoji of emojiRatings; let i = index"
                  class="emoji-option"
                  [class.selected]="formData.ratings.neurology === i + 1"
                  (click)="setRating('neurology', i + 1)"
                >
                  {{ emoji }}
                </div>
              </div>
            </div>

            <!-- Pharmacy -->
            <div class="rating-question">
              <label>Pharmacy</label>
              <div class="emoji-rating">
                <div 
                  *ngFor="let emoji of emojiRatings; let i = index"
                  class="emoji-option"
                  [class.selected]="formData.ratings.pharmacy === i + 1"
                  (click)="setRating('pharmacy', i + 1)"
                >
                  {{ emoji }}
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Comments -->
          <div class="form-section">
            <div class="form-group">
              <label for="additionalComments">Please provide any additional comments or feedback in the space below.</label>
              <textarea
                id="additionalComments"
                name="additionalComments"
                [(ngModel)]="formData.additionalComments"
                placeholder="Your comments and suggestions are valuable to us. Please share your thoughts here."
                rows="4"
                class="form-textarea"
              ></textarea>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="form-actions">
            <button
              type="submit"
              class="submit-button"
              [disabled]="!isFormValid()"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {
  formData: FeedbackData = {
    personalInfo: {
      name: '',
      mrNumber: '005163025',
      mobileNumber: '',
      emailId: '',
      coordinator: ''
    },
    ratings: {
      overallSatisfaction: 0,
      recommendationScore: 0,
      kimsWebsiteScheduling: 0,
      kimsCallCenterScheduling: 0,
      psychiatryBehaviourMedicine: 0,
      neurology: 0,
      pharmacy: 0
    },
    additionalComments: ''
  };

  emojiRatings = ['😡', '😔', '😐', '😊', '😍'];
  numberRatings = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  constructor(private router: Router) {}

  setRating(category: string, rating: number) {
    (this.formData.ratings as any)[category] = rating;
  }

  getNumberClass(num: number): string {
    if (num <= 3) return 'red';
    if (num <= 6) return 'orange';
    if (num <= 8) return 'yellow';
    return 'green';
  }

  isFormValid(): boolean {
    return !!(
      this.formData.personalInfo.name &&
      this.formData.personalInfo.mrNumber &&
      this.formData.personalInfo.mobileNumber &&
      this.formData.ratings.overallSatisfaction > 0 &&
      this.formData.ratings.recommendationScore > 0
    );
  }

  onSubmit() {
    if (this.isFormValid()) {
      console.log('Feedback submitted:', this.formData);
      this.router.navigate(['/results'], { 
        state: { feedbackData: this.formData } 
      });
    }
  }
}