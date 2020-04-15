import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Hari } from 'src/app/layouts/model/materi';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 
  tanggal = new Hari()
  
  constructor(private route: Router, private routes: ActivatedRoute) { 
    
  }
  
  ngOnInit(): void {
  }

  input(hari, week){
    this.route.navigate(['/upload-materi'], {queryParams: {day: hari, week:week}})
  }

  get(){
    this.routes.queryParams
      .subscribe(params => {
        this.tanggal.day=params.day 
        this.tanggal.week=params.week
        // console.log(params['day']);
                
    });
  }

}
