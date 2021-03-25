import { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import { Footer,TagTree,NavGrid,TopNavBar } from '../../components'
import {getSecondPro} from '../../api'
import fetch from '../../request'

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
  firstClass
}
type PageDispatchProps = {

}
type PageOwnProps = {}
type IProps = PageStateProps & PageDispatchProps & PageOwnProps
interface Index {
  props: IProps;
}

@connect(({ firstClass }) => ({
  firstClass
}))
class Index extends Component<any,any> {
  constructor(props){
    super(props)
    this.state = {
      tabsPaneList:[],
      first_classification_id:''
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

  getSecondProList(){
    fetch.post(getSecondPro,{
      first_classification_id:this.state.first_classification_id
    }).then(res => {
      console.log(res.data,11111)
      this.setState({
        tabsPaneList:res.data.map(item => ({
          key:item.second_classification_id,
          value:item.second_classification_name,
          image:item.second_classification_image_url
        }))
      })
    })
  }
  static getDerivedStateFromProps(nextProps, prevState){
    if(prevState.first_classification_id === '' && nextProps.firstClass.length > 0){
      return {
        first_classification_id:nextProps.firstClass[0].key
      }
    }
    return null
  }
  componentDidMount(){
    this.getSecondProList()
  }
  render () {
    const tabList = this.props.firstClass.map(item => ({name:item.value,id:item.key}))
    const {
      tabsPaneList
    } = this.state
    return (
      <View style={{height:"100vh"}}>
         <TopNavBar 
            rgIconSthandleClick={this.rgIconSthandleClick}
            rgIconNdhandleClick={this.rgIconNdhandleClick}
            leftIConhandleClick={this.leftIConhandleClick}
            inpHandlerClick={this.inpHandlerClick}
          />
        <TagTree handleClick={(first_classification_id)=>{this.setState({first_classification_id},this.getSecondProList)}} tabList={tabList}>
          <View style={{width:"100%",height:"100%"}}>
                {
                      <NavGrid data={tabsPaneList} columnNum={3}/>
                }
          </View>
            
        </TagTree>
        <Footer current={1}/>
      </View>
    )
  }
}

export default Index

