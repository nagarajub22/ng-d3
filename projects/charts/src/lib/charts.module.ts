import { NgModule } from '@angular/core';
import { ChartsComponent } from './charts.component';
import { WaterfallComponent } from './waterfall/waterfall.component';



@NgModule({
  declarations: [
    ChartsComponent,
    WaterfallComponent
  ],
  imports: [
  ],
  exports: [
    ChartsComponent,
    WaterfallComponent
  ]
})
export class ChartsModule { }
