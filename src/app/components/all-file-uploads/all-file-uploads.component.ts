import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UploadFileTask } from '../../models/uploadFileTask.model';
import { FileLoaderService } from '../../services/file-loader.service'

@Component({
  selector: 'app-all-file-uploads',
  templateUrl: './all-file-uploads.component.html',
  styleUrls: ['./all-file-uploads.component.scss']
})
export class AllFileUploadsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  uploadTasks: UploadFileTask[] = []
  isMinimizeTasks: boolean
  constructor(private fileLoaderService: FileLoaderService) { }

  onClose() {
    this.fileLoaderService.deleteAllTasks()
  }
  onMinimize() {
    this.isMinimizeTasks = !this.isMinimizeTasks
  }


  ngOnInit(): void {
    this.subscription = this.fileLoaderService.stateChanges.subscribe(() => {
      this.uploadTasks = this.fileLoaderService.getUploadTaskState()

    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
