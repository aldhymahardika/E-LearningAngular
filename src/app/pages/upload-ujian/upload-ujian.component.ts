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
import { Message } from 'primeng/api/message';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';

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
  fileUrl;
  ujian = new Ujian()
  cities2: Category[];
  selectedCity1:Category;
  datas = new Materi()
  hari: Hari[];
  setHari :Hari;
  setKelas: Kelas;
  kelas: Kelas[];
  show : boolean
  exampleFlag=false;
  msgs: Message[] = [];
  isupdated = false; 
  login = new Login()
  disable = true
  spinner:boolean = false

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router, private sessionService: StorageService) { 
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
        this.ujian.jenis
        this.ujian.file = this.selectedFiles.item(0);
        this.ujian.kelas.class_id=this.setKelas.class_id;
        console.log(this.ujian)
        this.spinner=true
        this.uploadService.uploadUjian(this.ujian).subscribe(
        event => {
          this.isupdated=true;
          if(event==true){
            this.spinner=false
            this.showSuccess()
          }else{
            this.spinner=false
            this.showError()
          }
        },
        err => {
          this.progress = 0;
          this.showError()
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        })
      })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  getMateriList(){
    this.login = this.sessionService.getId()
    this.uploadService.getMateriPengajar(this.login.idUser).subscribe(data=>{
      this.cities2=data
      console.log(data);
    });
  }

  getKelasList(selectedCity1){
    this.login = this.sessionService.getId()
    this.uploadService.getKelasPengajar(selectedCity1.id, this.login.idUser).subscribe(data=>{
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

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Sukses', detail:'Data Berhasil Diupload'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error', detail:'Data Gagal Diupload'});
  }
}
