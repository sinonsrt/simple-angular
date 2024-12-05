import { RouterModule, Routes } from '@angular/router';
import { WorldPageComponent } from './pages/world-page/world-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'world-page',
    component: WorldPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
