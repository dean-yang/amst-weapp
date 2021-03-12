import {View} from '@tarojs/components'
import {NavGrid,Title} from '../../../../components'
import './style.scss'

function ServerTool() {
    const data = [
        {
            image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
            value: '地址管理',
            key:1
          },
          {
            image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
            value: '电话客服',
            key:2
      
          },
          {
            image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
            value: '设置',
            key:3
          },
    ]
    return (
        <View className={`amst-myinfo-sertool`}>
            <Title title={'服务与工具'}/>
            <NavGrid  data={data} columnNum={3}  className={`amst-myinfo-sertool-grid`}/>
        </View>
    )
}
export { ServerTool }
