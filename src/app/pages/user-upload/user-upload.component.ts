import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hari } from 'src/app/layouts/model/materi';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-user-upload',
  templateUrl: './user-upload.component.html',
  styleUrls: ['./user-upload.component.css']
})
export class UserUploadComponent implements OnInit {
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
    this.get();
    this.getAll(); 

  }
  
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this.get();
      // console.log(params); 
    });
  }

  get(){
    this.route.queryParams
      .subscribe(params => {
        this.tanggal.day=params.day 
        this.tanggal.week=params.week
        // console.log(params['day']);
                
    });
  }

  getAll(){
    this.route.queryParams
      .subscribe(params => {
      this.uploadService.getMateriUser(params.week, params.day).subscribe((data)=>{
      this.dataMateri=data , console.log(this.dataMateri)
      },
        err => console.log("Ada error : !"+ JSON.stringify(err)), 
        () => console.log("Completed !"));
        console.log(this.dataMateri);
      })
  }
}
