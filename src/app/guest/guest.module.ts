import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { MainComponent } from './main/main.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    MainComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    GuestRoutingModule
  ]
})
export class GuestModule { }
