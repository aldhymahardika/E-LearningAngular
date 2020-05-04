import { AuthGuard } from './../../guard/auth.guard';
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
    { path: 'admin',              component: AdminComponent,
        canActivate : [AuthGuard],
        data : {
            expectedRole : 'ROLE_ADMIN'
            }
    },
    { path: 'admin-pengajar',     component: AdminPengajarComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_ADMIN'
        }
    },
    { path: 'admin-peserta',      component: AdminPesertaComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_ADMIN'
        }
    },
    { path: 'admin-listPengajar', component: AdminListPengajarComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_ADMIN'
        }
    },
    { path: 'admin-listPeserta',  component: AdminListPesertaComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_ADMIN'
        }
    },
    { path: 'admin-materi',       component: AdminMateriComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_ADMIN'
        }
    },
    { path: 'admin-kelas',        component: AdminKelasComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_ADMIN'
        }
    },
    { path: 'admin-topic',        component: AdminTopicComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_ADMIN'
        }
    },

    //---------------------------------------------------------------------------

    //path pengajar
    { path: 'upload',             component: UploadComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    }, 
    { path: 'upload-materi',      component: UploadMateriComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'upload-ujian',       component: UploadUjianComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'tables-materi',       component: TablesMateriComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'tables-report',       component: TablesReportComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'report-user',        component: ReportUserComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'materi-pengajar',    component: MateriPengajarComponent 
    ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'list-materi',        component: ListMateriComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'list-file',          component: ListFileComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'list-ujian',         component: ListUjianComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'detail-materi',      component: DetailMateriComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'detail-file',        component: DetailFileComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'detail-ujian',       component: DetailUjianComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'detail-file-ujian',  component: DetailFileUjianComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'kelas',              component: KelasComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    { path: 'report-input',       component: ReportInputComponent 
    ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_PENGAJAR'
        }
    },
    // { path: 'upload-update',   component: UploadUpdateComponent},

    //---------------------------------------------------------------------------

    //path peserta
    { path: 'materi',             component: MateriComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        }   
    },
    { path: 'tables',             component: TablesComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        } 
    },
    { path: 'enrol',              component: EnrolComponent,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        }  
    },
    { path: 'user',               component: UserComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        } 
    },
    { path: 'user-upload',        component: UserUploadComponent,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        } 
    },
    { path: 'topic-materi',       component: TopicMateriComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        } 
    },
    { path: 'user-score',         component: UserScoreComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        } 
    },
    { path: 'loading',            component: LoadingComponent,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        } 
    },
    { path: 'user-kuis',          component: UserKuisComponent,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        } 
    },
    { path: 'absen',              component: AbsenComponent,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        } 
    },
    { path: 'kelas-user',         component: KelasUserComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        } 
    },
    { path: 'user-score',         component: UserScoreComponent ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        } 
    },
    { path: 'user-class',         component: UserClassComponent,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        } 
    },
    { path: 'jadwal-peserta',     component: JadwalPesertaComponent 
    ,
    canActivate : [AuthGuard],
    data : {
        expectedRole : 'ROLE_USER'
        }
    },
    
];
