import Taro from '@tarojs/taro'
import {Loading} from '../components'

class fetch{
    static async post(url,data){
        Loading.add()
        return Taro.request({
            url:`${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://47.108.200.61:3000'}${url}`,
            method:"POST",
            data,
            header:{contentType:'application/json'},
            mode:"cors",
        }).then(res => {
            Loading.remove()
            return Promise.resolve(res.data)
        }).catch(err => {
            Loading.remove()
            return Promise.reject(err)
        })
    }
}

export default fetch