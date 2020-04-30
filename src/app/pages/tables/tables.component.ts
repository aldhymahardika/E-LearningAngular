import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/layouts/model/category';
import { Pengajar } from 'src/app/layouts/model/pengajar';
import { AppService } from 'src/app/service/app.service';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  kondisi : boolean
  cId : Category;
  dataPengajar: Pengajar[];
  login = new Login()
  constructor(private sessionService: StorageService, private route: Router, private router: ActivatedRoute, private uploadService : AppService) {
    
    this.getPengajar()
   }

  ngOnInit() {
    // this.router.queryParams
    // .subscribe(params => {
    // this.getEnrol(params.id)
    // // this.getTopic(params.id)
    // })
  }

  getTopic(kId:string, jam:string) {
    this.login = this.sessionService.getId() 
    console.log(this.login);
    this.route.navigate(['/loading'], {queryParams: {comp: 'tables', id:this.login.idUser, kId:kId, jamid: jam}});
  }

  getPengajar(){    
    this.router.queryParams
    .subscribe(params => {
      console.log(params); 
      this.uploadService.getListPengajar(params.id).subscribe(data=>{
        this.dataPengajar=data
        localStorage.setItem('id', params.id)
        console.log(data);
      })
    });
  }

}
