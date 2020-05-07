import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-materi',
  templateUrl: './list-materi.component.html',
  styleUrls: ['./list-materi.component.css']
})
export class ListMateriComponent implements OnInit, OnDestroy {

  peserta:any[]
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) {
    this.getListUser()
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
  
  getListUser(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getListUser(params.kId).subscribe(data=>{
        this.dtTrigger.next();
        this.peserta=data
        console.log(data);
      })
    })
  }

  getNilai(user_id:string){
    this.route.queryParams
    .subscribe(params=>{
      this.router.navigate(['/report-input'], {queryParams: {kId: params.kId, uId:user_id}})
    })
  }

  private extractData(res: Response) {
    const body = res.json();
    // return body.data || {};
  }

  getBack(){
    this.router.navigate(['/kelas'])
  }
}
