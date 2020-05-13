import { Component, OnInit } from '@angular/core';
import { MateriPengajars } from 'src/app/layouts/model/materiPengajars';
import { Message } from 'primeng/api/message';
import { Trainer } from 'src/app/layouts/model/trainer';
import { AdminKelas } from 'src/app/layouts/model/admin-kelas';
import { AdminMateri } from 'src/app/layouts/model/admin-materi';
import { AppService } from 'src/app/service/app.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-peserta',
  templateUrl: './admin-peserta.component.html',
  styleUrls: ['./admin-peserta.component.css']
})
export class AdminPesertaComponent implements OnInit {
  materiPengajar = new MateriPengajars()
  materi: AdminMateri[]
  dataMateri:AdminMateri
  kelas: AdminKelas[]
  dataKelas:AdminKelas
  dataTrainer:Trainer
  msgs: Message[] = [];
  isupdated=false
  spinner=false

  constructor(private adminService: AppService, private route: ActivatedRoute, private router: Router) {
    this.materiPengajar.trainer=new Trainer()
    this.materiPengajar.materi=new AdminMateri()
    this.materiPengajar.classes= new AdminKelas()
   }

  ngOnInit(): void {
    this.getMateri()
    this.getKelas()
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

  setPengajar(){
    this.spinner=true
    this.route.queryParams.subscribe(params=>{
      this.materiPengajar.trainer.trainerId=params.pId
      this.materiPengajar.materi.id=this.dataMateri.id
      this.materiPengajar.classes.id=this.dataKelas.id
      this.isupdated=true
      this.adminService.setPengajar(this.materiPengajar).subscribe(data=>{
        this.spinner=false
        this.showSuccess()
      },
      err=>{
        this.showError()
        this.spinner=false
      })
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
    this.router.navigate(['/admin-listPengajar'])
  }
}
