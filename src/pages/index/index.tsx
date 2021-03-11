import { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import './style.scss'
import {TopNavBar,Banner,NavGrid,Footer,ActivityImage,List,Title} from '../../components'
import {Emergency} from './components/emergency'
import {CleaningChange} from './components/cleaningChange'
import { bannerList, navDataList ,arrList} from './data'


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
class Index extends Component {

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
    return (  
        <View className="amst-home">
          <TopNavBar 
            rgIconSthandleClick={this.rgIconSthandleClick}
            rgIconNdhandleClick={this.rgIconNdhandleClick}
            leftIConhandleClick={this.leftIConhandleClick}
            inpHandlerClick={this.inpHandlerClick}
          />
          <Banner item={bannerList} indicatorDots autoplay vertical={false} interval={2000}/>
          <NavGrid data={navDataList} columnNum={5}/>
          <ActivityImage />
          <Emergency />
          <CleaningChange />
          <View className={`amst-home-list`}>  
            <Title title={'精选'}/>

            {
              arrList.map((item,index) => (
                <List key={index} title={item.title} desc={item.desc} src={item.src} price={item.price} />
              ))
            }
          </View>

          <Footer current={0}/>
        </View>
    )
  }
}

export default Index

