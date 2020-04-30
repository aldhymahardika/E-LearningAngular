import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Forum } from 'src/app/layouts/model/forum';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.css']
})
export class ListFileComponent implements OnInit {

  dataFile:any[]
  dataUjian:any[]
  forum = new Forum()
  forums:any[]
  login = new Login()

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router, private sessionService: StorageService) {
    this.getListMateri()
    // this.getDetailUjian()
    this.getForum()
   }

  ngOnInit(): void {
  }

  getListMateri(){
    this.route.queryParams
    .subscribe(params=>{
      console.log(params);
      
    this.uploadService.getListMateri(params.idFile).subscribe(data=>{
      this.dataFile=data
      console.log(data);
    })
  })
  }

  // getDetailUjian(){
  //   this.route.queryParams
  //   .subscribe(params=>{
  //     this.uploadService.getDetailQuiz(params.idFile).subscribe(data=>{
  //       this.dataUjian=data
  //       console.log(data)
  //     })
  //   })
  // }

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

  // deleteDetailSoal(id:string){
  //   this.uploadService.deleteDetailSoal(id).subscribe(data=>{ })
  // }

  // updateUjian(idFile:string){
  //   this.router.navigate(['/detail-file-ujian'], {queryParams:{idFile:idFile}})
  // }
  
  // getsKuis(datas){
  //   this.route.queryParams
  //   .subscribe(params => {
  //  let resp = this.uploadService.downloadKuisUser(datas).subscribe((data) => 
  //  { const url= window.URL.createObjectURL(data)
  //  window.open(url) 
  //  })
  // }) 
  // }

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

  setForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.login = this.sessionService.getId()
      this.forum.isiPesan
      let ser = this.uploadService.setForum(params.idFile, this.forum.isiPesan, this.login.idUser );
      ser.subscribe(data=>{
        this.forum.isiPesan=""
        this.loadForum(params.hId)
      })
      // this.getALlMateri()
      // this.getForum()
    })
  }

  getForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getForum(params.idFile).subscribe(data=>{
        this.forums=data
        console.log(data);
        
      })
    })
  }

  loadForum(hId:string){
    this.uploadService.getForum(hId).subscribe(data=>{
      this.forums=data
    })
  }
}
