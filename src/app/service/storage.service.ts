import { Injectable } from '@angular/core';
import { Login } from '../layouts/model/login';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  TOKEN_KEY = 'id';
  USER_KEY = 'auth-user';
  tilte = 'title';
  namaPengajar = 'nama';
  namaTopic = 'topic';
  kelasId = 'kId'
  namaKelas = 'kelas'
  namaMateri = 'materi'
  namaHari = 'hari'
  constructor() { }

  saveStorage(token : string){
    // window.sessionStorage.removeItem(this.TOKEN_KEY)
    localStorage.setItem(this.TOKEN_KEY, token)
  }

  getToken():string{
    return localStorage.getItem(this.TOKEN_KEY)
  }

  getId():Login{
    return (JSON.parse(window.localStorage.getItem('auth-user')))
  }

  setTitle(title:string){
    localStorage.setItem(this.tilte, title)
  }

  getTitle():string{
    return localStorage.getItem(this.tilte)
  }

  setNamaPengajar(nama:string){
    localStorage.setItem(this.namaPengajar, nama)
  }

  getNamaPengajar():string{
    return localStorage.getItem(this.namaPengajar)
  }

  getTopic():string{
    return localStorage.getItem(this.namaTopic)
  }

  setNamaTopic(nama:string){
    localStorage.setItem(this.namaTopic, nama)
  }

  getKelas():string{
    return localStorage.getItem(this.kelasId)
  }

  setKelas(kId:string){
    localStorage.setItem(this.kelasId, kId)
  }

  getNamaKelas():string{
    return localStorage.getItem(this.namaKelas)
  }

  setNamaKelas(kelas:string){
    localStorage.setItem(this.namaKelas, kelas)
  }

  getNamaMateri():string{
    return localStorage.getItem(this.namaMateri)
  }

  setNamaMateri(materi:string){
    localStorage.setItem(this.namaMateri, materi)
  }

  getNamaHari(){
    localStorage.getItem(this.namaHari)
  }

  setNamaHari(hari:string){
    localStorage.setItem(this.namaHari, hari)
  }
}
