import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/layouts/model/category';
import { AppService } from 'src/app/service/app.service';
import { StorageService } from 'src/app/service/storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-kelas-user',
  templateUrl: './kelas-user.component.html',
  styleUrls: ['./kelas-user.component.css']
})
export class KelasUserComponent implements OnInit {
  dataCategory:Category[]
  constructor(private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute,private router: Router) {
    this.getKelasUser()
   }

  ngOnInit(): void {
  }

  getKelasUser(){
    let uId = '2cd47619-d2c0-46d2-b7c2-4886b0ba9700'
    this.uploadService.getKelasUser(uId).subscribe(data=>{
      this.dataCategory=data
      console.log(data);
    });
  }

}
