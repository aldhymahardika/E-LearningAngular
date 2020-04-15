import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs'
import { Hari } from '../layouts/model/materi';
import { Category } from '../layouts/model/category';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseUrl = 'http://f55dfaf4.ngrok.io'

  constructor(private http: HttpClient) { }

  // upload(materi : Materi): Observable<HttpEvent<any>> {
  //   const formData: FormData = new FormData();
  //   formData.append('file', materi.file );
  //   formData.append('name', materi.imageName );
  //   const req = new HttpRequest('POST', this.baseUrl+`/upload/materi`,formData, {
  //     reportProgress: true,
  //     responseType: 'json'
  //   });

  //   return this.http.request(req);
  // }

  getEditMateri(materi:Hari): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', materi.file );
    formData.append('name', materi.judul_materi );
    formData.append('status', materi.status);
    const req = new HttpRequest('POST', this.baseUrl+`/upload/materi`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.baseUrl+ '/files');
  }

  getMateri(datas){
    return this.http.get(this.baseUrl+"/materi?week="+ datas.week +"&day="+ datas.day +"&id="+ datas.id, {responseType: 'blob'});
  }


  getAllMateri(week:number, day:number) : Observable<Hari[]>{
    return this.http.get<Hari[]>(this.baseUrl+"/viewall?week=" + week +"&day="+ day);
  }

  upload(materi : Hari): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('day', materi.day );
    formData.append('week', materi.week );
    formData.append('file', materi.file );
    formData.append('name', materi.judul_materi );
    formData.append('cId', materi.category.id);
    const req = new HttpRequest('POST', this.baseUrl+`/upload/materi`,formData, {
      reportProgress: true,
      responseType: 'json'
    
    });

    return this.http.request(req);
  }

  getMateriUser(week:number, day:number) : Observable<Hari[]>{
    return this.http.get<Hari[]>(this.baseUrl+"/viewallactive?week=" + week +"&day="+ day);
  }

  getMateriAja(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+"/viewallcategory");
  }

  getDelete(id: string){
    console.log('apapun')
    return this.http.post(this.baseUrl + "/delmateri?id=" + id, {})
  }
}
