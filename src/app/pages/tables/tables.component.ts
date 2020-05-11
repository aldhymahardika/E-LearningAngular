import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/layouts/model/category';
import { Pengajar } from 'src/app/layouts/model/pengajar';
import { AppService } from 'src/app/service/app.service';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit, OnDestroy {

  kondisi : boolean
  cId : Category;
  dataPengajar: Pengajar[];
  login = new Login()
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  title:string
  constructor(private sessionService: StorageService, private route: Router, private router: ActivatedRoute, private uploadService : AppService) {
    
   }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.router.queryParams.subscribe(params=>{
      localStorage.setItem('id', params.id)
    })
    this.title= window.localStorage.getItem('title')
    this.getPengajar()
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  getTopic(kId:string, jam:string, nama:string) {
    this.router.queryParams
    .subscribe(params => {
    this.login = this.sessionService.getId() 
    console.log(this.login);
    this.sessionService.setNamaPengajar(nama)
    this.route.navigate(['/loading'], {queryParams: {comp: 'tables', id:params.id, kId:kId, jamid: jam, nama: nama, title:params.title}});
    })
  }

  getPengajar(){    
    this.router.queryParams
    .subscribe(params => {
      console.log(params); 
      this.uploadService.getListPengajar(params.id).subscribe(data=>{
        this.dtTrigger.next();
        this.dataPengajar=data
        localStorage.setItem('id', params.id)
        console.log(data);
      })
    });
  }

  private extractData(res: Response) {
    const body = res.json();
    // return body.data || {};
  }

  getBack(){
    this.route.navigate(['/materi'])
  }

  setTitle(){
    this.title= window.localStorage.getItem('title')
  }
}
