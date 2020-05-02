import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeComponent } from './pages/code/code.component';
import { IntroComponent } from './pages/intro/intro.component';


const routes: Routes = [
  { path: '', component: CodeComponent },
  { path: 'code', component: CodeComponent },
  { path: 'intro', component: IntroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
