import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { AdminKelas } from 'src/app/layouts/model/admin-kelas';
import { Message } from 'primeng/api/message';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-kelas',
  templateUrl: './admin-kelas.component.html',
  styleUrls: ['./admin-kelas.component.css']
})
export class AdminKelasComponent implements OnInit {

  kelas= new AdminKelas()
  msg:boolean
  msgs: Message[] = [];
  isupdated = false;
  spinner=false
  constructor(private adminService: AppService, private route: ActivatedRoute, private router: Router) {
    this.getKelas()
   }

  ngOnInit(): void {
  }

  setKelas(){
    this.spinner=true
    this.adminService.setKelas(this.kelas).subscribe(data=>{
      this.msg=data
      this.isupdated=true;
      if(this.msg==true){
        this.spinner=false
        this.showSuccess()
      }else{
        this.spinner=false
        this.showError()
      }
    })
  }

  getKelas(){
    this.adminService.getKelasAdmin().subscribe(data=>{
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
