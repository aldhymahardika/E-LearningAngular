import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Materi } from 'src/app/layouts/model/materi';
import { Topic } from 'src/app/layouts/model/topic';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/layouts/model/quiz';
import { Ujian } from 'src/app/layouts/model/ujian';

@Component({
  selector: 'app-topic-materi',
  templateUrl: './topic-materi.component.html',
  styleUrls: ['./topic-materi.component.css']
})
export class TopicMateriComponent implements OnInit {

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) { 
    this.getTopic()
    this.getQuiz()
    this.getTask()
  }

  // dataMateri : Hari[];
  topics: Topic[];
  quizs: Quiz[];
  ujians: Quiz[];

  ngOnInit(): void {

  }

  // gets(datas){
  //   this.route.queryParams
  //   .subscribe(params => {
  //  let resp = this.uploadService.getMateri(datas).subscribe((data) => 
  //  { const url= window.URL.createObjectURL(data)
  //  window.open(url) 
  //  })
  // }) 
  // //  let blob:any = new Blob(this.fileInfos, { type: 'text/json; charset=utf-8' });
  // }

  getTopic(){
    this.route.queryParams
    .subscribe(params => {
      let pId ='1'
      console.log(params); 
    this.uploadService.getTopic(params.kId).subscribe(data=>{
      this.topics=data
      // if(this.topics)
      console.log(data);
    })
  })
  }

  getMateri(headerid:string){
    this.route.queryParams
    .subscribe(params => {
      console.log(params);  
    // this.router.navigate(['/user-upload'], {queryParams: {hId: headerid, kId:params.kId}});
    this.router.navigate(['/loading'], {queryParams: {comp: 'materi',hId: headerid, kId:params.kId}}); 
    }
  )}

  getSoal(header_soal_id:string){
    this.route.queryParams
    .subscribe(params=>{
      // this.router.navigate(['/user-kuis'], {queryParams: {hId: header_soal_id, kId:params.kId}})
      this.router.navigate(['/loading'], {queryParams: {comp: 'quiz',hId: header_soal_id, kId:params.kId}}); 
    })
  }

  getUjian(header_soal_id:string){
    this.route.queryParams
    .subscribe(params=>{
      // this.router.navigate(['/user'], {queryParams: {hId: header_soal_id, kId:params.kId}})
      this.router.navigate(['/loading'], {queryParams: {comp: 'ujian',hId: header_soal_id, kId:params.kId}}); 

    })
  }

  getQuiz(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getQuiz(params.kId).subscribe(data=>{
        this.quizs=data
        console.log(data);
      })
    })
  }

  getTask(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getUjian(params.kId).subscribe(data=>{
        this.ujians=data
        console.log(data); 
      })
    })
  }
}
