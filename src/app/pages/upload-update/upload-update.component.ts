import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Hari } from 'src/app/layouts/model/materi';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-upload-update',
  templateUrl: './upload-update.component.html',
  styleUrls: ['./upload-update.component.css']
})
export class UploadUpdateComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  dataMateri : Hari[];
  fileInfos: Observable<any>;
  files: Observable<Hari[]>;
  // materirespons = new MateriRespon()
  fileUrl;
  tanggal = new Hari()

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) { 
    // this.get();
  }

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      console.log(params.id); 
    });
  }
  get(){
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
          
    });
  }

  gets(datas){
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.getMateri(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url) 
   })
  }) 
  //  let blob:any = new Blob(this.fileInfos, { type: 'text/json; charset=utf-8' }); 
  }

  upload() {
    this.route.queryParams
      .subscribe(params => {
        this.progress = 0;
        this.tanggal.day=params.day;
        this.tanggal.week=params.week;
        this.tanggal.endDate;
        this.tanggal.file = this.selectedFiles.item(0);
        console.log(params)
      //   this.uploadService.getEditMateri(this.tanggal).subscribe(
      //   event => {
      //     if (event.type === HttpEventType.UploadProgress) {
      //       this.progress = Math.round(100 * event.loaded / event.total);
      //     } else if (event instanceof HttpResponse) {
      //       this.message = event.body.message;
      //     }
      //   },
      //   err => {
      //     this.progress = 0;
      //     this.message = 'Could not upload the file!';
      //     this.currentFile = undefined;
      //   });
      // this.selectedFiles = undefined;
  })
  }
}
