import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin-list-pengajar',
  templateUrl: './admin-list-pengajar.component.html',
  styleUrls: ['./admin-list-pengajar.component.css']
})
export class AdminListPengajarComponent implements OnInit, OnDestroy {
  
  dataPengajar : any[]
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  
  constructor(private adminService : AppService ,private router: Router, private route: ActivatedRoute) {
    this.getPengajar()
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

  getPengajar(){
    this.adminService.getPengajar().subscribe(data=>{
      this.dtTrigger.next();
      this.dataPengajar= data
      console.log(data);
    })
  }
  
  getInfo(id){
    this.router.navigate(['/admin-peserta'], {queryParams:{ pId:id }})
  }

  private extractData(res: Response) {
    const body = res.json();
    // return body.data || {};
  }
}
