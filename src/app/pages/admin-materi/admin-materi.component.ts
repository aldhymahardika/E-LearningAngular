import { Component, OnInit } from '@angular/core';
import { AdminMateri } from 'src/app/layouts/model/admin-materi';
import { AppService } from 'src/app/service/app.service';
import { Message } from 'primeng/api/message';
import { Router, ActivatedRoute } from '@angular/router';

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
  spinner=false

  constructor(private adminService : AppService, private route: ActivatedRoute, private router: Router) {
    
   }

  ngOnInit(): void {
    this.getMateri()
  }

  setMateri(){
    this.spinner=true
    this.adminService.setMateri(this.admin).subscribe(data=>{
      this.msg=data
      this.isupdated=true;
      if(this.msg==true){
        this.spinner=false
        this.showSuccess()
      }else{
        this.spinner=false
        this.showError()
      }
    },
    err=>{
      this.spinner=false
      this.showError()
    })
  }

  getMateri(){
    this.adminService.getMateri().subscribe(data=>{
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

  getBack(){
    this.router.navigate(['/admin'])
  }
}
