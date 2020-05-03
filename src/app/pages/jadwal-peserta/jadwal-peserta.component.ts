import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { StorageService } from 'src/app/service/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/animations';
import { Login } from 'src/app/layouts/model/login';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-jadwal-peserta',
  templateUrl: './jadwal-peserta.component.html',
  styleUrls: ['./jadwal-peserta.component.css']
})
export class JadwalPesertaComponent implements OnInit, OnDestroy {
  
  jadwal:any[]
  dataScore:any[]
  dataKuis:any[]
  dataUjian: any[]
  login = new Login()
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  
  constructor(private sessionService: StorageService,private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute, private router: Router) {
    this.getJadwalUser()
    this.getDetailScore()
    this,this.getDetailUjian()
    this.getJadwalKuis()
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  getJadwalUser(){
    this.login = this.sessionService.getId()
    this.route.queryParams
    .subscribe(params=>{
    this.uploadService.getJadwalUser(params.id, this.login.idUser).subscribe(data=>{
      this.jadwal=data
      console.log(data);
      console.log(params);
      
      })
    })
  }

  getDetail(){
    this.login = this.sessionService.getId()
    this.route.queryParams
    .subscribe(params=>{
    this.router.navigate(['/user-score'], {queryParams: {mpId:params.id, uId:this.login.idUser}})
    })
  }

  getDetailKelas(){
    this.route.queryParams
    .subscribe(params=>{
      this.router.navigate(['/user-class'], {queryParams: {kId: params.id}})
    })
  }

  getDetailScore(){
    this.login = this.sessionService.getId()
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailScore(this.login.idUser, params.id).subscribe(data=>{
        this.dtTrigger.next();
        this.dataScore=data
        console.log(data);
        console.log(params);
        
      })
    })
  }

  getDetailUjian(){
    // this.dtTrigger.unsubscribe();
    this.login = this.sessionService.getId()
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailUjian(this.login.idUser, params.id).subscribe(data=>{
        
        // this.dtTrigger.next();
        this.dataUjian=data
        console.log(data);
        console.log(params);
        
      })
    })
  }

  getJadwalKuis(){
    this.login = this.sessionService.getId()
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getJadwalKuis(this.login.idUser, params.id).subscribe(data=>{
        this.dataKuis=data
        console.log(data);
        
      })
    })
  }

  private extractData(res: Response) {
    const body = res.json();
    // return body.data || {};
  }

}
