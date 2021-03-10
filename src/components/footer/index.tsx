import { AtTabBar } from 'taro-ui'
import './style.scss'
import Taro from '@tarojs/taro'

interface FooterProps {
    current:number
}
function Footer(props:FooterProps) {
    const {current} = props
    const handleClick = (value)=>{
        switch(value){
            case  current:
                break
            case 0 :
                Taro.redirectTo({
                    url:'/pages/index/index'
                  })
                break
            case 1 :
                Taro.redirectTo({
                    url:'/pages/itemize/index'
                  })
                break
            case 2 :
                Taro.redirectTo({
                    url:'/pages/myInfo/index'
                  })
                break
        }
    }
    return (
        <AtTabBar
            tabList={[
                { title: '首页', iconType: 'bullet-list', text: 'new' },
                { title: '所有服务', iconType: 'camera' },
                { title: '我的', iconType: 'folder', text: '2', max: 99 }
            ]}
            onClick={handleClick}
            current={current}
            className={`amst-foot`}
      />
    )
}

export { Footer }
