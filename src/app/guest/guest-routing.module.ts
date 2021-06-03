import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path:"schedule",
        component:ScheduleComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestRoutingModule { }
