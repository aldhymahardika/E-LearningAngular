import { Pengajar } from "./pengajar"
import { AdminMateri } from "./admin-materi"
import { AdminKelas } from "./admin-kelas"
import { Trainer } from "./trainer"

export class MateriPengajars{
    id:string
    trainer:Trainer
    materi:AdminMateri
    classes:AdminKelas
    time:string
    startDate:string
    endDate:string
}