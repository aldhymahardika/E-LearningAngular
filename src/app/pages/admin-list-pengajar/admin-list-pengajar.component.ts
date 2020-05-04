import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-admin-list-pengajar',
  templateUrl: './admin-list-pengajar.component.html',
  styleUrls: ['./admin-list-pengajar.component.css']
})
export class AdminListPengajarComponent implements OnInit {
  dataPengajar : any[]
  constructor(private adminService : AppService ,private router: Router, private route: ActivatedRoute) {
    this.getPengajar()
   }

  ngOnInit(): void {
  }

  getPengajar(){
    this.adminService.getPengajar().subscribe(data=>{
      this.dataPengajar= data
      console.log(data);
    })
  }
  getInfo(id){
    this.router.navigate(['/admin-peserta'], {queryParams:{ pId:id }})
  }
}
