import { View } from '@tarojs/components'
import {NavGrid,Title} from '../../../../components'
import './style.scss'


const data = [
    {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: '待接单',
        key:1
      },
      {
        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: '待上门',
        key:2
  
      },
      {
        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: '待评价',
        key:3
      },  {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
        value: '返修/售后',
        key:4
      },
]
function Order() {
    return (
        <View className={`amst-myinfo-ord`}>
          <Title title={`我的订单`}/>
            <NavGrid  data={data} columnNum={4}  className={`amst-myinfo-ord-grid`}/>
        </View>
    )
}
export {Order}
