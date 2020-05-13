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
  spinner=false
  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  getUpdateDetail(data:Ujian){
    this.spinner=true
    this.route.queryParams
      .subscribe(params=>{
        console.log(params)
        this.ujian.id=params.idFiles
        this.ujian.file=this.selectedFiles.item(0)
        this.ujian.judul_file=data.judul_file
        this.isupdated=true
        this.uploadService.getUpdateDetail(this.ujian).subscribe(data=>{
           this.spinner=false
        },
        err=>{
          this.spinner=false
          this.showSuccess()
        })
      })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  showSuccess() {
    this.msgs = [];
	  this.msgs.push({severity:'success', summary:'Sukses', detail:'Data Berhasil Diupdate'});
  }

  getBack(){
    this.route.queryParams.subscribe(params=>{
      this.router.navigate(['/list-ujian'], {queryParams: {idFile: params.idFile}})
    })
  }
}
