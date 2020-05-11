import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Forum } from 'src/app/layouts/model/forum';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';
import { MenuItem } from 'primeng/api/menuitem';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-file',
  templateUrl: './list-file.component.html',
  styleUrls: ['./list-file.component.css'],
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
export class ListFileComponent implements OnInit {

  dataFile:any[]
  dataUjian:any[]
  forum = new Forum()
  forums:any[]
  login = new Login()
  kIds:string
  spinner=false
  spinner2=true
  constructor(private confirmationService: ConfirmationService,private uploadService: AppService, private route: ActivatedRoute,private router: Router, private sessionService: StorageService) {
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
    this.getListMateri()
    this.getForum()
  }

  getListMateri(){
    this.route.queryParams
    .subscribe(params=>{
      console.log(params);
      this.uploadService.getListMateri(params.idFile).subscribe(data=>{
      this.dataFile=data
      this.spinner2=false
      console.log(data);
    })
  })
  }

  download(datas){
    this.spinner=true;
      this.route.queryParams
      .subscribe(params => {
     let resp = this.uploadService.downloadMateriUser(datas).subscribe((data) => 
     { const url= window.URL.createObjectURL(data)
     window.open(url)
     this.spinner=false;
     },
     err=>{
      this.spinner=false;
     })
    }) 
  }

  update(idFile:string){
    this.route.queryParams.subscribe(params=>{
      this.router.navigate(['/detail-file'], {queryParams: {idFiles:idFile, idFile:params.idFile}})
    })
  }

  delete(id:string){
    this.route.queryParams.subscribe(params=>{
      this.uploadService.deleteFile(id).subscribe(data=>{
        this.getListMateri()
        this.getForum()
      },
      err=>{
        this.getListMateri()
        this.getForum()
      })
    },
    erro=>{
              this.getListMateri()
        this.getForum()
    })
  }

  getsMateri(datas){
    this.spinner=true;
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.downloadMateriUser(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url)
   this.spinner=false;
   },
   err=>{
    this.spinner=false;
   })
  }) 
  }

  setForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.login = this.sessionService.getId()
      this.forum.isiPesan
      let ser = this.uploadService.setForum(params.idFile, this.forum.isiPesan, this.login.idUser );
      ser.subscribe(data=>{
        console.log("1" + data);
        
        this.forum.isiPesan=""
        this.getListMateri()
        this.getForum()        
      },
      err=>{
        console.log("2" + err);
        
      })
    })
  }

  getForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getForum(params.idFile).subscribe(data=>{
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
    this.kIds=this.sessionService.getKelas()
    this.route.queryParams.subscribe(params=>{
      this.router.navigate(['/tables-report'], {queryParams: {kId: this.kIds}})
    })
  }

  getMenu(headerid:string):MenuItem[]{
    return [
      {label: 'Update', icon: 'pi pi-refresh', command: () => {
          this.update(headerid);
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
          this.delete(idFile)
            // this.msgs = [{severity:'info', summary:'Confirmed', detail:'Record deleted'}];
        },
        reject: () => {
            // this.msgs = [{severity:'info', summary:'Rejected', detail:'You have rejected'}];
        }
    });
  }  
}
