import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Role } from 'src/app/models/role.model';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css'],
})
export class EditRoleComponent implements OnInit {
  roleFromControl: FormControl;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Role, public dialogRef: MatDialogRef<EditRoleComponent>) {}

  ngOnInit(): void {
    this.roleFromControl = new FormControl(this.data.name, Validators.required);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  onclickEditRole(): void {
    // check if the user edited anything or is it like the same data
    if (this.data.name === this.roleFromControl.value) {
      //return no data to the opener of dialog
      this.dialogRef.close();
    } else {
      // send edited Role object back to dialog opener
      const role: Role = { id: this.data.id, name: this.roleFromControl.value };
      this.dialogRef.close(role);
    }
  }
}
