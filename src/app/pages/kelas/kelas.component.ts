import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-kelas',
  templateUrl: './kelas.component.html',
  styleUrls: ['./kelas.component.css']
})
export class KelasComponent implements OnInit {
  
  dataKelas: any[];
  
  constructor(private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute,private router: Router) {
    this.getListKelasMateri()
   }

  ngOnInit(): void {
  }

  getListKelasMateri(){
    let pId = '1'
    this.uploadService.getListKelasMateri(pId).subscribe(data=>{
      this.dataKelas=data
      console.log(data);
      
    })
  }

}
