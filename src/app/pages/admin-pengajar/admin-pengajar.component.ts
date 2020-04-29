import { Component, OnInit } from '@angular/core';
import { AkunPengajar } from 'src/app/layouts/model/akunPengajar';
import { AppService } from 'src/app/service/app.service';
import { MateriPengajars } from 'src/app/layouts/model/materiPengajars';
import { AdminKelas } from 'src/app/layouts/model/admin-kelas';
import { AdminMateri } from 'src/app/layouts/model/admin-materi';
import { Pengajar } from 'src/app/layouts/model/pengajar';

@Component({
  selector: 'app-admin-pengajar',
  templateUrl: './admin-pengajar.component.html',
  styleUrls: ['./admin-pengajar.component.css']
})
export class AdminPengajarComponent implements OnInit {
  materiPengajar = new MateriPengajars()
  materi: AdminMateri[]
  dataMateri:AdminMateri
  kelas: AdminKelas[]
  dataKelas:AdminKelas
  constructor(private adminService: AppService) {
    this.materiPengajar.kelasPengajar = new AdminKelas()
    this.materiPengajar.materi  = new AdminMateri()
    this.materiPengajar.pengajar = new Pengajar()
    this.getKelas()
    this.getMateri()
   }

  ngOnInit(): void {
  }

  setPengajar(){
    this.materiPengajar.kelasPengajar.id = this.dataKelas.id
    this.materiPengajar.materi.id = this.dataMateri.id
    this.adminService.setPengajar(this.materiPengajar).subscribe(data=>{
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
}
