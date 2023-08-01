import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './authentication/login-component/login-component.component';
import { SuccesPageComponent } from './authentication/succes-page/succes-page.component';

const routes: Routes = [
{path: 'login', component: LoginComponentComponent}, 
{path: '', redirectTo: 'login', pathMatch: 'full'}, 
{path: 'scheduler', component: SuccesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
