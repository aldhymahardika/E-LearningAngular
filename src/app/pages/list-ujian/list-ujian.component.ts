import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Forum } from 'src/app/layouts/model/forum';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';
import { MessageService, ConfirmationService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-list-ujian',
  templateUrl: './list-ujian.component.html',
  styleUrls: ['./list-ujian.component.css'],
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
export class ListUjianComponent implements OnInit {
  dataUjian:any[]
  forum = new Forum()
  forums:any[]
  login = new Login()
  spinner=false
  spinner2=true
  constructor(private confirmationService: ConfirmationService, private sessionService: StorageService ,private uploadService: AppService, private route: ActivatedRoute,private router: Router) {
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

  ngOnInit(): void {
    this.getDetailUjian()
    this.getForum()
  }

  getDetailUjian(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getDetailQuiz(params.idFile).subscribe(data=>{
        this.dataUjian=data
        console.log(data)
        this.spinner2=false
      })
    })
  }

  deleteDetailSoal(id:string){
    this.route.queryParams.subscribe(params=>{
      this.uploadService.deleteDetailSoal(id).subscribe(data=>{

      },
      err=>{
        // this.router.navigate(['/list-ujian'], {queryParams:{idFile:params.idFile, kId:params.kId}})
        this.getDetailUjian()
        this.getForum()
      })
    })
  }

  updateUjian(idFile:string){
    this.route.queryParams.subscribe(params=>{
      this.router.navigate(['/detail-file-ujian'], {queryParams:{idFile:idFile, kId:params.kId}})
    })
  }
  
  getsKuis(datas){
    this.spinner=true;
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.downloadKuisUser(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url)
   this.spinner=false
   },
   err=>{
     this.spinner=false
   })
  }) 
  }

  getMenu(headerid:string):MenuItem[]{
    return [
      {label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.updateUjian(headerid);
      }},
      {label: 'Delete', icon: 'pi pi-times', command: () => {
        this.confirm(headerid);
      }}
  ];
  }

  confirm(idFile) {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-info-circle',
        accept: () => {
          this.deleteDetailSoal(idFile)
            // this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
        },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
  }

  setForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.login = this.sessionService.getId()
      this.forum.isiPesan
      let ser = this.uploadService.setForumKuis(params.idFile, this.forum.isiPesan, this.login.idUser );
      ser.subscribe(data=>{
        this.forum.isiPesan=""
        this.loadForum(params.hId)

      },
      err=>{
        // this.router.navigate(['/list-ujian'], {queryParams: {idFile: params.idFile, kId: params.kId}})
        this.getDetailUjian()
        this.getForum()
      })
      // this.getALlMateri()
      // this.getForum()
    })
  }

  getForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getForumKuis(params.idFile).subscribe(data=>{
        this.forums=data
        console.log(data);
        
      })
    })
  }

  loadForum(hId:string){
    this.uploadService.getForum(hId).subscribe(data=>{
      this.forums=data
    })
  }

  getBack(){
    this.route.queryParams.subscribe(params=>{
      this.router.navigate(['/tables-report'], {queryParams: {kId:params.kId}})
    })
  }
}
