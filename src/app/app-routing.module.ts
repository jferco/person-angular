import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OtherComponent } from './components/other/other.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'other', component: OtherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
