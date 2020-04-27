import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Materi } from 'src/app/layouts/model/materi';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Category } from 'src/app/layouts/model/category';
import { Hari } from 'src/app/layouts/model/hari';
import { Ujian } from 'src/app/layouts/model/ujian';
import { Pengajar } from 'src/app/layouts/model/pengajar';
import { Kelas } from 'src/app/layouts/model/kelas';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-upload-ujian',
  templateUrl: './upload-ujian.component.html',
  styleUrls: ['./upload-ujian.component.css']
})
export class UploadUjianComponent implements OnInit {

  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  dataUjian : Ujian[];
  fileInfos: Observable<any>;
  files: Observable<Ujian[]>;
  // materirespons = new MateriRespon()
  fileUrl;
  ujian = new Ujian()
  cities2: Category[];
  // selectedCity1: City;
  // name:string
  selectedCity1:Category;
  datas = new Materi()
  hari: Hari[];
  setHari :Hari;
  setKelas: Kelas;
  kelas: Kelas[];
  show : boolean
  exampleFlag=false;
  
  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) { 
    this.ujian.category=new Category()
    this.ujian.pengajar=new Pengajar()
    this.ujian.kelas=new Kelas()
    this.datas.pengajar= new Pengajar()
    this.datas.category= new Category()
    this.datas.kelas= new Kelas()
    this.getMateriList()
    this.hari = [
      {label: 'Senin', value: 'MONDAY'},
      {label: 'Selasa', value: 'TUESDAY'},
      {label: 'Rabu', value: 'WEDNESDAY'},
      {label: 'Kamis', value: 'THURSDAY'},
      {label: 'Jumat', value: 'FRIDAY'},
      {label: 'Sabtu', value: 'SATURDAY'},
      {label: 'Minggu', value: 'SUNDAY'},
  ];
  }

  ngOnInit(): void {
    
  }

  toggle() {
    this.show = !this.show;
  }
  get(){
    this.route.queryParams
      .subscribe(params => {
        // console.log(params);
          
    });
  }

  gets(datas){
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.downloadMateriUser(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url) 
   })
  }) 
  //  let blob:any = new Blob(this.fileInfos, { type: 'text/json; charset=utf-8' }); 
  }

  uploadUjian() {
    this.route.queryParams
      .subscribe(params => {
        this.progress = 0;
        this.ujian.judul_file
        this.ujian.startTime
        this.ujian.endTime
        this.ujian.start_date
        this.ujian.end_date
        this.ujian.judul_tugas
        // this.ujian.hari=this.setHari.value
        this.ujian.jenis
        // this.ujian.pengajar.pengajar_id='1'
        this.ujian.file = this.selectedFiles.item(0);
        // this.ujian.category.id=this.selectedCity1.id;
        this.ujian.kelas.kelas_id=this.setKelas.kelas_id;
        console.log(this.ujian)
        this.uploadService.uploadUjian(this.ujian).subscribe(
        event => {
      //     if (event.type === HttpEventType.UploadProgress) {
      //       this.progress = Math.round(100 * event.loaded / event.total);
      //     } else if (event instanceof HttpResponse) {
      //       this.message = event.body.message;
      //     }
        },
        err => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        })
      // this.selectedFiles = undefined;
  })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  getMateriList(){
    let pId = '1'
    this.uploadService.getMateriPengajar(pId).subscribe(data=>{
      this.cities2=data
      console.log(data);
    });
  }

  getKelasList(selectedCity1){
    let pId = '1'
    // this.materi.category.id=this.selectedCity1.id;
    this.uploadService.getKelasPengajar(selectedCity1.id, pId).subscribe(data=>{
      this.kelas=data
      console.log(data)
    });
  }

  localClick(x) {
    if(x==1){
    this.exampleFlag=true;
    }
    else{
    this.exampleFlag=false;
    }
  }
}
