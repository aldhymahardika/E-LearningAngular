import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { UploadComponent } from '../../pages/upload/upload.component';
import { UploadMateriComponent } from '../../pages/upload-materi/upload-materi.component';
import { TablesMateriComponent } from '../../pages/tables-materi/tables-materi.component';
import { TablesReportComponent } from '../../pages/tables-report/tables-report.component';
import { ReportUserComponent } from 'src/app/pages/report-user/report-user.component';
import { UserComponent } from '../../pages/user/user.component';
import { UserUploadComponent } from 'src/app/pages/user-upload/user-upload.component';
import { UploadUpdateComponent } from 'src/app/pages/upload-update/upload-update.component';
import { MateriComponent } from 'src/app/pages/materi/materi.component';
// import { Component } from '@angular/core';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'upload',         component: UploadComponent },
    { path: 'upload-materi',  component: UploadMateriComponent },
    { path: 'table-materi',   component: TablesMateriComponent },
    { path: 'table-report',   component: TablesReportComponent },
    { path: 'report-user',    component: ReportUserComponent },
    { path: 'user',           component: UserComponent },
    { path: 'user-upload',    component: UserUploadComponent},
    { path: 'upload-update',  component: UploadUpdateComponent},
    { path: 'materi',         component: MateriComponent }
    // { path: 'maps',           component: MapsComponent }
];
