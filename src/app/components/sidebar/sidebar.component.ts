import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' }, 

    { path: '', title:'-------', icon:'', class:''},

    //path Admin
    {  path: '/admin', title: 'Dashbboard Admin', icon:'ni-tv-2 text-primary', class:''},
    {  path: '/admin-listPengajar', title: 'List Pengajar', icon:'ni ni-bullet-list-67 text-blue', class:''},
    {  path: '/admin-listPeserta', title: 'List Peserta', icon:'ni ni-bullet-list-67 text-blue', class:''},

    { path: '', title:'-------', icon:'', class:''},

    //Path Pengajar
    { path: '/materi-pengajar', title:'List Materi', icon:'ni ni-book-bookmark text-blue', class:''},
    { path: '/upload-materi', title: 'Upload', icon:'ni-cloud-upload-96 text-blue', class: '' },
    { path: '/upload-ujian', title: 'Upload Ujian', icon:'ni-cloud-upload-96 text-blue', class: '' },
    { path: '/table-report', title:'Scores', icon:'ni ni-trophy text-yellow', class:''},
    { path: '/kelas', title: 'List Kelas', icon:'ni-cloud-upload-96 text-blue', class: '' },

    { path: '', title:'-------', icon:'', class:''},
    
    //Path Peserta
    { path: '/materi', title:'List Materi', icon:'ni ni-book-bookmark text-blue', class:'' },
    { path: '/kelas-user', title:'Jadwal', icon:'ni ni-book-bookmark text-blue', class:'' },
    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/user', title: 'Materi', icon:'ni ni-book-bookmark text-blue', class:''},
    // { path: '/topic-materi', title: 'Topic Materi', icon:'ni ni-book-bookmark text-blue', class:''},
    { path: '/user-score', title:'Scores', icon:'ni ni-trophy text-yellow', class:''},

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
