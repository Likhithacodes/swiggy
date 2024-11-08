import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

type QuestionCategory = 'Partner Onboarding' | 'Legal' | 'FAQs' | 'Instamart Onboarding';

@Component({
  selector: 'app-help-component',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './helps.component.html',
  styleUrls: ['./helps.component.scss'] 
})
export class HelpsComponent {
  selectedCategory: QuestionCategory = 'Partner Onboarding';

  questions: Record<QuestionCategory, { question: string; answer: string; isOpen: boolean }[]> = {
    'Partner Onboarding': [
      { question: 'What are the mandatory documents needed to list my restaurant on Swiggy?', answer: 'You need a valid FSSAI license, PAN card, GSTIN, and bank account details.', isOpen: false },
      { question: 'I want to opt-out from Google reserve', answer: 'Please contact Swiggy support to assist you with this process.', isOpen: false },
      { question: 'After I submit all documents, how long will it take for my restaurant to go live on Swiggy?', answer: 'It typically takes 24-48 hours for documents to be verified.', isOpen: false },
    ],
    'Legal': [
      { question: 'What are Swiggy’s terms and conditions?', answer: 'Swiggy’s terms and conditions are available on the Swiggy website.', isOpen: false },
      { question: 'How is data privacy handled?', answer: 'Swiggy complies with data privacy regulations to protect your data.', isOpen: false },
    ],
    'FAQs': [
      { question: 'How to track my order?', answer: 'You can track your order in real-time in the Swiggy app.', isOpen: false },
      { question: 'Can I cancel an order?', answer: 'Yes, you can cancel an order before it’s prepared.', isOpen: false },
    ],
    'Instamart Onboarding': [
      { question: 'How do I list my store on Swiggy Instamart?', answer: 'Contact Swiggy’s support team for assistance in onboarding your store.', isOpen: false },
    ]
  };

  // Set selected category when a sidebar button is clicked
  selectCategory(category: QuestionCategory) {
    this.selectedCategory = category;
  }

  // Toggle question answer visibility
  toggleAnswer(question: { question: string; answer: string; isOpen: boolean }) {
    question.isOpen = !question.isOpen;
  }

  // Get categories from the questions object
  get categories(): QuestionCategory[] {
    return Object.keys(this.questions) as QuestionCategory[];
  }
}