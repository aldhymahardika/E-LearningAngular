import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
          this.showSuccess()
          this.message=data
        })
      })
  }

  showSuccess() {
    this.msgs = [];
	  this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }
}
