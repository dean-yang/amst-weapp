import { getcarefullyChosen } from '../api'
import {
    GETCARE
} from '../constants/firstClass'
import fetch from '../request/index'

export const getcarefullyChosenList = ()=>{
    return dispacth => {
        fetch.post(getcarefullyChosen,{}).then(res => {
            dispacth({
                type:GETCARE,
                payload:res.data
            })
        })
    }
}

