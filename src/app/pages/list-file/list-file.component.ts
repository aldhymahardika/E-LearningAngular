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

  constructor(private confirmationService: ConfirmationService,private uploadService: AppService, private route: ActivatedRoute,private router: Router, private sessionService: StorageService) {
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
    this.getListMateri()
    this.getForum()
  }

  getListMateri(){
    this.route.queryParams
    .subscribe(params=>{
      console.log(params);
      
    this.uploadService.getListMateri(params.idFile).subscribe(data=>{
      this.dataFile=data
      console.log(data);
    })
  })
  }

  // getDetailUjian(){
  //   this.route.queryParams
  //   .subscribe(params=>{
  //     this.uploadService.getDetailQuiz(params.idFile).subscribe(data=>{
  //       this.dataUjian=data
  //       console.log(data)
  //     })
  //   })
  // }

  download(datas){
      this.route.queryParams
      .subscribe(params => {
     let resp = this.uploadService.downloadMateriUser(datas).subscribe((data) => 
     { const url= window.URL.createObjectURL(data)
     window.open(url) 
     })
    }) 
    //  let blob:any = new Blob(this.fileInfos, { type: 'text/json; charset=utf-8' });
  }

  update(idFile:string){
      this.router.navigate(['/detail-file'], {queryParams: {idFile:idFile}})
  }

  delete(id:string){
    this.route.queryParams.subscribe(params=>{
      this.uploadService.deleteFile(id).subscribe(data=>{
        // this.router.navigate(['/list-file'], {queryParams:{idFile:params.idFile}})
      },
      err=>{
        this.getListMateri()
    this.getForum()
      })
    })
  }

  // deleteDetailSoal(id:string){
  //   this.uploadService.deleteDetailSoal(id).subscribe(data=>{ })
  // }

  // updateUjian(idFile:string){
  //   this.router.navigate(['/detail-file-ujian'], {queryParams:{idFile:idFile}})
  // }
  
  // getsKuis(datas){
  //   this.route.queryParams
  //   .subscribe(params => {
  //  let resp = this.uploadService.downloadKuisUser(datas).subscribe((data) => 
  //  { const url= window.URL.createObjectURL(data)
  //  window.open(url) 
  //  })
  // }) 
  // }

  getsMateri(datas){
    this.route.queryParams
    .subscribe(params => {
   let resp = this.uploadService.downloadMateriUser(datas).subscribe((data) => 
   { const url= window.URL.createObjectURL(data)
   window.open(url) 
   })
  }) 
  //  let blob:any = new Blob(this.fileInfos, { type: 'text/json; charset=utf-8' });
  }

  setForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.login = this.sessionService.getId()
      this.forum.isiPesan
      let ser = this.uploadService.setForum(params.idFile, this.forum.isiPesan, this.login.idUser );
      ser.subscribe(data=>{
        this.forum.isiPesan=""
        this.loadForum(params.hId)
      },
      err=>{
        // this.router.navigate(['/list-file'], {queryParams:{idFile:params.idFile, kId: params.kId}})
        this.getListMateri()
    this.getForum()
      })
      // this.getALlMateri()
      // this.getForum()
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
    this.route.queryParams.subscribe(params=>{
      this.router.navigate(['/tables-report'], {queryParams: {kId: params.kId}})
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
