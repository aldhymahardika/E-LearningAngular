import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Ujian } from 'src/app/layouts/model/ujian';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-detail-file-ujian',
  templateUrl: './detail-file-ujian.component.html',
  styleUrls: ['./detail-file-ujian.component.css']
})
export class DetailFileUjianComponent implements OnInit {
  selectedFiles: FileList;
  ujian = new Ujian()
  msgs: Message[] = [];
  isupdated = false;

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  getUpdateDetail(data:Ujian){
    this.route.queryParams
      .subscribe(params=>{
        console.log(params)
        this.ujian.id=params.idFile
        this.ujian.file=this.selectedFiles.item(0)
        this.ujian.judul_file=data.judul_file
        this.uploadService.getUpdateDetail(this.ujian).subscribe(data=>{this.showSuccess() })
      })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  showSuccess() {
    this.msgs = [];
	  this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }
}
