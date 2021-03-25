import {View} from '@tarojs/components'
import { getCurrentInstance } from '@tarojs/taro'
import {useState} from 'react'
import './style.scss'
interface TagTreeProps {
    handleClick:(id:string) => void,
    tabList:{name:string,id:string}[],
    children:React.ReactElement
}
function TagTree(props:TagTreeProps){
    const {handleClick,tabList,children} = props
    const [show,setShow] = useState(getCurrentInstance().router?.params.current || 0)
    return (
        <View  className={`amst-tree`}>
            <View  className={`amst-tree-tab `}>
                {
                    tabList.map((item,index) => (
                        <View key={item.id} className={`amst-tree-tab-item ${show === index ? 'show' : ''}`} onClick={()=>{
                            setShow(index)
                            handleClick(item.id)
                        }}>
                            <View>
                                {item.name}
                            </View>
                        </View>
                    ))
                }

            </View>
            <View  className={`amst-tree-content`}>
                {
                    children
                }
            </View>
        </View>
    )
}
export { TagTree }