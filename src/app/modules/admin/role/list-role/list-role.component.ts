import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateRoleComponent } from '../create-role/create-role.component';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/role.model';
import { EditRoleComponent } from '../edit-role/edit-role.component';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.css'],
})
export class ListRoleComponent implements OnInit {
  constructor(public dialog: MatDialog, public roleSvc: RoleService) {}
  roles: Role[];
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {
    this.roleSvc.roles$.subscribe(res => {
      this.roles = res;
    });
  }

  //  Craeate New Role Method
  openCreateRoleDialog(): void {
    const dialogRef = this.dialog.open(CreateRoleComponent, {
      width: '400px',
      minHeight: '400px',
    });

    // here we get the role to be created from DialogClosing as string
    dialogRef.afterClosed().subscribe((res: string) => {
      console.log(res);
      // for checking if the user closed the dialog without creating role
      if (res !== null && res !== undefined) {
        this.roleSvc.createRole(res);
      }
    });
  }

  openEditRoleDialog(role: Role): void {
    const dialogRef = this.dialog.open(EditRoleComponent, {
      width: '400px',
      minHeight: '400px',
      data: role,
    });
  }
}
