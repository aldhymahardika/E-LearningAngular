import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.css']
})
export class ListFileComponent implements OnInit {

  dataFile:any[]
  dataUjian:any[]

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) {
    this.getListMateri()
    this.getDetailUjian()
   }

  ngOnInit(): void {
  }

  getListMateri(){
    this.route.queryParams
    .subscribe(params=>{
    this.uploadService.getListMateri(params.idFile).subscribe(data=>{
      this.dataFile=data
      console.log(data);
    })
  })
  }

  getDetailUjian(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailQuiz(params.idFile).subscribe(data=>{
        this.dataUjian=data
        console.log(data)
      })
    })
  }

  download(datas){
      this.route.queryParams
      .subscribe(params => {
     let resp = this.uploadService.downloadMateriUser(datas).subscribe((data) => 
     { const url= window.URL.createObjectURL(data)
     window.open(url) 
     })
    }) 
    //  let blob:any = new Blob(this.fileInfos, { type: 'text/json; charset=utf-8' });
  }

  update(idFile:string){
      this.router.navigate(['/detail-file'], {queryParams: {idFile:idFile}})
  }

  delete(id:string){
    this.uploadService.deleteFile(id).subscribe(data=>{ })
  }

  deleteDetailSoal(id:string){
    this.uploadService.deleteDetailSoal(id).subscribe(data=>{ })
  }

  updateUjian(idFile:string){
    this.router.navigate(['/detail-file-ujian'], {queryParams:{idFile:idFile}})
  }
  
  getsKuis(datas){
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.downloadKuisUser(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url) 
   })
  }) 
  }

  getsMateri(datas){
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.downloadMateriUser(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url) 
   })
  }) 
  //  let blob:any = new Blob(this.fileInfos, { type: 'text/json; charset=utf-8' });
  }
}
