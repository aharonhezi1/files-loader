
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { UploadFileTask } from '../models/uploadFileTask.model'

export const ADD_TASK = '[Task] Add'
//export const CANCEL_TASK = '[Task] Cancel'
export const REMOVE_All_TASK = '[Task] RemoveAll'


export class AddTask implements Action {
    readonly type = ADD_TASK

    constructor(public payload: UploadFileTask) { }
}

export class RemoveAllTask implements Action {
    readonly type = REMOVE_All_TASK

    constructor() { }
}

// export class CancelTask implements Action {
//     readonly type = CANCEL_TASK

//     constructor(public payload: string) { }
// }

export type Actions = AddTask | RemoveAllTask //| CancelTask