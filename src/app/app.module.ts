import { AuthGuard } from './guard/auth.guard';
import { authInterceptorProviders } from './layouts/_helper/auth.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { TablesReportComponent } from './pages/tables-report/tables-report.component';
import { UploadComponent } from './pages/upload/upload.component';
import {AccordionModule} from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import {TabViewModule} from 'primeng/tabview';
import {RadioButtonModule} from 'primeng/radiobutton'
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { DataTablesModule } from 'angular-datatables';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {SplitButtonModule, SplitButton} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {ProgressBarModule} from 'primeng/progressbar';


import { UploadMateriComponent } from './pages/upload-materi/upload-materi.component';
import { TablesMateriComponent } from './pages/tables-materi/tables-materi.component';
import { ReportUserComponent } from './pages/report-user/report-user.component';
import { ReportInputComponent } from './pages/report-input/report-input.component';
import { UserUploadComponent } from './pages/user-upload/user-upload.component';
import { UserComponent } from './pages/user/user.component';
import { ListPengajarComponent } from './pages/list-pengajar/list-pengajar.component';
import { ListPesertaComponent } from './pages/list-peserta/list-peserta.component';
import { UploadUjianComponent } from './pages/upload-ujian/upload-ujian.component';
import { MateriComponent } from './pages/materi/materi.component';
import { EnrolComponent } from './pages/enrol/enrol.component';
import { TopicMateriComponent } from './pages/topic-materi/topic-materi.component';
import { UserScoreComponent } from './pages/user-score/user-score.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminPengajarComponent } from './pages/admin-pengajar/admin-pengajar.component';
import { AdminPesertaComponent } from './pages/admin-peserta/admin-peserta.component';
import { AdminMateriComponent } from './pages/admin-materi/admin-materi.component';
import { AdminTopicComponent } from './pages/admin-topic/admin-topic.component';
import { AdminKelasComponent } from './pages/admin-kelas/admin-kelas.component';
import { AdminListPengajarComponent } from './pages/admin-list-pengajar/admin-list-pengajar.component';
import { AdminListPesertaComponent } from './pages/admin-list-peserta/admin-list-peserta.component';
import { LoadingComponent } from './pages/loading/loading.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { UserKuisComponent } from './pages/user-kuis/user-kuis.component';
import { MateriPengajarComponent } from './pages/materi-pengajar/materi-pengajar.component';
import { AbsenComponent } from './pages/absen/absen.component';
import { ListMateriComponent } from './pages/list-materi/list-materi.component';
import { DetailMateriComponent } from './pages/detail-materi/detail-materi.component';
import { ListFileComponent } from './pages/list-file/list-file.component';
import { DetailFileComponent } from './pages/detail-file/detail-file.component';
import { DetailUjianComponent } from './pages/detail-ujian/detail-ujian.component';
import { DetailFileUjianComponent } from './pages/detail-file-ujian/detail-file-ujian.component';
import { KelasComponent } from './pages/kelas/kelas.component';
import { KelasUserComponent } from './pages/kelas-user/kelas-user.component';
import { JadwalPesertaComponent } from './pages/jadwal-peserta/jadwal-peserta.component';
import { UserClassComponent } from './pages/user-class/user-class.component';
import { ListUjianComponent } from './pages/list-ujian/list-ujian.component';
import { ReportJadwalComponent } from './pages/report-jadwal/report-jadwal.component';
import { ReportMenuComponent } from './pages/report-menu/report-menu.component';
import { ReportJadwalMataPelajaranComponent } from './pages/report-jadwal-mata-pelajaran/report-jadwal-mata-pelajaran.component';
import { ReportPesertaComponent } from './pages/report-peserta/report-peserta.component';
import { ReportMenuPengajarComponent } from './pages/report-menu-pengajar/report-menu-pengajar.component';
import { ReportNilaiPesertaComponent } from './pages/report-nilai-peserta/report-nilai-peserta.component';
import { JadwalPengajarComponent } from './pages/jadwal-pengajar/jadwal-pengajar.component';
import { ReportNilaiPengajarComponent } from './pages/report-nilai-pengajar/report-nilai-pengajar.component';
import { ReportAbsenPengajarComponent } from './pages/report-absen-pengajar/report-absen-pengajar.component';
import { DashboardPesertaComponent } from './pages/dashboard-peserta/dashboard-peserta.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    AccordionModule,
    DropdownModule,
    TabViewModule,
    RadioButtonModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    InputTextareaModule,
    ConfirmDialogModule,
    DataTablesModule,
    ProgressSpinnerModule,
    SplitButtonModule,
    ButtonModule,
    CalendarModule,
    TableModule,
    ProgressBarModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    TablesReportComponent,
    UploadComponent,
    UploadMateriComponent,
    TablesMateriComponent,
    ReportUserComponent,
    ReportInputComponent,
    UserUploadComponent,
    UserComponent,
    ListPengajarComponent,
    ListPesertaComponent,
    UploadUjianComponent,
    MateriComponent,
    EnrolComponent,
    TopicMateriComponent,
    UserScoreComponent,
    AdminComponent,
    AdminPengajarComponent,
    AdminPesertaComponent,
    AdminMateriComponent,
    AdminTopicComponent,
    AdminKelasComponent,
    AdminListPengajarComponent,
    AdminListPesertaComponent,
    LoadingComponent,
    UserKuisComponent,
    MateriPengajarComponent,
    AbsenComponent,
    ListMateriComponent,
    DetailMateriComponent,
    ListFileComponent,
    DetailFileComponent,
    DetailUjianComponent,
    DetailFileUjianComponent,
    KelasComponent,
    KelasUserComponent,
    JadwalPesertaComponent,
    UserClassComponent,
    ListUjianComponent,
    ReportJadwalComponent,
    ReportMenuComponent,
    ReportJadwalMataPelajaranComponent,
    ReportPesertaComponent,
    ReportMenuPengajarComponent,
    ReportNilaiPesertaComponent,
    JadwalPengajarComponent,
    ReportNilaiPengajarComponent,
    ReportAbsenPengajarComponent,
    DashboardPesertaComponent
  ],
  providers: [authInterceptorProviders, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
