import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CadastrarComponent } from './components/views/cadastrar/cadastrar.component';
import { ListarComponent } from './components/views/listar/listar.component'; 


const routes: Routes = [
  {
    path: 'produto/cadastrar',
    component: CadastrarComponent
  },
  {
    path: '',
    component: ListarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }