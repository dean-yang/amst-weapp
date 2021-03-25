import { getFirstClass } from '../api'
import {
    FIRSTCLASS
} from '../constants/firstClass'
import fetch from '../request/index'

export const getFirstClassList = ()=>{
    return dispacth => {
        fetch.post(getFirstClass,{}).then(res => {
            dispacth({
                type:FIRSTCLASS,
                payload:res.data.map(item => ({
                    image:item.first_classification_image_url,
                    value:item.first_classification_name,
                    key:item.first_classification_id
                  }))
            })
        })
    }
}

