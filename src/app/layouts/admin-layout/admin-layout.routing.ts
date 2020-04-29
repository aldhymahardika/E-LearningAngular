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
import { UploadUjianComponent } from 'src/app/pages/upload-ujian/upload-ujian.component';
import { MateriComponent } from 'src/app/pages/materi/materi.component';
import { EnrolComponent } from 'src/app/pages/enrol/enrol.component';
import { TopicMateriComponent } from 'src/app/pages/topic-materi/topic-materi.component';
import { UserScoreComponent } from 'src/app/pages/user-score/user-score.component';
import { Component } from '@angular/core';
import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { AdminPengajarComponent } from 'src/app/pages/admin-pengajar/admin-pengajar.component';
import { AdminPesertaComponent } from 'src/app/pages/admin-peserta/admin-peserta.component';
import { AdminListPengajarComponent } from 'src/app/pages/admin-list-pengajar/admin-list-pengajar.component';
import { AdminListPesertaComponent } from 'src/app/pages/admin-list-peserta/admin-list-peserta.component';
import { AdminMateriComponent } from 'src/app/pages/admin-materi/admin-materi.component';
import { AdminKelasComponent } from 'src/app/pages/admin-kelas/admin-kelas.component';
import { AdminTopicComponent } from 'src/app/pages/admin-topic/admin-topic.component';
import { LoadingComponent } from 'src/app/pages/loading/loading.component';
import { UserKuisComponent } from 'src/app/pages/user-kuis/user-kuis.component';
import { MateriPengajarComponent } from 'src/app/pages/materi-pengajar/materi-pengajar.component';
import { AbsenComponent } from 'src/app/pages/absen/absen.component';
import { ListMateriComponent } from 'src/app/pages/list-materi/list-materi.component';
import { ListFileComponent } from 'src/app/pages/list-file/list-file.component';
import { DetailMateriComponent } from 'src/app/pages/detail-materi/detail-materi.component';
import { DetailUjianComponent } from 'src/app/pages/detail-ujian/detail-ujian.component';
import { DetailFileComponent } from 'src/app/pages/detail-file/detail-file.component';
import { DetailFileUjianComponent } from 'src/app/pages/detail-file-ujian/detail-file-ujian.component';
import { KelasComponent } from 'src/app/pages/kelas/kelas.component';
import { ReportInputComponent } from 'src/app/pages/report-input/report-input.component';
import { JadwalPesertaComponent } from 'src/app/pages/jadwal-peserta/jadwal-peserta.component';
import { KelasUserComponent } from 'src/app/pages/kelas-user/kelas-user.component';
import { UserClassComponent } from 'src/app/pages/user-class/user-class.component';
import { ListUjianComponent } from 'src/app/pages/list-ujian/list-ujian.component';
// import { Component } from '@angular/core';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'icons',          component: IconsComponent },

    //path admin
    { path: 'admin',              component: AdminComponent },
    { path: 'admin-pengajar',     component: AdminPengajarComponent },
    { path: 'admin-peserta',      component: AdminPesertaComponent },
    { path: 'admin-listPengajar', component: AdminListPengajarComponent },
    { path: 'admin-listPeserta',  component: AdminListPesertaComponent },
    { path: 'admin-materi',       component: AdminMateriComponent },
    { path: 'admin-kelas',        component: AdminKelasComponent },
    { path: 'admin-topic',        component: AdminTopicComponent },

    //path pengajar
    { path: 'upload',             component: UploadComponent }, 
    { path: 'upload-materi',      component: UploadMateriComponent },
    { path: 'upload-ujian',       component: UploadUjianComponent },
    { path: 'tables-materi',      component: TablesMateriComponent },
    { path: 'tables-report',      component: TablesReportComponent },
    { path: 'report-user',        component: ReportUserComponent },
    { path: 'materi-pengajar',    component: MateriPengajarComponent },
    { path: 'list-materi',        component: ListMateriComponent },
    { path: 'list-file',          component: ListFileComponent },
    { path: 'list-ujian',         component: ListUjianComponent },
    { path: 'detail-materi',      component: DetailMateriComponent },
    { path: 'detail-file',        component: DetailFileComponent },
    { path: 'detail-ujian',       component: DetailUjianComponent },
    { path: 'detail-file-ujian',  component: DetailFileUjianComponent },
    { path: 'kelas',              component: KelasComponent },
    { path: 'report-input',       component: ReportInputComponent },
    { path: 'jadwal-peserta',     component: JadwalPesertaComponent },
    // { path: 'upload-update',   component: UploadUpdateComponent},

    //path peserta
    { path: 'materi',             component: MateriComponent },
    { path: 'tables',             component: TablesComponent },
    { path: 'enrol',              component: EnrolComponent },
    { path: 'user',               component: UserComponent },
    { path: 'user-upload',        component: UserUploadComponent},
    { path: 'topic-materi',       component: TopicMateriComponent },
    { path: 'user-score',         component: UserScoreComponent },
    { path: 'loading',            component: LoadingComponent},
    { path: 'user-kuis',          component: UserKuisComponent},
    { path: 'absen',              component: AbsenComponent},
    { path: 'kelas-user',         component: KelasUserComponent },
    { path: 'user-score',         component: UserScoreComponent },
    { path: 'user-class',         component: UserClassComponent},
    
];
