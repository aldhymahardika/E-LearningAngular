import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { StorageService } from 'src/app/service/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';

@Component({
  selector: 'app-jadwal-peserta',
  templateUrl: './jadwal-peserta.component.html',
  styleUrls: ['./jadwal-peserta.component.css']
})
export class JadwalPesertaComponent implements OnInit {
  
  jadwal:any[]
  constructor(private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute, private router: Router) {
    this.getJadwalUser()    
   }

  ngOnInit(): void {
  }

  getJadwalUser(){
    let uId='1'
    this.route.queryParams
    .subscribe(params=>{
    this.uploadService.getJadwalUser(params.id, uId).subscribe(data=>{
      this.jadwal=data
      console.log(data);
      console.log(params);
      
      })
    })
  }

  getDetail(){
    let uId='1'
    this.route.queryParams
    .subscribe(params=>{
    this.router.navigate(['/user-score'], {queryParams: {mpId:params.id, uId:uId}})
    })
  }

}
