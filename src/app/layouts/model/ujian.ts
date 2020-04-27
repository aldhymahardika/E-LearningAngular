import { Pengajar } from "./pengajar"
import { Category } from "./category"
import { Kelas } from "./kelas"

export class Ujian{
    id:string
    judul_file:string
    file:File
    hari:string
    judul_tugas:string
    start_date:string
    end_date:string
    startTime:string
    endTime:string
    jenis:string
    kelas : Kelas
    pengajar : Pengajar 
    category : Category
    // jam:string

}