import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { ResultsComponent } from './components/results/results.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'feedback', component: FeedbackFormComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: '' }
];