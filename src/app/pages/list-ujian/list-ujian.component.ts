import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Forum } from 'src/app/layouts/model/forum';

@Component({
  selector: 'app-list-ujian',
  templateUrl: './list-ujian.component.html',
  styleUrls: ['./list-ujian.component.css']
})
export class ListUjianComponent implements OnInit {
  dataUjian:any[]
  forum = new Forum()
  forums:any[]
  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) {
    this.getDetailUjian()
    this.getForum()
   }

  ngOnInit(): void {
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

  setForum(){
    this.route.queryParams
    .subscribe(params=>{
      let uId ='3'
      this.forum.isiPesan
      let ser = this.uploadService.setForum(params.idFile, this.forum.isiPesan, uId );
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
