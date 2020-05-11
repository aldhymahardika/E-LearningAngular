import { Component, OnInit } from '@angular/core';
import { AdminMateri } from 'src/app/layouts/model/admin-materi';
import { AppService } from 'src/app/service/app.service';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-admin-materi',
  templateUrl: './admin-materi.component.html',
  styleUrls: ['./admin-materi.component.css']
})
export class AdminMateriComponent implements OnInit {
  admin = new AdminMateri()
  msg:boolean
  msgs: Message[] = [];
  isupdated = false;
  constructor(private adminService : AppService) {
    this.getMateri()
   }

  ngOnInit(): void {
  }

  setMateri(){
    this.adminService.setMateri(this.admin).subscribe(data=>{
      this.msg=data
      this.isupdated=true;
      if(this.msg==true){
        this.showSuccess()
      }else{
        this.showError()
      }
    },
    err=>{
      this.showError()
    })
  }

  getMateri(){
    this.adminService.getMateri().subscribe(data=>{
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
