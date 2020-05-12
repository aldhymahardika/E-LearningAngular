import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Materi } from 'src/app/layouts/model/materi';
import { Topic } from 'src/app/layouts/model/topic';
import { Observable, Subject } from 'rxjs';
import { Quiz } from 'src/app/layouts/model/quiz';
import { Ujian } from 'src/app/layouts/model/ujian';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-topic-materi',
  templateUrl: './topic-materi.component.html',
  styleUrls: ['./topic-materi.component.css']
})
export class TopicMateriComponent implements OnInit, OnDestroy {

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router, private sessionStorage: StorageService) { 
    
  }

  // dataMateri : Hari[];
  topics: Topic[];
  quizs: Quiz[];
  ujians: Quiz[];
  kelas:any[];
  dataScore:any[]
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  nama:any
  title:string
  id:string
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };

    this.getTopic()
    this.getQuiz()
    this.getTask()
    this.getDetailKelass()
    this.title = this.sessionStorage.getTitle()
    this.nama = this.sessionStorage.getNamaPengajar()
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  getTopic(){
    this.route.queryParams
    .subscribe(params => {
      console.log(params); 
    this.uploadService.getTopic(params.kId).subscribe(data=>{
      this.topics=data
      console.log(data);
    })
  })
  }

  getMateri(headerid:string, title:string){
    this.route.queryParams
    .subscribe(params => {
      console.log(params);  
      this.sessionStorage.setNamaTopic(title)
    this.router.navigate(['/loading'], {queryParams: {comp: 'materi',hId: headerid, kId:params.kId, title:title}}); 
    }
  )}

  getSoal(header_soal_id:string, title:string){
    this.route.queryParams
    .subscribe(params=>{
      this.sessionStorage.setNamaTopic(title)
      this.router.navigate(['/loading'], {queryParams: {comp: 'quiz',hId: header_soal_id, kId:params.kId, title:title}}); 
    })
  }

  getUjian(header_soal_id:string, title:string){
    this.route.queryParams
    .subscribe(params=>{
      this.sessionStorage.setNamaTopic(title)
      this.router.navigate(['/loading'], {queryParams: {comp: 'ujian',hId: header_soal_id, kId:params.kId, title:title}}); 

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

  getDetailKelass(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailScoreKelas(params.kId).subscribe(data=>{
        this.dtTrigger.next();
        this.kelas=data
        console.log(data);
      })
    })
  }

  getBack(){
    this.id = window.localStorage.getItem('id')
    this.sessionStorage.getId
    this.route.queryParams.subscribe(params=>{
      this.router.navigate(['/tables'], {queryParams:{id:this.id}})

    })
  }
}
