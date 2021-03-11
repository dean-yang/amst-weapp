import { Component } from 'react'
import { connect } from 'react-redux'
import { View,Text,Button } from '@tarojs/components'
import {Footer} from '../../components/footer'
import {Avatar} from './conponensts/avatar'
import {AtNoticebar} from 'taro-ui'
import './style.scss'

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
  render () {
    return (
      <View className='amst-myInfo'>
        <Avatar />
        <AtNoticebar className={`amst-myInfo-atnoticebar`}>
          <Text style={{flex:1,}}>开通龙之哼boger超级会员预计最高单次可省600元</Text>
          <Text className={`amst-myInfo-atnoticebar-btn`}>开通会员</Text>
        </AtNoticebar>
        <Footer current={2}/>
      </View>
    )
  }
}

export default Index

