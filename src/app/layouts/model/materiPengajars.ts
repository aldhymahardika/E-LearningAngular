import { Pengajar } from "./pengajar"
import { AdminMateri } from "./admin-materi"
import { AdminKelas } from "./admin-kelas"

export class MateriPengajars{
    id:string
    pengajar:Pengajar
    materi:AdminMateri
    kelasPengajar:AdminKelas
    jam:string
    startDate:string
    endDate:string
}