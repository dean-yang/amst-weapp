/**
 * home换季清洗
 * dean.yang
 */
import { View } from '@tarojs/components'
import {Title} from '../../../../components'
import './style.scss'
import {ImgText} from '../../../../components'
import {src} from './data'


function CleaningChange() {
    return (
        <View className={`amst-home-clean`}>
            <Title title={`换季清洗`}/>
            <View style={{display:'flex',flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>  
                {
                    src.map(item => (
                        <ImgText text={item.title} key={item.url} img={item.url}/>
                    ))
                }
            </View>

        </View>
    )
}
export { CleaningChange }
