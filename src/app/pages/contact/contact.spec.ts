import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty form', () => {
    expect(component.contactForm).toBeDefined();
    expect(component.contactForm.get('name')?.value).toBe('');
    expect(component.contactForm.get('email')?.value).toBe('');
    expect(component.contactForm.get('subject')?.value).toBe('');
    expect(component.contactForm.get('message')?.value).toBe('');
  });

  it('should validate required fields', () => {
    component.contactForm.patchValue({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    expect(component.contactForm.valid).toBeFalsy();
  });

  it('should validate email format', () => {
    component.contactForm.patchValue({
      name: 'Test User',
      email: 'invalid-email',
      subject: 'Test Subject',
      message: 'Test message with enough characters'
    });

    expect(component.contactForm.get('email')?.errors?.['email']).toBeTruthy();
  });

  it('should validate minimum lengths', () => {
    component.contactForm.patchValue({
      name: 'A',
      subject: 'Test',
      message: 'Short'
    });

    expect(component.contactForm.get('name')?.errors?.['minlength']).toBeTruthy();
    expect(component.contactForm.get('subject')?.errors?.['minlength']).toBeTruthy();
    expect(component.contactForm.get('message')?.errors?.['minlength']).toBeTruthy();
  });

  it('should accept valid form data', () => {
    component.contactForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject Here',
      message: 'This is a test message with more than 10 characters'
    });

    expect(component.contactForm.valid).toBeTruthy();
  });

  it('should reset form after successful submission', () => {
    component.contactForm.patchValue({
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject Here',
      message: 'This is a test message with more than 10 characters'
    });

    component.onSubmit();

    expect(component.submitSuccess).toBeTruthy();
    expect(component.contactForm.get('name')?.value).toBe('');
    expect(component.contactForm.get('email')?.value).toBe('');
  });
});