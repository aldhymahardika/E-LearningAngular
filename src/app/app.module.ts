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

import { UploadMateriComponent } from './pages/upload-materi/upload-materi.component';
import { TablesMateriComponent } from './pages/tables-materi/tables-materi.component';
import { ReportUserComponent } from './pages/report-user/report-user.component';
import { ReportInputComponent } from './pages/report-input/report-input.component';
import { UserUploadComponent } from './pages/user-upload/user-upload.component';
import { UserComponent } from './pages/user/user.component';
import { ListPengajarComponent } from './pages/list-pengajar/list-pengajar.component';
import { ListPesertaComponent } from './pages/list-peserta/list-peserta.component';
import { UploadUpdateComponent } from './pages/upload-update/upload-update.component';
import { MateriComponent } from './pages/materi/materi.component';


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
    DropdownModule
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
    UploadUpdateComponent,
    MateriComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
