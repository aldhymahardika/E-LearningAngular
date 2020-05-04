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

  constructor(private adminService: AppService, private route: ActivatedRoute, private router: Router) {
    this.materiPengajar.trainer=new Trainer()
    this.materiPengajar.materi=new AdminMateri()
    this.materiPengajar.classes= new AdminKelas()
    this.getMateri()
    this.getKelas()
   }

  ngOnInit(): void {
  }

  getMateri(){
    this.adminService.getMateri().subscribe(data=>{ 
      console.log(data);
      
      this.materi = data
    })
  }

  getKelas(){
    this.adminService.getKelasList().subscribe(data=>{
      console.log(data);
      
      this.kelas = data
    })
  }

  setPengajar(){
    this.route.queryParams.subscribe(params=>{
      this.materiPengajar.trainer.trainerId=params.pId
      this.materiPengajar.materi.id=this.dataMateri.id
      this.materiPengajar.classes.id=this.dataKelas.id
      this.adminService.setPengajar(this.materiPengajar).subscribe()
    })
  }

}
