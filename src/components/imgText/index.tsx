import { View,Image ,Text} from '@tarojs/components'
import './style.scss'

interface ImgTextProps{
    text:any
    img:string
}

function ImgText(props:ImgTextProps) {
    return (
        <View className={`amst-imgtext`}>
            <Text className={`amst-imgtext-text`}>
                {
                    props.text
                }
            </Text>
            <Image src={props.img} className={`amst-imgtext-img`} />
        </View>
    )
}
export { ImgText }
