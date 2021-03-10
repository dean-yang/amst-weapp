import {AtNavBar,AtInput} from 'taro-ui'
import { View } from '@tarojs/components'
import './style.scss'

interface TopNavBar {
    rgIconSthandleClick:() => void // 点击右边第一个
    rgIconNdhandleClick:() => void // 点击右边第二个
    leftIConhandleClick:() => void // 点击右边第一个
    inpHandlerClick:() => void // 点击inp
}

function TopNavBar(props:TopNavBar) {
    const {rgIconSthandleClick,rgIconNdhandleClick,leftIConhandleClick,inpHandlerClick} = props
    return (
        <View className={`amst-topnav`}>
            <AtNavBar
                onClickRgIconSt={rgIconSthandleClick}
                onClickRgIconNd={rgIconNdhandleClick}
                onClickLeftIcon={leftIConhandleClick}
                color='#ccc'
                rightFirstIconType='bullet-list'
                rightSecondIconType='user'
                leftIconType="search"
                className={`amst-topnav-content`}
              >
                <View onClick={inpHandlerClick}>
                    <AtInput name={'search'}  className={`amst-topnav-content-inp`} onChange={()=>{
                  }} disabled placeholder="洗衣机维修"/>
                </View>

              </AtNavBar>
        </View> 
    )
}
export { TopNavBar }

