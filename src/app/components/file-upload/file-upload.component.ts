import { Component, Input, OnInit } from '@angular/core';
import { AngularFireUploadTask } from '@angular/fire/storage';
import { UploadFileTask } from 'src/app/models/uploadFileTask.model';
import { finalize, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input('task') task: UploadFileTask
  progress: Observable<number>
  isUploadFinish: boolean
  isUploadCancel: boolean
  Math = Math
  constructor() { }
  onCancel() {
    this.task.task.cancel()
    this.isUploadCancel = true
  }
  ngOnInit(): void {
    if (this.task) {
      this.progress = this.task.task.percentageChanges().pipe(
        finalize(() => {
          this.isUploadFinish = true

        })
      )

    }

  }

}
