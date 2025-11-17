import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;
  submitSuccess = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.submitted = true;
    
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.submitSuccess = true;
      this.contactForm.reset();
      this.submitted = false;
      
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5000);
    }
  }

  get f() {
    return this.contactForm.controls;
  }
}