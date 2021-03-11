import { AtTabs, AtTabsPane } from 'taro-ui'

interface TagTreeProps {
    current:number,
    handleClick:(current:number) => void,
    tabList:Array<{title:string}>,
    tabsPaneList:Array<{content:any}>
}
function TagTree(props:TagTreeProps){
    const {current,handleClick,tabList,tabsPaneList} = props
    return (
        <AtTabs
            current={current}
            scroll
            height='100vh'
            tabDirection='vertical'
            tabList={tabList}
            onClick={handleClick}>
                {
                    tabsPaneList.map((item,index) => (
                        <AtTabsPane tabDirection='vertical' current={current} index={0} key={index}>
                            {
                                item.content
                            }
                        </AtTabsPane>
                    ))
                }
        </AtTabs>
    )
}
export { TagTree }