import { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import './style.scss'
import {TopNavBar,Banner,NavGrid,Footer,ActivityImage,List,Title} from '../../components'
import {Emergency} from './components/emergency'
import {CleaningChange} from './components/cleaningChange'
import fetch from '../../request'
import {getBanner,getchangeSeasonClean,getcarefullyChosen} from '../../api'
import {getFirstClassList} from '../../actions/firstClass'
import { getcarefullyChosenList } from '../../actions/carefullyChosen'


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
  firstClass:any[]
  carefullyChosen:any[]
}

type PageDispatchProps = {
  getFirstClassList:()=>any
  getcarefullyChosenList:()=>any
}

type PageOwnProps = {}


type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Index {
  props: IProps;
}

@connect(({ firstClass,carefullyChosen }) => ({
  firstClass,
  carefullyChosen
}),(dispatch)=>({
  getFirstClassList(){
    dispatch(getFirstClassList())
  },
  getcarefullyChosenList(){
    dispatch(getcarefullyChosenList())
  }
}))
class Index extends Component<any,any> {
  constructor(props){
    super(props)
    this.state = {
      bannerData:[],
      changeSeasonCleanList:[],
      carefullyChosenList:[],
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
  componentDidMount(){
      this.getBannerLIst()
      this.getchangeSeasonCleanList()
      this.props.getFirstClassList()
      this.props.getcarefullyChosenList()
  }

  getBannerLIst = ()=>{
    fetch.post(getBanner,{}).then(res => {
      this.setState({
        bannerData:res.data
      })
    })
  }
  getchangeSeasonCleanList = ()=>{
    fetch.post(getchangeSeasonClean,{}).then(res => {
      this.setState({
        changeSeasonCleanList:res.data,
      })
    })
  }
  

  render () {
    const {
      bannerData,
      changeSeasonCleanList,
    } = this.state
    const {
      firstClass,
      carefullyChosen
    } = this.props
    return (  
        <View className="amst-home">
          <TopNavBar 
            rgIconSthandleClick={this.rgIconSthandleClick}
            rgIconNdhandleClick={this.rgIconNdhandleClick}
            leftIConhandleClick={this.leftIConhandleClick}
            inpHandlerClick={this.inpHandlerClick}
          />
          <Banner item={bannerData} indicatorDots autoplay vertical={false} interval={2000}/>
          <NavGrid data={firstClass} columnNum={5}/>
          <ActivityImage />
          <Emergency />
          <CleaningChange cleanChangeList={changeSeasonCleanList}/>
          <View className={`amst-home-list`}>  
            <Title title={'精选'}/>

            {
              carefullyChosen.map((item) => (
                <List key={item.carefullyChosen_id} title={item.carefullyChosen_name} desc={item.carefullyChosen_desc} src={item.carefullyChosen_image_url} price={item.carefullyChosen_price} />
              ))
            }
          </View>

          <Footer current={0}/>
        </View>
    )
  }
}

export default Index

