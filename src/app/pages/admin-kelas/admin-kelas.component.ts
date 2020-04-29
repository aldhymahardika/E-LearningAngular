import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { AdminKelas } from 'src/app/layouts/model/admin-kelas';

@Component({
  selector: 'app-admin-kelas',
  templateUrl: './admin-kelas.component.html',
  styleUrls: ['./admin-kelas.component.css']
})
export class AdminKelasComponent implements OnInit {

  kelas= new AdminKelas()
  msg:string
  constructor(private adminService: AppService) {
    this.getKelas()
   }

  ngOnInit(): void {
  }

  setKelas(){
    this.adminService.setKelas(this.kelas).subscribe(data=>{
      this.msg=data
    })
  }

  getKelas(){
    this.adminService.getKelasAdmin().subscribe(data=>{
      console.log(data);
      
    })
  }
}
