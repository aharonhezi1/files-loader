import { Action } from '@ngrx/store'
import { UploadFileTask } from '../models/uploadFileTask.model'
import * as TaskActions from './../actions/uploadFileTask.actions'


export function taskReducer(state: UploadFileTask[] = [], action: TaskActions.Actions) {

    switch (action.type) {
        case TaskActions.ADD_TASK:
            return [...state, action.payload];
        // case TaskActions.CANCEL_TASK:
        //     return state.filter(task=>true)
        case TaskActions.REMOVE_All_TASK:
            return [];
        default:
            return state;
    }
}