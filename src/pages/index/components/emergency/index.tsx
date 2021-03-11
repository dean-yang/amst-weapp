import {AtGrid} from 'taro-ui'
import {View} from '@tarojs/components'
import {Title} from '../../../../components'
import './style.scss'
import {emergencyData} from './data'

function Emergency(props:any) {
    return (
      <View className={`amst-home-emergency`}>
        <Title title={`家庭应急`}/>
        <AtGrid className={`amst-home-emergency-content`} hasBorder={false} data={emergencyData} columnNum={5}/>
        </View>

    )
}

export { Emergency }
