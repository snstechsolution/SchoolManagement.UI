import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css'],
})
export class CreateRoleComponent implements OnInit {
  roleFromControl: FormControl;
  constructor(public dialogRef: MatDialogRef<CreateRoleComponent>) {}

  ngOnInit(): void {
    this.roleFromControl = new FormControl('', Validators.required);
  }

  closeDialog(): void {
    console.log();
    this.dialogRef.close();
  }

  onclickCreateRole(): void {
    this.dialogRef.close(this.roleFromControl.value);
  }
}
