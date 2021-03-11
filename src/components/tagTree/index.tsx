import { AtTabs, AtTabsPane } from 'taro-ui'

interface TagTreeProps {
    current:number,
    handleClick:(current:number) => void,
    tabList:Array<{title:string}>,
    tabsPaneList:Array<{content:number}>
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
                    tabsPaneList.map(item => (
                        <AtTabsPane tabDirection='vertical' current={current} index={0}>
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