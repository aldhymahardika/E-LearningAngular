import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Materi } from 'src/app/layouts/model/materi';
import { Message } from 'primeng/api/message';

@Component({
  selector: 'app-detail-file',
  templateUrl: './detail-file.component.html',
  styleUrls: ['./detail-file.component.css']
})
export class DetailFileComponent implements OnInit {
  selectedFiles: FileList;
  updt = new Materi()
  msgs: Message[] = [];
  isupdated = false;
  constructor(private uploadService: AppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  updateMateri(data:Materi){
    this.route.queryParams
      .subscribe(params=>{
        console.log(params)
        this.updt.id=params.idFile
        this.updt.file = this.selectedFiles.item(0)
        this.updt.judul_materi=data.judul_materi
        this.uploadService.updateMateri(this.updt).subscribe(data=>{
          this.showSuccess()
        })
      })
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  showSuccess() {
    this.msgs = [];
	  this.msgs.push({severity:'success', summary:'Success Message', detail:'Order submitted'});
  }

}
