import { Pengajar } from "./pengajar"
import { Category } from "./category"

export class Hari{
    id:number
    judul_materi:string
    file:File
    day:string
    week:string 
    endDate:string
    status:string
    pengajar : Pengajar 
    category : Category
}