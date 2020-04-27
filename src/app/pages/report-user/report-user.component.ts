import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/service/storage.service';
import { AppService } from 'src/app/service/app.service';

@Component({
  selector: 'app-report-user',
  templateUrl: './report-user.component.html',
  styleUrls: ['./report-user.component.css']
})
export class ReportUserComponent implements OnInit {

  dataFile: any[]
  constructor(private uploadService: AppService, private storageService: StorageService, private route: ActivatedRoute,private router: Router) {
    // this.getListMateri()
   }

  ngOnInit(): void {
  }
}
