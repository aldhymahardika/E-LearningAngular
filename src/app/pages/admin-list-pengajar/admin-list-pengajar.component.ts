import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Subject } from 'rxjs';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-admin-list-pengajar',
  templateUrl: './admin-list-pengajar.component.html',
  styleUrls: ['./admin-list-pengajar.component.scss']
})
export class AdminListPengajarComponent implements OnInit, OnDestroy {
  
  dataPengajar : any[]
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  msgs: Message[] = [];
  
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
    })
  }
  
  getInfo(id){
    this.router.navigate(['/admin-peserta'], {queryParams:{ pId:id }})
  }

  private extractData(res: Response) {
    const body = res.json();
  }

  showSuccess() {
    this.msgs = [];
	  this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }
}
