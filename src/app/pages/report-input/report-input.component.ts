import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Nilai } from 'src/app/layouts/model/nilai';
import { Subject } from 'rxjs';
import { MenuItem } from 'primeng/api/menuitem';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-report-input',
  templateUrl: './report-input.component.html',
  styleUrls: ['./report-input.component.css'],
  providers: [ConfirmationService, MessageService]
})
export class ReportInputComponent implements OnInit, OnDestroy {
  dataNilai = new Nilai()
  dataKuis = new Nilai()
  dataUji = new Nilai()
  details:any[]
  exampleFlag=false;
  msg:boolean
  dataScore:any[]
  dataUjian:any[]
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();

  constructor(private uploadService: AppService, private route: ActivatedRoute, private router: Router, private confirmationService: ConfirmationService) { 
    this.getDetailUser();
    this.getDetailScore();
    this.getDetailUjian();
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  getDetailUser(){
    this.route.queryParams
    .subscribe(params=>{
      console.log(params);
      
      this.uploadService.getDetailUser(params.kId, params.uId).subscribe(data=>{
        this.details=data
        console.log(data);
      })
    })
  }

  updateNilai(data:any){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.setNilaiKuis(params.kId, params.uId, this.dataNilai.nilaiUtama, this.dataNilai.jenis, this.dataNilai.nilaiKehadiran, this.dataNilai.tanggal).subscribe(data=>{
        this.msg=data
        console.log(this.dataNilai);
        console.log(data);        
      })
    })
  }

  input(data, el:HTMLElement){
    this.route.queryParams
    .subscribe(params=>{
      this.dataNilai.jenis= data.jenis
      this.dataNilai.kelas=params.kId
      this.dataNilai.user=params.uId
      // this.dataNilai.nilaiUtama
      // this.dataNilai.nilaiKehadiran
      this.dataNilai.tanggal=data.tanggalSoal
      el.scrollIntoView({behavior : 'smooth'})
    })
  }

  downloadFileUser(datas){
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.downloadFileUser(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url) 
   })
  }) 
  }

  getDetailScore(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailScore(params.uId, params.kId).subscribe(data=>{
        this.dtTrigger.next();
        this.dataScore=data
        console.log(data);
        console.log(params);
        
      })
    })
  }

  getDetailUjian(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailUjian(params.uId, params.kId).subscribe(data=>{
        // this.dtTrigger.next();
        this.dataUjian=data
        console.log(data);
        console.log(params);
        
      })
    })
  }

  private extractData(res: Response) {
    const body = res.json();
    // return body.data || {};
  }

  getMenuTugas(nilai:string):MenuItem[]{
    return [
      {label: 'Delete', icon: 'pi pi-times', command: () => {
        this.confirm1(nilai);
      }}
    ];
  }

  getMenuUjian(nilai):MenuItem[]{
    return [
      {label: 'Delete', icon: 'pi pi-times', command: () => {
        this.getDeleteUJian(nilai);
      }}
    ];
  }

  confirm1(data) {
    let id = window.localStorage.getItem('kId')
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.getDeleteKuis(data)
          

            console.log(id);
               
            // this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
        },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
  }
  
  confirm2(data) {
    let id = window.localStorage.getItem('kId')
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.getDeleteKuis(data)
          

            console.log(id);
               
            // this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
        },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
  }

  getDeleteKuis(data){
    this.route.queryParams
    .subscribe(params=>{
      this.dataKuis.id=data.id
      this.dataKuis.jenis= "TUGAS"
      this.dataKuis.kelas=params.kId
      this.dataKuis.user=params.uId
      this.dataKuis.tanggal=data.tanggalSoal
    this.uploadService.getDeleteUjian(this.dataKuis.id, params.kId, params.uId, this.dataKuis.jenis).subscribe()
    })
  }

  getDeleteUJian(data){
    this.route.queryParams
    .subscribe(params=>{
      this.dataKuis.id=data.id
      this.dataKuis.jenis= "Ujian"
      this.dataKuis.kelas=params.kId
      this.dataKuis.user=params.uId
      this.dataKuis.tanggal=data.tanggalSoal
    this.uploadService.getDeleteUjian(this.dataKuis.id, params.kId, params.uId, this.dataKuis.jenis).subscribe()
    })
  }

  getUpdateKuis(data, el:HTMLElement){
    this.route.queryParams
    .subscribe(params=>{
      this.dataKuis.id=data.id
      this.dataKuis.jenis= "TUGAS"
      this.dataKuis.kelas=params.kId
      this.dataKuis.user=params.uId
      this.dataKuis.tanggal=data.tanggalSoal
      el.scrollIntoView({behavior : 'smooth'})
    })
  }

  getUpdateUJian(data, el:HTMLElement, x){
    this.route.queryParams
    .subscribe(params=>{
      this.dataKuis.id=data.id
      this.dataKuis.jenis= "UJIAN"
      this.dataKuis.kelas=params.kId
      this.dataKuis.user=params.uId
      this.dataKuis.tanggal=data.tanggalSoal
      el.scrollIntoView({behavior : 'smooth'})
      if(x==1){
        this.exampleFlag=true;
        }
        else{
        this.exampleFlag=false;
        }
    })
  }

  setUpdateKuis(dataKuis){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.setUpdateKuis(this.dataKuis.id, params.kId, params.uId, this.dataKuis.nilaiUtama, this.dataKuis.jenis, this.dataKuis.nilaiKehadiran).subscribe(data=>{
        this.msg=data
      })
    })
  }
}
