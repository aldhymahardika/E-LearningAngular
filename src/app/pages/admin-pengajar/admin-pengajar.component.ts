import { Component, OnInit } from '@angular/core';
import { AkunPengajar } from 'src/app/layouts/model/akunPengajar';
import { AppService } from 'src/app/service/app.service';
import { AdminKelas } from 'src/app/layouts/model/admin-kelas';
import { AdminMateri } from 'src/app/layouts/model/admin-materi';
import { Pengajar } from 'src/app/layouts/model/pengajar';
import { Message } from 'primeng/api/message';
import { AuthService } from 'src/app/service/auth.service';

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
  constructor(private adminService: AppService, private authService: AuthService) {
    // this.materiPengajar.kelasPengajar = new AdminKelas()
    // this.materiPengajar.materi  = new AdminMateri()
    // this.materiPengajar.pengajar = new Pengajar()
    this.getKelas()
    this.getMateri()
   }

  ngOnInit(): void {
  }

  setPengajar(){
    // this.materiPengajar.kelasPengajar.id = this.dataKelas.id
    // this.materiPengajar.materi.id = this.dataMateri.id
    this.materiPengajar.role = ["pengajar"]
    this.authService.registerPengajar(this.materiPengajar).subscribe(data=>{
      // this.msg
      // this.showMessage = true
      // this.showSuccess()
    },
    err => {
      this.showMessage = true
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
	  this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }

}
