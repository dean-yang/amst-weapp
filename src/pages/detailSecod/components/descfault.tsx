import {View,Image,Text} from '@tarojs/components'
import { useState } from 'react'
import { AtTextarea,AtNavBar,AtButton } from 'taro-ui'


interface DescFailtProps{

}

function DescFailt (props:DescFailtProps){
    const [failtdescValue,setFailtdescValue] = useState('')
    const [remarksValue,setRemarksValue] = useState('')

    return (
        <View className={`amst-detail-comp-failt`}>
            <View className={`amst-detail-comp-failt-item`}>
                <Text>
                故障描述
                </Text>
                <AtTextarea
                    value={failtdescValue}
                    onChange={(value)=>{setFailtdescValue(value)}}
                    maxLength={200}
                    placeholder='你的问题是...'
                />
            </View>
            <View className={`amst-detail-comp-failt-item`}>
            <AtNavBar
                color='#000'
                rightFirstIconType='chevron-right'
                title="请添加服务地址"
                >
                </AtNavBar>
            </View>
            <View className={`amst-detail-comp-failt-item`}>
                <Text>
                给师傅的备注
                </Text>
                <AtTextarea
                    value={remarksValue}
                    onChange={(value)=>{setRemarksValue(value)}}
                    maxLength={200}
                    placeholder='额外备注...'
                />
            </View>
            <View className={`amst-detail-comp-failt-item-submit`}>
                <AtButton type={`primary`} circle>提交订单</AtButton>
            </View>
        </View>
    )
}
export {DescFailt}