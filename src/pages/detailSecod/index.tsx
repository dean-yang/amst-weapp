import { getCurrentInstance } from '@tarojs/taro'
import {useEffect,useState} from 'react'
import {getdetailSecondPro} from '../../api'
import fetch from '../../request'
import {Header} from './components/header'

export default function index() {
    const [second_classification_id,set_second_classification_id] = useState(getCurrentInstance().router?.params)
    const [secondDetail,setSecondDetail] = useState({})
    useEffect(()=>{
        getDetailSecondPro()
    },[])
    const getDetailSecondPro = ()=>{
        fetch.post(getdetailSecondPro,second_classification_id).then((res:any) => {
            setSecondDetail({
                text:res.data.first_classification_name,
                ...res.data
            })
        })
    }
    return (
        <div>
            <Header data={secondDetail}/>
        </div>
    )
}
