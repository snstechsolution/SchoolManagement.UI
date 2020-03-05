import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateRoleComponent } from './role/create-role/create-role.component';
import { ListRoleComponent } from './role/list-role/list-role.component';
import { AssignRoleComponent } from './role/assign-role/assign-role.component';
import { EditRoleComponent } from './role/edit-role/edit-role.component';
import { DeleteRoleComponent } from './role/delete-role/delete-role.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoleService } from 'src/app/services/role.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    CreateRoleComponent,
    ListRoleComponent,
    AssignRoleComponent,
    EditRoleComponent,
    DeleteRoleComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [RoleService],
})
export class AdminModule {}
