import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValidationTemplateComponent } from './form-validation-template.component';

describe('FormValidationTemplateComponent', () => {
  let component: FormValidationTemplateComponent;
  let fixture: ComponentFixture<FormValidationTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormValidationTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormValidationTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
