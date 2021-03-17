import Taro from '@tarojs/taro'

class fetch{
    static async post(url,data){
        return Taro.request({
            url:`http://47.108.200.61:3000/${url}`,
            method:"POST",
            data,
            header:{contentType:'application/json'},
        }).then(res => {
            return Promise.resolve(res.data)
        }).catch(err => {
            return Promise.reject(err)
        })
    }
}

export default fetch