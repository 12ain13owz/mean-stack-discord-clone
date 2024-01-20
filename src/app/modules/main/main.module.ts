import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { MainRoutingModule } from './main.routes';
import { MainComponent } from './main.component';
import { ServerComponent } from './components/server/server.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [MainComponent, ServerComponent],
  imports: [CoreModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
