import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { taskReducer} from './reducers/uploadFileTask.reducers';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AllFileAploadsComponent } from './components/all-file-aploads/all-file-aploads.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FileUploadComponent,
    AllFileAploadsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    StoreModule.forRoot({tasks:taskReducer}),
    // !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
