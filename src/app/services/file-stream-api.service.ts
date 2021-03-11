import { Injectable } from '@angular/core';
// import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileStreamApiService {

//   constructor(private storage: AngularFireStorage) { }

//   private basePath = '/';
//   currentUploadTasks = {}

//   pushFileToStorage(fileUpload: File): void {

//     // const ref = this.storage.ref(fileUpload.name);
//     // const task = ref.put(fileUpload);

//     const filePath = `${this.basePath}/${fileUpload.name}`;

//    // this.currentUploadTasks[fileUpload.name] =
//       this.storage.upload(filePath, fileUpload);
//   //  return  this.currentUploadTasks[fileUpload.name]
//   }

//   cancelFileUpload(uploadTask: string):void {
//   //  console.log(this.currentUploadTasks[uploadTask]);

//     this.currentUploadTasks[uploadTask].cancel()

//   }
}
