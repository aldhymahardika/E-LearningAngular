import { Component, OnInit } from '@angular/core';
import { Materi } from 'src/app/layouts/model/materi';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/service/app.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { SelectItem } from 'primeng/api/selectitem';
import { Category } from 'src/app/layouts/model/category';
import { Pengajar } from 'src/app/layouts/model/pengajar';
import { Hari } from 'src/app/layouts/model/hari';
import { Kelas } from 'src/app/layouts/model/kelas';
import { Message } from 'primeng/api/message';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';


@Component({
  selector: 'app-upload-materi',
  templateUrl: './upload-materi.component.html',
  styleUrls: ['./upload-materi.component.css']
})
export class UploadMateriComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  // message = '';
  dataMateri : Materi[];
  fileInfos: Observable<any>;
  files: Observable<Materi[]>;
  // materirespons = new MateriRespon()
  fileUrl;
  materi = new Materi()
  cities2: Category[];
  // selectedCity1: City;
  name:string
  selectedCity1:Category;
  datas = new Materi()
  hari: Hari[];
  setHari :Hari;
  message:string
  setKelas: Kelas;
  kelas: Kelas[];
  msgs: Message[] = [];
  isupdated = false; 
  login = new Login()
  disable = true
  spinner:boolean = false

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router, private sessionService: StorageService) {
    this.materi.category=new Category()
    this.materi.pengajar=new Pengajar()
    this.materi.kelas= new Kelas()
    this.datas.pengajar= new Pengajar()
    this.datas.category= new Category()
    this.datas.kelas= new Kelas()
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
    this.getMateriList();
  }

  upload() {
        this.progress = 0;
        this.materi.topic
        this.materi.tanggal
        this.materi.jam
        this.materi.file = this.selectedFiles.item(0);
        this.materi.kelas.class_id=this.setKelas.class_id
        this.spinner=true
        this.uploadService.upload(this.materi).subscribe(
        event => {
          console.log(this.materi)
          this.isupdated=true;
          if(event == true){
            this.spinner=false
            this.showSuccess()
          }else if(event == false){
            this.showError()
            this.spinner=false
          }
        },
        err => {
          this.progress = 0;
          this.showError()
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        });
  }
  
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  gets(datas){
    this.route.queryParams
    .subscribe(params => {
      let resp = this.uploadService.downloadMateriUser(datas).subscribe((data) => 
      { const url= window.URL.createObjectURL(data)
        window.open(url) 
      })
    }) 
  }

  getMateriList(){
    this.login = this.sessionService.getId()
    console.log(this.login);
    this.uploadService.getMateriPengajar(this.login.idUser).subscribe(data=>{
      this.cities2=data
      console.log(data);
    });
  }

  getKelasList(selectedCity1){
    this.login = this.sessionService.getId()
    console.log(this.login);
    this.uploadService.getKelasPengajar(selectedCity1.id, this.login.idUser).subscribe(data=>{
      this.kelas=data
      console.log(data)
    });
  }

  deleteFile(idMateri:string){ 
    console.log('idmateri =' + idMateri);
    
    this.uploadService.getDelete(idMateri)
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
