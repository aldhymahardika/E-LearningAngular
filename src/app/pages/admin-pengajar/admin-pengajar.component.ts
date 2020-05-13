import { Component, OnInit } from '@angular/core';
import { AkunPengajar } from 'src/app/layouts/model/akunPengajar';
import { AppService } from 'src/app/service/app.service';
import { AdminKelas } from 'src/app/layouts/model/admin-kelas';
import { AdminMateri } from 'src/app/layouts/model/admin-materi';
import { Pengajar } from 'src/app/layouts/model/pengajar';
import { Message } from 'primeng/api/message';
import { AuthService } from 'src/app/service/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-pengajar',
  templateUrl: './admin-pengajar.component.html',
  styleUrls: ['./admin-pengajar.component.css']
})
export class AdminPengajarComponent implements OnInit {
  materiPengajar = new Pengajar()
  materi: AdminMateri[]
  dataMateri:AdminMateri
  kelas: AdminKelas[]
  dataKelas:AdminKelas
  msgs: Message[] = [];
  msg:boolean
  isupdated = false;
  showMessage=false
  message = "Mohon input form dengan benar!"
  messageT = "Insert berhasil" 
  spinner=false
  constructor(private adminService: AppService, private authService: AuthService, private route: ActivatedRoute, private router: Router) {
   
   }

  ngOnInit(): void {
    this.getKelas()
    this.getMateri()
  }

  setPengajar(){
    this.spinner=true
    this.materiPengajar.role = ["pengajar"]
    this.authService.registerPengajar(this.materiPengajar).subscribe(data=>{
      this.isupdated=true
      this.spinner=false
      this.showSuccess()
    },
    err => {
      this.spinner=false
      this.showError()
    })
  }

  getMateri(){
    this.adminService.getMateri().subscribe(data=>{
      this.materi = data
    })
  }

  getKelas(){
    this.adminService.getKelasList().subscribe(data=>{
      this.kelas = data
    })
  }

  showSuccess() {
    this.msgs = [];
	  this.msgs.push({severity:'success', summary:'Sukses', detail:'Data Berhasil Ditambah'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error', detail:'Data Gagal Ditambah'});
  }

  getBack(){
    this.router.navigate(['/admin'])
  }

}
