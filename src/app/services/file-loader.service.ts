import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import {UploadFileTask}from '../models/uploadFileTask.model'
@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {

  constructor(private storage: AngularFireStorage) { }
  private basePath = '/';

  private uploadTasksState:UploadFileTask[]=[]
  stateChanges = new BehaviorSubject(null)
  getUploadTaskState(){
  
    return [...this.uploadTasksState]
  }
  addtask(fileUpload: File):void{

    const ref = this.storage.ref(fileUpload.name);
    const task = ref.put(fileUpload);
    const taskName = fileUpload.name



 

    task.snapshotChanges().subscribe();
    this.uploadTasksState=[...this.uploadTasksState,{task,fileName:taskName,filesize:fileUpload.size+''}]
    this.stateChanges.next(taskName)
  
  }

  cancelTask(index:number): void {

    this.uploadTasksState[index].task.cancel()

  }
  deleteAllTasks() {
 
    this.uploadTasksState.forEach(UploadFileTask=>UploadFileTask.task.cancel())
    this.uploadTasksState = []
    this.stateChanges.next({})

  }
}
