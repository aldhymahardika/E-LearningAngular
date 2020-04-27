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

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router) {
    this.materi.category=new Category()
    this.materi.pengajar=new Pengajar()
    this.materi.kelas= new Kelas()
    this.datas.pengajar= new Pengajar()
    this.datas.category= new Category()
    this.datas.kelas= new Kelas()
    // this.get();
    // this.getAll(); 
    this.getMateriList();
    // this.getKelasList();
    this.hari = [
      {label: 'Senin', value: 'MONDAY'},
      {label: 'Selasa', value: 'TUESDAY'},
      {label: 'Rabu', value: 'WEDNESDAY'},
      {label: 'Kamis', value: 'THURSDAY'},
      {label: 'Jumat', value: 'FRIDAY'},
      {label: 'Sabtu', value: 'SATURDAY'},
      {label: 'Minggu', value: 'SUNDAY'},
  ];
  
    // this.getAll(this.tanggal.week,this.tanggal.week);
  }
  


  ngOnInit(): void {
    // this.getMateriList();
  }
  
  // get(){
  //   this.route.queryParams
  //     .subscribe(params => {
  //       this.tanggal.day=params.day 
  //       this.tanggal.week=params.week
  //       // console.log(params['day']);
          
  //   });
  // }

  upload() {
        // this.uploadService.getMateriAja().subscribe(data=>{
        // let mater: Hari
        this.progress = 0;
        // this.tanggal.day=params.day;
        // this.tanggal.week=params.week;
        // this.tanggal.endDate;
        this.materi.topic
        this.materi.tanggal
        this.materi.jam
        // this.materi.hari=this.setHari.value
        // this.materi.pengajar.pengajar_id='1'
        this.materi.file = this.selectedFiles.item(0);
        // this.materi.category.id=this.selectedCity1.id;
        this.materi.kelas.kelas_id=this.setKelas.kelas_id
        // console.log(this.tanggal);
        console.log(this.setKelas)
        this.uploadService.upload(this.materi).subscribe(
        event => {
        //   console.log(event)
          this.isupdated=true;
          // this.message=event
          this.showSuccess()
          // this.message='Upload Berhasil'
          // this.message=event
          // console.log(this.tanggal.judulMateri);
          // console.log(this.tanggal);
          // if (event.type === HttpEventType.UploadProgress) {
          //   this.progress = Math.round(100 * event.loaded / event.total);
            // if (event instanceof HttpResponse) {
            // this.message = event.body.message;
          // this.fileInfos = this.uploadService.getFiles();
          // }
        },
        err => {
          this.progress = 0;
          this.showError()
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        });
      // });
      // this.selectedFiles = undefined;
  // })
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
  //  let blob:any = new Blob(this.fileInfos, { type: 'text/json; charset=utf-8' });
  }

  // getAll(){
  //   this.route.queryParams
  //     .subscribe(params => {
  //       // console.log(params);
  //       let pengajar = '1'
  //       let materi = '1'
  //       let topik ='1'
  //     this.uploadService.getAllMateri(pengajar,materi,topik).subscribe((data)=>{
  //     this.dataMateri=data , console.log(this.dataMateri)
  //     },
  //       err => console.log("Ada error : !"+ JSON.stringify(err)), 
  //       () => console.log("Completed !"));
  //       console.log(this.dataMateri);
  //     })
  // }

  getMateriList(){
    let pId = '1'
    this.uploadService.getMateriPengajar(pId).subscribe(data=>{
      this.cities2=data
      // this.getKelasList()
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

  getActive(){

  }

  getDeactive(){

  }

  // updateFile(id:number){
  //   this.router.navigate(['/upload-update'], {queryParams: {id: id}});
  //   console.log(id);
    
  // }

  deleteFile(idMateri:string){ 
    console.log('idmateri =' + idMateri);
    
    this.uploadService.getDelete(idMateri)
  }

  showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }

  showError() {
      this.msgs = [];
      this.msgs.push({severity:'error', summary:'Error Message', detail:'Validation failed'});
  }
}
