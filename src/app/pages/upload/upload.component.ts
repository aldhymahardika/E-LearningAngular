import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Materi } from 'src/app/layouts/model/materi';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  input(hari, week){
    this.route.navigate(['/upload-materi'], {queryParams: {day: hari, week:week}})
  }
}
