import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { Role } from '../models/role.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  private roles: BehaviorSubject<Role[]> = new BehaviorSubject<Role[]>([]);
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  // this property returns all roles as observabele
  get roles$(): Observable<Role[]> {
    if (this.roles.value.length == 0) {
      this.http.get<Role[]>(BASE_URL + 'admin/getRoles').subscribe(res => {
        this.roles.next(res);
      });
    }
    return this.roles.asObservable();
  }

  //  sends role to backend for role creation and add the newly created role to the BehaviourSubject
  createRole(role: string): void {
    const roleObj = { rolename: role };
    this.http.post(BASE_URL + 'admin/createRole', roleObj).subscribe((res: Role) => {
      this.roles.next([...this.roles.value, res]);
      this._snackBar.open(`Role ${res.name} has been created Successfully.`, '', {
        duration: 2000,
        panelClass: ['bg-success'],
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    });
  }
}
