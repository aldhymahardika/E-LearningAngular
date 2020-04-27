import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/service/app.service';
import { Materi } from 'src/app/layouts/model/materi';
import { Category } from 'src/app/layouts/model/category';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-materi',
  templateUrl: './materi.component.html',
  styleUrls: ['./materi.component.css']
})
export class MateriComponent implements OnInit {

  // dataMateri : Hari[];
  dataCategory: Category[];
  
  constructor(private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute,private router: Router) {
    this.getMateriList()
   }

  ngOnInit(): void {
  }

  // getAll(){
  //   this.route.queryParams
  //     .subscribe(params => {
  //     this.uploadService.getAllMateri(params.week, params.day).subscribe((data)=>{
  //     this.dataMateri=data , console.log(this.dataMateri)
  //     },
  //       err => console.log("Ada error : !"+ JSON.stringify(err)), 
  //       () => console.log("Completed !"));
  //       console.log(this.dataMateri);
  //     })
  // }

  getMateriList(){
    this.uploadService.getMateriUser().subscribe(data=>{
      this.dataCategory=data
      console.log(data);
    });
  }

  getPengajar(id:string){
    // let coba: string = '1'
    this.router.navigate(['/tables'], {queryParams: {id:id}})
    // localStorage.setItem('id', coba)
    // this.storageService.saveStorage(id)
  }
}
