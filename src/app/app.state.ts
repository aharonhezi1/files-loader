import { UploadFileTask } from './models/uploadFileTask.model';

export interface AppState {
  readonly tasks: UploadFileTask[];
}