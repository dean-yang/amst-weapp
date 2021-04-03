import { getCurrentInstance } from '@tarojs/taro'
import {useEffect,useState} from 'react'
import {getdetailSecondPro} from '../../api'
import fetch from '../../request'
import {Header} from './components/header'
import {ProContent} from './components/proContent'
import {DescFailt} from './components/descfault'
import './style.scss'

export default function index() {
    const [second_classification_id] = useState(getCurrentInstance().router?.params)
    const [secondDetail,setSecondDetail] = useState({})
    useEffect(()=>{
        getDetailSecondPro()
    },[])
    const getDetailSecondPro = ()=>{
        fetch.post(getdetailSecondPro,second_classification_id).then((res:any) => {
            setSecondDetail({
                text:res.data.second_classification_name,
                ...res.data
            })
        })
    }
    return (
        <div className={`amst-detailSec`}>
            <Header data={secondDetail} onClickLeftIcon={()=>{
                Taro.navigateBack()
            }}/>
            <div className={`amst-detailSec-proCont`}>
                <ProContent data={secondDetail}/>
            </div>
            <div>
                <DescFailt />
            </div>
        </div>
    )
}
