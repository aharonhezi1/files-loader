import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import {FileLoaderService} from '../../services/file-loader.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild('inputFile')inputFile:ElementRef

 selectedFiles: FileList;
isUploadTask:boolean
subscription:Subscription

  constructor(private fileLoaderService:FileLoaderService) { }
  onFileChange(event: any):void {
    this.selectedFiles = event.target.files
     for (let i = 0; i < this.selectedFiles.length; i++) {
 
       const file = this.selectedFiles.item(i);
       this.fileLoaderService.addtask(file)
     }
  }

  onChooseFile():void{
    this.inputFile.nativeElement.click()
  }
  ngOnInit(): void {
this.subscription=  this.fileLoaderService.stateChanges.subscribe(()=>{
    this.isUploadTask=!!this.fileLoaderService.getUploadTaskState().length
  })
  }
  ngOnDestroy():void{
    this.subscription.unsubscribe()
  }


}
