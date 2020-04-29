import { Component, OnInit } from '@angular/core';
import { AdminMateri } from 'src/app/layouts/model/admin-materi';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-admin-materi',
  templateUrl: './admin-materi.component.html',
  styleUrls: ['./admin-materi.component.css']
})
export class AdminMateriComponent implements OnInit {
  admin = new AdminMateri()
  msg:string
  constructor(private adminService : AppService) {
    this.getMateri()
   }

  ngOnInit(): void {
  }

  setMateri(){
    this.adminService.setMateri(this.admin).subscribe(data=>{
      this.msg=data
    })
  }

  getMateri(){
    this.adminService.getMateri().subscribe(data=>{
      console.log(data);
      
    })
  }
}
