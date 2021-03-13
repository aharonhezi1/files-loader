import { AngularFireUploadTask } from '@angular/fire/storage';

export class UploadFileTask{
    fileName:string;
    task:AngularFireUploadTask;
    filesize:string

}