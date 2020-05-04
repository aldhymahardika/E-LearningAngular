import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { AdminKelas } from 'src/app/layouts/model/admin-kelas';
import { Message } from 'primeng/api/message';

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

  constructor(private adminService: AppService) {
    this.getKelas()
   }

  ngOnInit(): void {
  }

  setKelas(){
    this.adminService.setKelas(this.kelas).subscribe(data=>{
      this.msg=data
      this.isupdated=true;
      if(this.msg==true){
        this.showSuccess()
      }else{
        this.showError()
      }
    })
  }

  getKelas(){
    this.adminService.getKelasAdmin().subscribe(data=>{
      console.log(data);
      
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
