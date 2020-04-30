import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';
import { AppService } from 'src/app/service/app.service';
import { Materi } from 'src/app/layouts/model/materi';

@Component({
  selector: 'app-materi-pengajar',
  templateUrl: './materi-pengajar.component.html',
  styleUrls: ['./materi-pengajar.component.css']
})
export class MateriPengajarComponent implements OnInit {

  dataKelas: any[];

  constructor(private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute,private router: Router) { 
    this.getListKelasMateri()
  }

  ngOnInit(): void {
  }
  getListKelasMateri(){
    let pId = 'e8a0a6dd-342b-4a4d-9241-b8b8b3fd8939'
    this.uploadService.getListKelasMateri(pId).subscribe(data=>{
      this.dataKelas=data
      console.log(data);
      
    })
  }
}
