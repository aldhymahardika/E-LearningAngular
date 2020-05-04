import { Component, OnInit } from '@angular/core';
import { MateriPengajars } from 'src/app/layouts/model/materiPengajars';
import { AdminMateri } from 'src/app/layouts/model/admin-materi';
import { AdminKelas } from 'src/app/layouts/model/admin-kelas';
import { AuthService } from 'src/app/service/auth.service';
import { AppService } from 'src/app/service/app.service';
import { Message } from 'primeng/api/message';
import { ActivatedRoute, Route } from '@angular/router';
import { Trainer } from 'src/app/layouts/model/trainer';

@Component({
  selector: 'app-admin-topic',
  templateUrl: './admin-topic.component.html',
  styleUrls: ['./admin-topic.component.css']
})
export class AdminTopicComponent implements OnInit {
  materiPengajar = new MateriPengajars()
  materi: AdminMateri[]
  dataMateri:AdminMateri
  kelas: AdminKelas[]
  dataKelas:AdminKelas
  dataTrainer:Trainer
  msgs: Message[] = [];
  constructor(private adminService: AppService, private route: Route, private router: ActivatedRoute) {
    this.materiPengajar.trainer=new Trainer()
    this.materiPengajar.materi=new AdminMateri()
    this.materiPengajar.classes= new AdminKelas()
    // this.getKelas()
    // this.getMateri()
   }

  ngOnInit(): void {
  }
 
  setPengajar(){
    this.router.queryParams.subscribe(params=>{
      this.materiPengajar.id=params.pId
      this.materiPengajar.classes.id = this.dataKelas.id
      this.materiPengajar.materi.id = this.dataMateri.id 
      // this.materiPengajar.trainer.
      this.adminService.setPengajar(this.materiPengajar).subscribe()
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
}
