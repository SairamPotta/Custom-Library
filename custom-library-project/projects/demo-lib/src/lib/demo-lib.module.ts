import { NgModule } from '@angular/core';
import { DemoLibComponent } from './demo-lib.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
  ],
  declarations: [
    DemoLibComponent,
    HeaderComponent
  ],
  exports: [
    DemoLibComponent,
    HeaderComponent
  ]
})
export class DemoLibModule { }
