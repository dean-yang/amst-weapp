import { View, Text } from '@tarojs/components'
import './style.scss'

interface TitleProps {
    title:string
    classNameMax?:string
    clasNameBox?:string
}
function Title(props:TitleProps) {
    return (
        <View className={`${props.classNameMax} amst-title` }>
            <Text className={`${props.clasNameBox} amst-title-content`}>
                {
                    props.title
                }
            </Text>
        </View>
    )
}

export { Title }
