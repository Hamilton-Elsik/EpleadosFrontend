import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/portafolio', pathMatch: 'full' },
  { path: 'home', component: BaseLayoutComponent, children:[
    {
      path: 'portafolio',
      loadChildren: () => import('./home/home/home.module').then(m => m.HomeModule)
    },
  ]
},
  { path: '**', redirectTo: 'home/portafolio', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
