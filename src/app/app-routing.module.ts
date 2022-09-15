import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageelectronicsComponent } from './secondpageelectronics/secondpageelectronics.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  { path: 'food', component: FirstpageComponent },
  { path: 'electronics', component: SecondpageelectronicsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingcomponents = [
  FirstpageComponent,
  SecondpageelectronicsComponent,
];
