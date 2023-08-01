import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './authentication-module/login-component/login-component.component';
import { SuccesPageComponent } from './authentication-module/succes-page/succes-page.component';
import { TabComponent } from './home-module/tab.component';

const routes: Routes = [
{path: 'login', component: LoginComponentComponent}, 
{path: '', redirectTo: 'login', pathMatch: 'full'}, 
{path: 'scheduler', component: TabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
