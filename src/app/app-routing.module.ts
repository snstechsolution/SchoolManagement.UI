import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { HomeComponent } from './layouts/site-layout/home/home.component';
import { AboutUsComponent } from './layouts/site-layout/about-us/about-us.component';
import { AcademicComponent } from './layouts/site-layout/academic/academic.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { TopNavbarComponent } from './shared/top-navbar/top-navbar.component';
import { FooterAreaComponent } from './shared/footer-area/footer-area.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SiteLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'aboutus', component: AboutUsComponent },
      { path: 'academic', component: AcademicComponent },
    ],
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'user',
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule),
      },
    ],
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
      { path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routeComponents = [
  SiteLayoutComponent,
  HomeComponent,
  AboutUsComponent,
  AcademicComponent,
  AppLayoutComponent,
  TopNavbarComponent,
  FooterAreaComponent,
];
