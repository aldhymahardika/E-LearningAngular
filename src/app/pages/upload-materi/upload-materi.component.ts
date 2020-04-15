import { Component, OnInit } from '@angular/core';
import { Hari } from 'src/app/layouts/model/materi';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/service/app.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { SelectItem } from 'primeng/api/selectitem';
import { Category } from 'src/app/layouts/model/category';
import { Pengajar } from 'src/app/layouts/model/pengajar';

@Component({
  selector: 'app-upload-materi',
  templateUrl: './upload-materi.component.html',
  styleUrls: ['./upload-materi.component.css']
})
export class UploadMateriComponent implements OnInit {
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
  cities2: Category[];
  // selectedCity1: City;
  name:string
  selectedCity1:Category;
  // setData: Category[]

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) {
    this.tanggal.category=new Category()
    this.tanggal.pengajar=new Pengajar()
    this.get();
    this.getAll(); 
    this.getMateriList();
  //   this.cities2 = [
  //     {name: 'New York', id: '1'},
  //     {name: 'Rome', id: '2'},
  //     {name: 'London', id: '3'},
  //     {name: 'Istanbul', id: '4'},
  //     {name: 'Paris', id: '5'}
  // ];
    // this.getAll(this.tanggal.week,this.tanggal.week);
  }
  


  ngOnInit(): void {
    // this.route.queryParams
    // .subscribe(params => {
    //   // console.log(params); 
    // });

  }
  get(){
    this.route.queryParams
      .subscribe(params => {
        this.tanggal.day=params.day 
        this.tanggal.week=params.week
        // console.log(params['day']);
          
    });
  }

  upload() {
    this.route.queryParams
      .subscribe(params => {
        // this.uploadService.getMateriAja().subscribe(data=>{
        // let mater: Hari
        this.progress = 0;
        this.tanggal.day=params.day;
        this.tanggal.week=params.week;
        this.tanggal.endDate;
        this.tanggal.file = this.selectedFiles.item(0);
        this.tanggal.category.id=this.selectedCity1.id;
        this.uploadService.upload(this.tanggal).subscribe(
        event => {
          // console.log(this.tanggal.judulMateri);
          // console.log(this.tanggal);
          // if (event.type === HttpEventType.UploadProgress) {
          //   this.progress = Math.round(100 * event.loaded / event.total);
          // } else if (event instanceof HttpResponse) {
          //   this.message = event.body.message;
          // this.fileInfos = this.uploadService.getFiles();
          // }
        },
        err => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        });
      });
      // this.selectedFiles = undefined;
  // })
  }
  
  selectFile(event) {
    this.selectedFiles = event.target.files;
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

  getAll(){
    this.route.queryParams
      .subscribe(params => {
      this.uploadService.getAllMateri(params.week, params.day).subscribe((data)=>{
      this.dataMateri=data , console.log(this.dataMateri)
      },
        err => console.log("Ada error : !"+ JSON.stringify(err)), 
        () => console.log("Completed !"));
        console.log(this.dataMateri);
      })
  }

  getMateriList(){
    this.uploadService.getMateriAja().subscribe(data=>{
      this.cities2=data
      console.log(data);
    });
  }

  getActive(){

  }

  getDeactive(){

  }

  updateFile(id:number){
    this.router.navigate(['/upload-update'], {queryParams: {id: id}});
    console.log(id);
    
  }

  deleteFile(idMateri:string){ 
    console.log('idmateri =' + idMateri);
    
    this.uploadService.getDelete(idMateri)
  }
}
