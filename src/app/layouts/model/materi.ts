import { Pengajar } from "./pengajar"
import { Category } from "./category"
import { Kelas } from "./kelas"

export class Materi{
    id:string
    judul_materi:string
    file:File
    hari:string
    topic: string
    tanggal:string
    jam:string
    kelas : Kelas
    pengajar : Pengajar 
    category : Category
    
}