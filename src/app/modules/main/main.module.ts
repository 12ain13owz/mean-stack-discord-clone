import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { MainRoutingModule } from './main.routes';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [CoreModule, MainRoutingModule],
})
export class MainModule {}
