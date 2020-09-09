import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
  {
    path:'', pathMatch:'full', component:HomeComponent
  },

  {
    path:'contact', component:ContactComponent
  },

  {
    path:'users', loadChildren:()=> import('./users/users.module').then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
