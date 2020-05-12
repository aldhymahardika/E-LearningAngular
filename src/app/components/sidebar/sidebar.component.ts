import { Login } from './../../layouts/model/login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    //path Admin
    {  path: '/admin', title: 'Dashbboard Admin', icon:'ni-tv-2 text-primary', class:''},
    {  path: '/admin-listPengajar', title: 'List Pengajar', icon:'ni ni-bullet-list-67 text-blue', class:''},
    {  path: '/report-menu', title: 'Report', icon:'ni ni-paper-diploma text-yellow', class:''},
]

export const PENGAJAR : RouteInfo[] = [
  //Path Pengajar
  { path: '/jadwal-pengajar', title: 'Teaching Schedule', icon:'ni ni-calendar-grid-58 text-success', class: '' },
  { path: '/upload-materi', title: 'Upload Materi', icon:'ni ni-cloud-upload-96 text-blue', class: '' },
  { path: '/upload-ujian', title: 'Upload Quiz', icon:'ni ni-cloud-upload-96 text-blue', class: '' },
  { path: '/materi-pengajar', title:'List Uploaded', icon:'ni ni-archive-2 text-blue', class:''},
  { path: '/kelas', title: 'Input Score', icon:'ni ni-trophy text-yellow', class: '' },
  { path: '/report-menu-pengajar', title: 'Report', icon:'ni ni-book-bookmark text-darker', class: '' },
]
export const PESERTA : RouteInfo[] =[
  //Path Peserta
  { path: '/materi', title:'Course', icon:'ni ni-books text-blue', class:'' },
  { path: '/kelas-user', title:'My Course', icon:'ni ni-calendar-grid-58 text-success', class:'' },
  { path: '/report-nilai-peserta', title:'Report', icon:'ni ni-paper-diploma text-yellow', class:'' },

]

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  login = new Login()

  constructor(private router: Router) {
    this.login = (JSON.parse(window.localStorage.getItem('auth-user')));
    this.masuk()
  }

  ngOnInit() {
    this.masuk()
  }

  masuk(){
    if (this.login.roles[0] == 'ROLE_ADMIN') {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true
      });
    } else if (this.login.roles[0] == 'ROLE_PENGAJAR') {
      this.menuItems = PENGAJAR.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true
      });
    }else {
      this.menuItems = PESERTA.filter(menuItem => menuItem);
      this.router.events.subscribe((event) => {
        this.isCollapsed = true
      });
    }
  } 
}
