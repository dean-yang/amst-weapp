import { View, Text, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import './style.scss'


interface ListProps{
    src:string
    title:string
    desc:string
    price:string
    handlerClick:()=>void
}

function List(props:ListProps) {
    const {src,desc,title,price,handlerClick} = props
    return (
        <View className={`amst-list`} onClick={handlerClick}>
            <View className={`amst-list-image`}>
                <Image src={src} className={`amst-list-image-img`}/>
            </View>
            <View className={`amst-list-text`}>
                <Text  className={'amst-list-text-title'}>{title}</Text>
                <Text  className={'amst-list-text-desc'}>{desc}</Text>
                <Text className={`amst-list-text-price`}>{price}元起</Text>
            </View>
            <AtButton className={`amst-list-btn`} size={'small'} type={'primary'} >立即预约</AtButton>
        </View>
    )
}
export { List }
