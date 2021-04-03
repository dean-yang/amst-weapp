import './style.scss'
import {View,Image,Text} from '@tarojs/components'

interface ProContentProps {
    data:any
}
function ProContent(props:ProContentProps) {
    const {data} = props
    console.log(data)
    return (
        <View className={`amst-detail-comp-pro`}>
            <View className={`amst-detail-comp-pro-img`}>
                <Image src={`${data.second_classification_image_url}`} className={`amst-detail-comp-pro-img-image`}/>
            </View>
            <View className={`amst-detail-comp-pro-img-text`}>
                    <Text>
                        {
                            data.second_classification_name
                        }
                    </Text>
                    <Text className={`amst-detail-comp-pro-img-text-desc`}>
                        准确描述故障信息可以更好的解决问题
                    </Text>
            </View>
        </View>
    )
}
export   {ProContent}
