import { NgModule } from '@angular/core';
import { ErrorFieldComponent } from './components/error-field/error-field.component';
import { CoreModule } from '../../core/core.module';
import { ValidationPipe } from './components/error-field/validation.pipe';

@NgModule({
  declarations: [ErrorFieldComponent, ValidationPipe],
  imports: [CoreModule],
  exports: [ErrorFieldComponent],
})
export class SharedModule {}
