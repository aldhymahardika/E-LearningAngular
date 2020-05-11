import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, from } from 'rxjs'
import { Materi } from '../layouts/model/materi';
import { Category } from '../layouts/model/category';
import { Topic } from '../layouts/model/topic';
import { FileUser } from '../layouts/model/file-user';
import { computeMsgId, Quote } from '@angular/compiler';
import { Ujian } from '../layouts/model/ujian';
import { Kelas } from '../layouts/model/kelas';
import { Quiz } from '../layouts/model/quiz'; 
import { Nilai } from '../layouts/model/nilai';
import { Forum } from '../layouts/model/forum';

@Injectable({
  providedIn: 'root'
})

export class AppService {
 
  private baseUrl= 'http://5b46f3df.ngrok.io'

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

  getEditMateri(materi:Materi): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();
    formData.append('file', materi.file );
    formData.append('name', materi.judul_materi );
    // formData.append('status', materi.status);
    const req = new HttpRequest('POST', this.baseUrl+`/upload/materi`,formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.baseUrl+ '/files');
  }
  //----------------------- DOWNLOAD -------------------------------
  //download materi
  downloadMateriUser(datas){
    console.log(datas);
    return this.http.get(this.baseUrl+"/file-materi/download?headerfile=" + datas.file_id, {responseType: 'blob'});
  }

  //download kuis
  downloadKuisUser(datas){
    return this.http.get(this.baseUrl+"/file-soal/download?id=" + datas.soal_id, {responseType: 'blob'});
  }

  //download materi
  downloadUjianUser(datas){
    console.log(datas);
    return this.http.get(this.baseUrl+"/materi/find?headerfile=" + datas.file_id, {responseType: 'blob'});
  }

  downloadFileUser(datas){
    return this.http.get(this.baseUrl+"/file-user/download?id="+ datas.id_file, {responseType: 'blob'})
  }

  //download file user
  //-------------------------------------------------------------
  
  //----------------------- GET ALL BY PENGAJAR -------------------------------
  //1. Get berdasarkan kelas 
  getListKelasMateri(pId:string): Observable<any[]> { 
    return this.http.get<any[]>(this.baseUrl + "/find/class?pId=" + pId);
  }

  //2. nyari topik
  getKelas(kId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/class/file?kId="+kId);
  }
  
  //2.1 update topik
  updateTopik(id:string, tanggal:string, waktu:string):Observable<any>{
    return this.http.post<any>(this.baseUrl+ "/materi-header/update?id="+ id + "&tanggal=" + tanggal + "&waktu=" + waktu, {})    
  }

  deleteMateri(id:string):Observable<any>{
    return this.http.post<any>(this.baseUrl+ "/materi-header/delete?id=" + id, {})
  }  

  deleteSoal(id:string):Observable<any>{
    return this.http.post<any>(this.baseUrl+ "/file-soal/delete-header?id=" + id, {})
  }

  deleteDetailSoal(id:string): Observable<any>{
    return this.http.post<any>(this.baseUrl+ "/file-soal/delete?id="+id, {})
  }
  
  //3.. nyari file
  getListMateri(headerid:string): Observable<any[]>{ 
    return this.http.get<any[]>(this.baseUrl+"/materi/jum?headerId=" + headerid);
  }

  deleteFile(id:string): Observable<any>{
    return this.http.post<any>(this.baseUrl+"/file-materi/delete?id="+ id, {})
  }

  updateMateri(update:Materi):Observable<Materi>{
    const formData: FormData = new FormData();
    formData.append('id', update.id);
    formData.append('judul', update.judul_materi);
    formData.append('file', update.file );
    return this.http.post<Materi>(this.baseUrl+"/file/update", formData, {
      responseType: 'json'
    })
    // return this.http.post<Materi>(this.baseUrl+"/file/update/?id="+id+"?file="+file+"&judul="+judul, {})
  }
  //insert/nilai/tugas (insert tugas)

  getListQuiz(kId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/view/soal-tugas?kId="+kId)
  }

  getListUjian(kId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/view/soal-ujian?kId="+kId)
  }

  getDetailQuiz(headerid:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/soal/jum?hId=" + headerid)
  }
  
  getUpdateQuiz(hId:string, start:string, end:string, startTime:string, endTime:string):Observable<any>{
    return this.http.post<any>(this.baseUrl+ "/update/soal-header?hId=" +hId + "&startDate=" + start + "&endDate=" + end +"&startTime="+startTime+"&endTime="+endTime, {} )
  }

  getUpdateDetail(update:Ujian):Observable<Ujian>{
    const formData: FormData = new FormData();
    formData.append('id', update.id);
    formData.append('judul', update.judul_file);
    formData.append('file', update.file );
    return this.http.post<Ujian>(this.baseUrl+ "/update/soal-detail", formData, {
      responseType: 'json'
    })
  }

  getJadwalPengajar(trainerId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/trainer/findmateribytrainer?trainerId=" + trainerId)
  }
 //-------------------------------------------------------------

  //----------------------- GET ALL -------------------------------
  //get materi berdasarkan id pengajar dan kategori
  getAllMateri(headerid:string) : Observable<Materi[]>{
    return this.http.get<Materi[]>(this.baseUrl+"/materi/jum?headerId=" + headerid);
  }

  //get kuis
  getAllKuis(headerid:string):Observable<Ujian[]>{
    return this.http.get<Ujian[]>(this.baseUrl+ "/soal/jum?hId=" + headerid)
  }

  //get ujian
  getAllUjian(headerid:string):Observable<Ujian[]>{
    return this.http.get<Ujian[]>(this.baseUrl + "/ujian/jum" + headerid)
  }
  //-------------------------------------------------------------

  //----------------------- UPLOAD -------------------------------
  //upload jawaban tugas
  uploadUser(jawab : FileUser): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append('idUser', jawab.user.userId);
    formData.append('idHeader', jawab.headerid);
    formData.append('file', jawab.file );
    console.log(jawab)
    return this.http.post<boolean>(this.baseUrl+`/file-user/upload-kuis`, formData, {
      responseType: 'json'
    })
  }

  uploadUserUjian(jawab : FileUser): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append('idUser', jawab.user.userId);
    formData.append('idHeader', jawab.headerid);
    formData.append('file', jawab.file );
    console.log(jawab)
    return this.http.post<boolean>(this.baseUrl+`/file-user/upload-ujian`, formData, {
      responseType: 'json'
    })
  }

  //upload materi pengajar
  upload(materi : Materi): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append('topic', materi.topic);
    formData.append('waktu', materi.jam);
    formData.append('tanggal', materi.tanggal);
    formData.append('file', materi.file );
    formData.append('name', materi.judul_materi );
    formData.append('kId', materi.kelas.class_id); 
    // formData.append('hari', materi.hari);
    console.log(materi)
    return this.http.post<boolean>(this.baseUrl+`/file-materi/upload`, formData, {
      responseType: 'json'
    })
  }

  //upload Ujian pengajar
  uploadUjian(ujian : Ujian): Observable<boolean> {
    const formData: FormData = new FormData();
    formData.append('file', ujian.file );
    formData.append('judul', ujian.judul_file );
    // formData.append('hari', ujian.hari);
    formData.append('jenis', ujian.jenis);
    formData.append('startTime', ujian.startTime);
    formData.append('endTime', ujian.endTime);
    formData.append('startDate', ujian.start_date);
    formData.append('endDate', ujian.end_date);
    formData.append('kId', ujian.kelas.class_id); 
    return this.http.post<boolean>(this.baseUrl+`/file-soal/upload`,formData, { 
      // reportProgress: true,
      responseType: 'json'
    });
  }
  //-------------------------------------------------------------


  //----------------------- UPLOAD -------------------------------  
  getMateriPengajar(pId:string): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+"/materi/pengajar?pId=" + pId);
  }

  getKelasPengajar(mId:string, pId:string): Observable<Kelas[]>{
    return this.http.get<Kelas[]>(this.baseUrl+ "/pengajar/class?mId=" +mId + "&pId=" + pId)
  }

  //-------------------------------------------------------------


  //user
  getMateriUser(): Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+"/materi/show");
  }

  getDelete(id: string){
    return this.http.post(this.baseUrl + "/delmateri?id=" + id, {})
  }


  //----------------------- GET -------------------------------
  //print materi
  getTopic(kId:string): Observable<Topic[]>{
    return this.http.get<Topic[]>(this.baseUrl + "/topic?kId=" + kId)
  }

  //print kuis
  getQuiz(kId:string): Observable<Quiz[]>{
    return this.http.get<Quiz[]>(this.baseUrl + "/tugas/find?kId=" + kId)
  }

  //print ujian
  getUjian(headerid:string):Observable<Quiz[]>{
    return this.http.get<Quiz[]>(this.baseUrl+ "/ujian/find?kId=" + headerid) 
  }
  //-------------------------------------------------------------


  getListPengajar(idMateri:string): Observable<any>{
    return this.http.get(this.baseUrl + "/find/pengajar?idMateri=" + idMateri)
  }

  
  //----------------------- ENROL -------------------------------
  getEnrol(uId:string, kId:string): Observable<boolean> {
    // console.log(pId);
    return this.http.get<boolean>(this.baseUrl + "/user/class?uId=" + uId +"&kId="+kId)
  }

  setEnrol(kId:string, uId:string): Observable<any>{
    return this.http.post(this.baseUrl + "/user/inclass?kId="+ kId + "&uId=" + uId, {})
  }

  cekClass(uId:string, jamId:string, kId:string): Observable<boolean> { 
    console.log(jamId);
    console.log(uId);
    console.log(kId);
    return this.http.get<boolean>(this.baseUrl + "/cek/class?uId=" + uId +"&waktu=" + jamId)
  }

  getAbsen(uId:string, mpId:string): Observable<boolean> { 
    return this.http.get<boolean>(this.baseUrl + "/check/kehadiran?idUser=" + uId +"&mpId=" + mpId)
  }

  setAbsen(uId:string, mpId:string): Observable<any>{
    return this.http.post(this.baseUrl + "/insert/kehadiran?idUser=" + uId +"&mpId=" + mpId, {})
  }
  //-------------------------------------------------------------


  getListUser(id:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/class/view-user?id="+id)
  }

  getDetailUser(kId:string, uId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/file-user/view-file?kId="+kId + "&uId="+uId)
  }

  getJadwalUser(kId:string, uId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/user/jadwal?kId="+kId + "&uId="+uId)
  }

  getJadwalKuis(uId:string, mpId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+"/user/jadwal-test?uId="+uId+ "&mpId="+mpId)
  }

  getKelasUser(uId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/user/kelas?uId=" + uId)
  }

  setNilaiKuis(kelas:string, uId:string, nilai: number, jenis:string, aktif:number, tanggal:string, title:string, period:string): Observable<any>{
    return this.http.post<any>(this.baseUrl + "/insert/nilai?kelas="+ kelas +"&userId="+ uId +"&keaktifan="+ aktif + "&nilai="+ nilai +"&jenis="+jenis + "&tanggal="+tanggal+ "&title=" + title +"&period=" +period, {})
  }

  setUpdateKuis(id:string, kelas:string, uId:string, nilai: number, jenis:string, aktif:number, period:string){
    return this.http.post<any>(this.baseUrl + "/update/nilai?kelas="+ kelas +"&userId="+ uId +"&keaktifan="+ aktif + "&nilai="+ nilai +"&jenis="+jenis + "&id="+id +"&period="+period, {})
  }

  getDeleteUjian(id:string, kelas:string, uId:string, jenis:string){
    return this.http.post<any>(this.baseUrl + "/delete/nilai?kelas="+ kelas +"&userId="+ uId +"&jenis="+jenis + "&id="+id, {})
  }

  getDetailScore(uId:string, mpId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/user/nilai-tugas?uId="+ uId +"&mpId=" + mpId) 
  }

  getDetailUjian(uId:string, mpId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/user/nilai-ujian?uId="+ uId +"&mpId=" + mpId) 
  }

  getDetailScoreKelas(mpId : string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/show/class-nilai?mpId=" + mpId)
  }

  //----------------------- FORUM -------------------------------
  setForum(topic:string, isiPesan:string, sender:string):Observable<Forum>{
    return this.http.post<Forum>(this.baseUrl+"/send/chat?topic="+topic +"&isiPesan="+isiPesan+ "&sender="+sender, {})
  }

  getForum(topic: string):Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+"/get/chat?topic="+topic)
  }

  setForumKuis(topic:string, isiPesan:string, sender:string): Observable<Forum>{
    return this.http.post<Forum>(this.baseUrl+"/send/chat-soal?topic="+topic +"&isiPesan="+isiPesan+ "&sender="+sender, {})
  }

  getForumKuis(topic:string): Observable<Forum[]>{
    return this.http.get<Forum[]>(this.baseUrl+"/get/chat-soal?topic="+topic)
  }
  //-------------------------------------------------------------


  
  //----------------------- ADMIN -------------------------------
  //----------------------- Materi -------------------------------
  setMateri(materi): Observable<boolean>{
    return this.http.post<boolean>(this.baseUrl+ "/materi/insert", materi)
  }

  getMateri(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+"/materi/show")
  }
  //-------------------------------------------------------------

  //----------------------- Kelas -------------------------------
  setKelas(kelas):Observable<boolean>{
    return this.http.post<boolean>(this.baseUrl+"/kelas-pengajar/insert", kelas)
  }

  getKelasAdmin(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+"/kelas-pengajar/findall")
  }

  getKelasList(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/kelas/view-kelas")
  }
  //-------------------------------------------------------------

  //----------------------- Pengajar -------------------------------
  setPengajar(materiPengajars): Observable<boolean>{
    // console.log(JSON.stringify(materiPengajars));
    
    return this.http.post<boolean>(this.baseUrl+"/mp/insert", materiPengajars)
  }

  getPengajar(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/trainer/findall")
  }
  //-------------------------------------------------------------

  //----------------------- REPORT ADMIN -------------------------------
  //----------------------- REPORT JADWAL -------------------------------
  getReportAllJadwal(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/report/all-jadwal")
  }

  getDownloadAllJadwal(tgl1:string, tgl2:string){
    return this.http.get(this.baseUrl+ "/report/jadwals/download?tgl1="+ tgl1 +"&tgl2=" + tgl2, {responseType: 'blob'})
  }

  getReportJadwal(tgl1:string, tgl2:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/report/jadwals?tgl1="+ tgl1 +"&tgl2=" + tgl2)
  }

  
  //-------------------------------------------------------------

  //----------------------- REPORT JADWAL -------------------------------
  getReportAllMapel(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/report/all-mapel")
  }

  getReportMapel(cId:string, mId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/report/mapels?cId="+ cId +"&mId=" + mId)
  }

  getDownloadMapel(cId:string, mId:string){
    return this.http.get(this.baseUrl+ "/report/mapels/download?cId="+ cId +"&mId=" + mId, {responseType: 'blob'})
  }
  //-------------------------------------------------------------

  //----------------------- REPORT JADWAL -------------------------------
  getReportAllPeserta(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/report/all-kelas")
  }

  getReportPeserta(cId:string, mId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/report/kelass?cId="+ cId +"&mId=" + mId)
  }

  getDownloadPeserta(cId:string, mId:string){
    return this.http.get(this.baseUrl+ "/report/kelas/download?cId="+ cId +"&mId=" + mId, {responseType: 'blob'})
  }

  //----------------------- REPORT PESERTA -------------------------------
  getReportAllNilai(uId:string){
    return this.http.get<any[]>(this.baseUrl+ "/report/nilaiakhirdetaillistuser?idUser="+uId)
  }
  getReportNilai(uId:string, cId:string, mpId:string){
    return this.http.get<any[]>(this.baseUrl+ "/report/nilaiakhirdetaillist?idUser="+uId + "&classId="+ cId + "&mpId="+mpId)
  }

  getAllMateriUser(uId:string): Observable<Category[]>{ 
    return this.http.get<Category[]>(this.baseUrl+ "/report/findmateribyuser?userId=" + uId)
  }

  getAllKelasUser(uId:string): Observable<Category[]>{ 
    return this.http.get<Category[]>(this.baseUrl+ "/report/findkelasbyuser?userId=" + uId)
  }

  getDownloadNilai(uId:string, cId:string, mpId:string){
    return this.http.get(this.baseUrl+ "/report/nilaiakhirdetail?idUser="+uId + "&classId="+ cId + "&mpId="+mpId, {responseType: 'blob'})
  }
  //-------------------------------------------------------------

  //----------------------- REPORT PENGAJAR -------------------------------
  getMateriPengajarReport(tId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/show/class-by-trainer?tId=" +tId)
  }
  
  getKelasPengajarReport(tId:string):Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/kelas-pengajar/show-by-trainer?tId=" +tId)
  }

  getDownloadReportRincianNilai(mId:string, cId:string, period:string){
    return this.http.get(this.baseUrl+ "/report/rinciannilai/download?materiId="+mId + "&classId="+ cId + "&period="+period, {responseType: 'blob'})
  }

  getReportRincianNilai(mId:string, cId:string, period:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/report/rinciannilai?materiId="+mId + "&classId="+ cId + "&period="+period)
  }

  getAbsenPengajar(mId:string, cId:string): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl+ "/report/kehadiran?materiId="+mId + "&classId="+ cId)
  }

  getDownloadAbsenPengajar(mId:string, cId:string){
    return this.http.get(this.baseUrl+ "/report/kehadiran/download?materiId="+mId + "&classId="+ cId, {responseType: 'blob'})
  }
  //-------------------------------------------------------------
}
