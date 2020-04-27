import { Pengajar } from "./pengajar"
import { Category } from "./category"
import { User } from "./users"

export class FileUser{
    id: string
    file: File
    headerid:string
    // pengajar: Pengajar
    user: User
    // materi: Category
}