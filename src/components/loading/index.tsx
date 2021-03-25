import Taro from '@tarojs/taro'
class Loading {
    static tagsCount = 0;
    static show(){
        Taro.showLoading({
            title:"加载中",
            mask:true
        })
    };
    static close(){
        Taro.hideLoading()
    };
    static add(){
        this.tagsCount++;
        this.show();
    };
    static remove(){
        this.tagsCount--;
        if(this.tagsCount > 0){
            return false;
        }else{
            this.close();
            return true;
        }
    };
}

export {Loading}