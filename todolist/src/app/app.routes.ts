import { Routes } from '@angular/router';
import { FormValidationPageComponent } from './form-validation-page/form-validation-page.component';
import { FormValidationTemplateComponent } from './form-validation-template/form-validation-template.component';

export const routes: Routes = [
  {
    path: 'templateFormValidation',
    component: FormValidationPageComponent,
  },
  {
    path: 'reactiveFormValidation',
    component: FormValidationTemplateComponent,
  },
];
