import { AtAvatar } from 'taro-ui'
import {View,Text} from '@tarojs/components'
import {Title} from '../../../../components'
import './style.scss'

function Avatar() {
    return (
        <View className={`amst-myInfo-ava`}>
            <View className={`amst-myInfo-ava-content`}>
                <AtAvatar text='凹凸实验室' circle={true} size={'large'}></AtAvatar>
                <Title title={`莫泊桑`} clasNameBox={`amst-myInfo-ava-content-name`}/>
            </View>
            <View className={`amst-myInfo-ava-list`}>
                <View className={`amst-myInfo-ava-list-item`}>
                    <Text>0</Text>
                    <Text className={`amst-myInfo-ava-list-item-text`}>优惠卷</Text>
                </View>
                <View className={`amst-myInfo-ava-list-item`}>
                    <Text>0</Text>
                    <Text className={`amst-myInfo-ava-list-item-text`}>权益卡</Text>
                </View>
                <View className={`amst-myInfo-ava-list-item`}>
                    <Text>0</Text>
                    <Text className={`amst-myInfo-ava-list-item-text`}>保修卡</Text>
                </View>
                <View className={`amst-myInfo-ava-list-item`}>
                    <Text>0</Text>
                    <Text className={`amst-myInfo-ava-list-item-text`}>收据</Text>
                </View>
            </View>
        </View>
    )
}
export { Avatar }
