import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListRoleComponent } from './role/list-role/list-role.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'roles', component: ListRoleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
