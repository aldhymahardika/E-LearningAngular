import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Nilai } from 'src/app/layouts/model/nilai';
import { Subject } from 'rxjs';
import { MenuItem } from 'primeng/api/menuitem';
import { MessageService, ConfirmationService, Message } from 'primeng/api';

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
  exampleFlag=true;
  exampleFlag2=true;
  msg:boolean
  dataScore:any[]
  dataUjian:any[]
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  msgs: Message[] = [];
  isupdated=false
  isupdate=false
  nama:string
  spinner=false
  spinner2=true
  bar2=false
  bar=false

  constructor(private uploadService: AppService, private route: ActivatedRoute, private router: Router, private confirmationService: ConfirmationService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
          this.router.navigated = false;
          window.scrollTo(0, 0    );
      }
  });
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.route.queryParams.subscribe(params=>{
      this.nama=params.name
    })
    this.getDetailUser();
    this.getDetailScore();
    this.getDetailUjian();
  } 

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  getDetailUser(){
    this.route.queryParams
    .subscribe(params=>{
      console.log(params);
      this.uploadService.getDetailUser(params.kId, params.uId).subscribe(data=>{
        this.dtTrigger.next();
        this.details=data
        this.spinner2=false
        console.log(data);
      })
    })
  }

  updateNilai(data:any){
    this.bar=true
    this.route.queryParams
    .subscribe(params=>{
      this.isupdated=true
      this.uploadService.setNilaiKuis(params.kId, params.uId, this.dataNilai.nilaiUtama, this.dataNilai.jenis, this.dataNilai.nilaiKehadiran, this.dataNilai.tanggal, this.dataNilai.title, this.dataNilai.tanggalPeriode).subscribe(data=>{
        this.msg=data
        this.bar=false
        this.showSuccess()        
        this.router.navigate(['/report-input'], {queryParams: {kId: params.kId, uId:params.uId}})
      },
      err=>{
        this.showError()
      })
    })
  }

  input(data, el:HTMLElement){
    this.route.queryParams
    .subscribe(params=>{
      this.dataNilai.tanggalPeriode=params.period
      this.dataNilai.title=data.title
      this.dataNilai.jenis= data.type
      this.dataNilai.kelas=params.kId
      this.dataNilai.user=params.uId
      this.dataNilai.tanggal=data.question_date
      el.scrollIntoView({behavior : 'smooth'})
      this.localClick(2)
    })
  }

  downloadFileUser(datas){
    this.spinner=true 
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.downloadFileUser(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url)
   this.spinner=false
   },
   err=>{
    this.spinner=false
   })
  }) 
  }

  getDetailScore(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailScore(params.uId, params.kId).subscribe(data=>{
        this.dataScore=data
        console.log(data);
        this.spinner2=false
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
        this.spinner2=false
        console.log(data);
        console.log(params);
        
      })
    })
  }

  private extractData(res: Response) {
    const body = res.json();
    // return body.data || {};
  }

  getMenu(data, el:HTMLElement):MenuItem[]{
    return [
      {label: 'input Nilai', icon: 'ni ni-fat-add', command: () => {
        this.input(data, el);
      }}
    ];
  }

  getMenuTugas(nilai:string):MenuItem[]{
    return [
      {label: 'Delete', icon: 'pi pi-times', command: () => {
        this.confirm1(nilai);
      }}
    ];
  }

  getMenuUjian(nilai:string):MenuItem[]{
    return [
      {label: 'Delete', icon: 'pi pi-times', command: () => {
        this.confirm2(nilai);
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
          this.getDeleteUJian(data)
          

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
      this.dataKuis.tanggalPeriode=params.period
      this.dataKuis.id=data.id
      this.dataKuis.jenis= "TUGAS"
      this.dataKuis.kelas=params.kId
      this.dataKuis.user=params.uId
      this.dataKuis.tanggal=data.question_date
      this.uploadService.getDeleteUjian(this.dataKuis.id, params.kId, params.uId, this.dataKuis.jenis).subscribe(data=>{

      },
      err=>{
        this.router.navigate(['/report-input'], {queryParams: {kId: params.kId, uId:params.uId}})
      })
    })
  }

  getDeleteUJian(data){
    this.route.queryParams
    .subscribe(params=>{
      this.dataKuis.tanggalPeriode=params.period
      this.dataKuis.id=data.id
      this.dataKuis.jenis= "Ujian"
      this.dataKuis.kelas=params.kId
      this.dataKuis.user=params.uId
      this.dataKuis.tanggal=data.question_date
      this.uploadService.getDeleteUjian(this.dataKuis.id, params.kId, params.uId, this.dataKuis.jenis).subscribe(data=>{
        
      },
      err=>{
        this.router.navigate(['/report-input'], {queryParams: {kId: params.kId, uId:params.uId}})
      })
    })
  }

  getUpdateKuis(data, el:HTMLElement){
    this.route.queryParams
    .subscribe(params=>{
      this.dataKuis.tanggalPeriode=params.period
      this.dataKuis.title=data.title
      this.dataKuis.id=data.id
      this.dataKuis.jenis= "TUGAS"
      this.dataKuis.kelas=params.kId
      this.dataKuis.user=params.uId
      this.dataKuis.tanggal=data.question_date
      el.scrollIntoView({behavior : 'smooth'})
    })
  }

  getUpdateUJian(data, el:HTMLElement){
    this.route.queryParams
    .subscribe(params=>{
      this.dataKuis.tanggalPeriode=params.period
      this.dataKuis.title=data.title
      this.dataKuis.id=data.id
      this.dataKuis.jenis= "UJIAN"
      this.dataKuis.kelas=params.kId
      this.dataKuis.user=params.uId
      this.dataKuis.tanggal=data.question_date
      el.scrollIntoView({behavior : 'smooth'})
      // if(x==1){
      //   this.exampleFlag=true;
      //   }
      //   else{
      //   this.exampleFlag=false;
      //   }
    })
  }

  setUpdateKuis(dataKuis){
    this.bar2=true
    this.route.queryParams
    .subscribe(params=>{
      this.isupdate=true
      this.uploadService.setUpdateKuis(this.dataKuis.id, params.kId, params.uId, this.dataKuis.nilaiUtama, this.dataKuis.jenis, this.dataKuis.nilaiKehadiran, this.dataKuis.tanggalPeriode).subscribe(data=>{
        this.msg=data
        this.bar2=false
        this.showSuccess()
        this.router.navigate(['/report-input'], {queryParams: {kId: params.kId, uId:params.uId}})
      },
      err=>{
        this.bar2=false
        this.showError()

      })
    })
  }

  getBack(){
    this.route.queryParams
    .subscribe(params=>{
      this.router.navigate(['/list-materi'], {queryParams: {kId: params.kId}})
    })
  }

  localClick(x) {
    if(x==1){
    this.exampleFlag=true;
    }
    else{
    this.exampleFlag=false;
    }
  }

  globalClick(x) {
    if(x==1){
    this.exampleFlag2=true;
    }
    else{
    this.exampleFlag2=false;
    }
  }

  showSuccess() {
    this.msgs = [];
    this.msgs.push({severity:'success', summary:'Sukses', detail:'Berhasil'});
  }

  showError() {
    this.msgs = [];
    this.msgs.push({severity:'error', summary:'Error', detail:'Terjadi Kesalahan'});
  }
}
