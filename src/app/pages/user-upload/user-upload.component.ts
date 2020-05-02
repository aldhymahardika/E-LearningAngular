import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Materi } from 'src/app/layouts/model/materi';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/service/app.service';
import { FileUser } from 'src/app/layouts/model/file-user';
import { Category } from 'src/app/layouts/model/category';
import { Pengajar } from 'src/app/layouts/model/pengajar';
import { User } from 'src/app/layouts/model/users';
import { Forum } from 'src/app/layouts/model/forum';
import { StorageService } from 'src/app/service/storage.service';
import { Login } from 'src/app/layouts/model/login';

@Component({
  selector: 'app-user-upload',
  templateUrl: './user-upload.component.html',
  styleUrls: ['./user-upload.component.css']
})
export class UserUploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  dataMateri : Materi[];
  fileInfos: Observable<any>;
  // files: Hari;
  // materirespons = new MateriRespon()
  fileUrl;
  // materi: Category;
  jawab = new FileUser()
  forum = new Forum()
  forums:any[]
  login = new Login()

  constructor(private uploadService: AppService, private route: ActivatedRoute,private router: Router, private sessionService: StorageService) { 
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
    // this.jawab.materi=new Category()
    this.jawab.user= new User()
    // this.jawab.pengajar=new Pengajar() 
    this.getALlMateri()
    this.getForum()
  }
  
  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      // this.get();
      console.log(params); 
    });
  }

  // get(){
  //   this.route.queryParams
  //     .subscribe(params => {
  //       this.tanggal.day=params.day 
  //       this.tanggal.week=params.week
  //       // console.log(params['day']);
                
  //   });
  // }

  // getAll(){
  //   this.route.queryParams
  //     .subscribe(params => {
  //     this.uploadService.getMateriUser().subscribe((data)=>{
  //     this.dataMateri=data , console.log(this.dataMateri)
  //     },
  //       err => console.log("Ada error : !"+ JSON.stringify(err)), 
  //       () => console.log("Completed !"));
  //       console.log(this.dataMateri);
  //     })
  // }

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

  getALlMateri(){
    this.route.queryParams
    .subscribe(params => {
      console.log(params);
    this.uploadService.getAllMateri(params.hId).subscribe(data=>{
      this.dataMateri=data
      })
    })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  // upload() {
  //   this.route.queryParams
  //     .subscribe(params => {
  //       // this.uploadService.getMateriAja().subscribe(data=>{
  //       // let mater: Hari
  //       this.progress = 0;
  //       // this.tanggal.day=params.day;
  //       // this.tanggal.week=params.week;
  //       // this.tanggal.endDate;
  //       this.jawab.pengajar.pengajar_id='1'
  //       this.jawab.user.userId='2'
  //       this.jawab.file = this.selectedFiles.item(0);
  //       this.jawab.materi.id=params.mid
  //       this.uploadService.uploadPeserta(this.jawab).subscribe(
  //       event => {
  //         // console.log(this.tanggal.judulMateri);
  //         // console.log(this.tanggal);
  //         // if (event.type === HttpEventType.UploadProgress) {
  //         //   this.progress = Math.round(100 * event.loaded / event.total);
  //         // } else if (event instanceof HttpResponse) {
  //         //   this.message = event.body.message;
  //         // this.fileInfos = this.uploadService.getFiles();
  //         // }
  //       },
  //       err => {
  //         this.progress = 0;
  //         this.message = 'Could not upload the file!';
  //         this.currentFile = undefined;
  //       });
  //     });
  //     // this.selectedFiles = undefined;
  // // })
  // }

  setForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.login = this.sessionService.getId()
      this.forum.isiPesan
      let ser = this.uploadService.setForum(params.hId, this.forum.isiPesan, this.login.idUser );
      ser.subscribe(data=>{
        this.forum.isiPesan=""
        this.loadForum(params.hId)
        this.router.navigate(['/user-upload'], {queryParams: {hId: params.hId}})
      })
      // this.getALlMateri()
      // this.getForum()
    })
    // this.getForum()
  }

  getForum(){
    this.route.queryParams
    .subscribe(params=>{
      this.uploadService.getForum(params.hId).subscribe(data=>{
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
}
