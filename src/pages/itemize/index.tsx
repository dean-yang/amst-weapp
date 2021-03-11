import { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import { Footer,TagTree,NavGrid,TopNavBar } from '../../components'
import { tabList,tabsPaneList } from './data'

// #region 书写注意
//
// 目前 typescript 版本还无法在装饰器模式下将 Props 注入到 Taro.Component 中的 props 属性
// 需要显示声明 connect 的参数类型并通过 interface 的方式指定 Taro.Component 子类的 props
// 这样才能完成类型检查和 IDE 的自动提示
// 使用函数模式则无此限制
// ref: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/20796
//
// #endregion

type PageStateProps = {
  counter: {
    num: number
  }
}
type PageDispatchProps = {
  add: () => void
  dec: () => void
  asyncAdd: () => any
}
type PageOwnProps = {}
type IProps = PageStateProps & PageDispatchProps & PageOwnProps
interface Index {
  props: IProps;
}

@connect(({ counter }) => ({
  counter
}))
class Index extends Component<any,any> {
  constructor(props){
    super(props)
    this.state = {
      tagTreeCurrent:0
    }
  }
  leftIConhandleClick = ()=>{
    console.log('左边图标')
  }
  rgIconSthandleClick = ()=> {
    console.log('右边第一个图标')
  }
  rgIconNdhandleClick = ()=>{
    console.log('右边第二个图标')
  }
  inpHandlerClick = () => {
    console.log('点击inp')
  }
  render () {
    const tabsPaneLists = tabsPaneList.map((item,index) => ({
      content:<NavGrid data={item.content} columnNum={3} key={index}/>
    }))
    const {tagTreeCurrent} = this.state
    return (
      <View >
         <TopNavBar 
            rgIconSthandleClick={this.rgIconSthandleClick}
            rgIconNdhandleClick={this.rgIconNdhandleClick}
            leftIConhandleClick={this.leftIConhandleClick}
            inpHandlerClick={this.inpHandlerClick}
          />
        <TagTree handleClick={(tagTreeCurrent)=>{this.setState({tagTreeCurrent })}} tabList={tabList} tabsPaneList={tabsPaneLists} current={tagTreeCurrent}/>
        <Footer current={1}/>
      </View>
    )
  }
}

export default Index

