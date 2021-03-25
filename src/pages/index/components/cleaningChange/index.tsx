/**
 * home换季清洗
 * dean.yang
 */
import { View } from '@tarojs/components'
import {Title} from '../../../../components'
import './style.scss'
import {ImgText} from '../../../../components'

type itemEnum = {
    clean_changeSeason_name:string,
    clean_changeSeason_image_url:string,
    clean_changeSeason_id:string
}

type cleaningChangeProps =  {
    cleanChangeList:itemEnum[]
}

function CleaningChange(props:cleaningChangeProps) {
    const {
        cleanChangeList
    } = props
    return (
        <View className={`amst-home-clean`}>
            <Title title={`换季清洗`}/>
            <View style={{display:'flex',flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>  
                {
                    cleanChangeList.map(item => (
                        <ImgText text={item.clean_changeSeason_name} key={item.clean_changeSeason_id} img={item.clean_changeSeason_image_url}/>
                    ))
                }
            </View>

        </View>
    )
}
export { CleaningChange }
