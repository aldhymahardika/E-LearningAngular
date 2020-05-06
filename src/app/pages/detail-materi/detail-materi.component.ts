import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Materi } from 'src/app/layouts/model/materi';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-detail-materi',
  templateUrl: './detail-materi.component.html',
  styleUrls: ['./detail-materi.component.css']
})
export class DetailMateriComponent implements OnInit {

  updt = new Materi();
  message:string
  msgs: Message[] = [];
  isupdated = false;
  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0    );
      }
  });
   }

  ngOnInit(): void {
  }

  updateTopik(data:Materi){
    console.log(this.updt);
    this.route.queryParams
      .subscribe(params=>{
        this.updt.id=params.idFile
        this.updt.tanggal=data.tanggal
        this.updt.jam=data.jam
        console.log(params);
        this.uploadService.updateTopik(params.idFile, data.tanggal, data.jam).subscribe(data=>{
          this.isupdated=true
          this.showSuccess()
          // this.message=data
          this.router.navigate(['/tables-report'], {queryParams: {kId:params.kId}})
        },
        err=>{
          this.showError()
        })
      })
  }

  showSuccess() {
    this.msgs = [];
	  this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }

  getBack(){
    this.route.queryParams
    .subscribe(params=>{
    this.router.navigate(['/tables-report'], {queryParams: {kId:params.kId}})
    })
  }
}
