import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Event } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { Store } from '@ngrx/store';
import { AppState } from './../../app.state';
import * as TaskActions from './../../actions/uploadFileTask.actions';
import { UploadFileTask } from 'src/app/models/uploadFileTask.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  selectedFiles: FileList;
  storeSubscription
  isTasks:boolean

  constructor(private storage: AngularFireStorage, private store: Store<AppState>) { }
@ViewChild('inputFile')inputFile:ElementRef

  onFileChange(event: any) {
   // this.fileStreamApiService.currentUploadTasks = {}
    this.selectedFiles = event.target.files
   // console.log(this.selectedFiles);
    for (let i = 0; i < this.selectedFiles.length; i++) {

      const file = this.selectedFiles.item(i);
      const fileName=file.name
      const task= this.storage.upload('/'+fileName, file);
      this.storage.upload('/'+fileName, file);

      
      const uploadFileTask={fileName,date:new Date()}
     // console.log(Object.assign({},uploadFileTask));
      
     this.store.dispatch(new TaskActions.AddTask( uploadFileTask))//({fileName}))//( uploadFileTask))

    }
this.storeSubscription.subscribe(tasks=>console.log(tasks))

  }
  onChooseFile(){
    this.inputFile.nativeElement.click()
  }
  ngOnInit(): void {
this.storeSubscription=(this.store.select('tasks'))
  }
ngOnDestroy():void{
  this.storeSubscription.unsubscribe()
}
}
