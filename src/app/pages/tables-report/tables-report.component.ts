import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {Message, ConfirmationService, MenuItem} from 'primeng/api';
import {MessageService} from 'primeng/api';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tables-report',
  templateUrl: './tables-report.component.html',
  styleUrls: ['./tables-report.component.css'],
  providers: [ConfirmationService, MessageService],
  styles: [`
        :host ::ng-deep button {
            margin-right: .25em;
        }

        :host ::ng-deep .custom-toast .ui-toast-message {
            background: #FC466B;
            background: -webkit-linear-gradient(to right, #3F5EFB, #FC466B);
            background: linear-gradient(to right, #3F5EFB, #FC466B);
        }

        :host ::ng-deep .custom-toast .ui-toast-message div {
            color: #ffffff;
        }

        :host ::ng-deep .custom-toast .ui-toast-message.ui-toast-message-info .ui-toast-close-icon {
            color: #ffffff;
        }
    `]
})
export class TablesReportComponent implements OnInit, OnDestroy {

  dataFile:any[]
  dataUjian:any[]
  dataKuis:any[]
  items: MenuItem[];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  spinner2=true
constructor(private confirmationService: ConfirmationService, private uploadService: AppService, private route: ActivatedRoute, private router: Router, private messageService: MessageService ) { 
    // this.getListMateri();
    this.router.routeReuseStrategy.shouldReuseRoute = function() {
      return false;
  };
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
          // trick the Router into believing it's last link wasn't previously loaded
          this.router.navigated = false;
          // if you need to scroll back to top, here is the right place
          window.scrollTo(0, 0    );
      }
  });
  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.getKelas();
    this.getQuiz();
    this.getUjian();
  }

  ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }

  getMenu(headerid:string):MenuItem[]{
    return [
      {label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.getUpdateMateri(headerid);
      }},
      {label: 'Delete', icon: 'pi pi-times', command: () => {
        this.confirm2(headerid);
        console.log(headerid);
      }}
  ];
  }

  getMenuKuis(headerid):MenuItem[]{
    return [
      {label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.getUpdateUjian(headerid);
      }},
      {label: 'Delete', icon: 'pi pi-times', command: () => {
        console.log(headerid);
        
        this.confirm1(headerid);
      }}
    ];
  }

  getKelas(){
    this.route.queryParams
    .subscribe(params => {
      window.localStorage.setItem('kId', params.kId)
    this.uploadService.getKelas(params.kId).subscribe(data=>{
      this.dtTrigger.next();
      this.dataFile=data
      this.spinner2=false
      console.log(data);
    })
  })
  }

  getDeleteMateri(headerid:string){
    this.uploadService.deleteMateri(headerid).subscribe(data=>{
      this.route.queryParams.subscribe(params => {
        this.router.navigate(['/tables-report'], {queryParams:{kId: params.kId}})
      })
     }) 
  }

  getDeleteSoal(headerid:string){
    this.uploadService.deleteSoal(headerid).subscribe(data=>{
      this.route.queryParams.subscribe(params => {
        this.router.navigate(['/tables-report'], {queryParams:{kId: params.kId}})
      })
    })
  }

  getQuiz(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getListQuiz(params.kId).subscribe(data=>{
        // this.dtTrigger.next();
        this.dataKuis=data
        this.spinner2=false
        console.log(data);
      })
    })
  }

  getUjian(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getListUjian(params.kId).subscribe(data=>{
        // this.dtTrigger.next();
        this.dataUjian=data
        this.spinner2=false
        console.log(data);
      })
    })
  }

  getDetailMateri(idFile:string){
    this.route.queryParams
    .subscribe(params => {
    this.router.navigate(['/list-file'], {queryParams: {idFile:idFile, kId:params.kId}})
    })
  }

  getDetailKuis(idFile:string){
    this.route.queryParams
    .subscribe(params => {
    this.router.navigate(['/list-ujian'], {queryParams: {idFile:idFile, kId:params.kId}})
    })
  }

  getUpdateMateri(idFile:string){
    this.route.queryParams
    .subscribe(params => {
    this.router.navigate(['/detail-materi'], {queryParams: {idFile:idFile, kId:params.kId}})
    })
  }

  getUpdateUjian(idFile:string){
    this.route.queryParams
    .subscribe(params => {
    this.router.navigate(['/detail-ujian'], {queryParams: {idFile:idFile, kId:params.kId}})
    })
  }

  confirm2(idFile) {
    let id = window.localStorage.getItem('kId')
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.getDeleteMateri(idFile)
          // let id = this.route.snapshot.params.
            // this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
        },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });

  }   

  confirm1(idFile) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.getDeleteSoal(idFile)
            // this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
        },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
  }  
  
  private extractData(res: Response) {
    const body = res.json();
    // return body.data || {};
  }

  getBack(){
    this.router.navigate(['/materi-pengajar'])
  }
}
