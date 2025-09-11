import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('hidden => visible', [animate('300ms ease-in')]),
      transition('visible => hidden', [animate('300ms ease-out')]),
    ]),
  ],
})
export class ContactComponent {
  contactForm: FormGroup;

  isLoading = false;
  statusMessage = '';
  isSuccess = false;
  showMessage = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  sendEmail() {
    if (this.contactForm.invalid) {
      alert('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    emailjs
      .send(
        'service_4fzxku2',
        'template_oqycitt',
        this.contactForm.value,
        'WCov7Cp_5ROMkutoZ'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('SUCCESS!', result.text);
          this.isLoading = false;
          this.isSuccess = true;
          this.statusMessage = '✅ Email envoyé avec succès !';
          this.showMessage = true;
          this.contactForm.reset();
          this.autoHideMessage();
        },
        (error) => {
          this.isLoading = false;
          this.isSuccess = false;
          this.statusMessage =
            "❌ Erreur lors de l'envoi. Réessayez plus tard.";
          console.error('FAILED...', error.text);
          this.autoHideMessage();
        }
      );
  }

  private autoHideMessage() {
    setTimeout(() => {
      this.showMessage = false;
    }, 4000); // Disparition après 4s
  }
}
