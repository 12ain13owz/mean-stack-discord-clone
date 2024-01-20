import { NgModule } from '@angular/core';
import { ErrorFieldComponent } from './components/error-field/error-field.component';
import { CoreModule } from '../../core/core.module';
import { ValidationPipe } from './components/error-field/validation.pipe';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  declarations: [ErrorFieldComponent, ValidationPipe, DialogComponent],
  imports: [CoreModule],
  exports: [ErrorFieldComponent, DialogComponent],
})
export class SharedModule {}
