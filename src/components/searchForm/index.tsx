import {Component} from 'react'
import { AtForm, AtInput,AtButton } from 'taro-ui'

import './style.scss'

interface SearchFormProps {
  onSubmitHandler:(values:string) => void
}

class SearchForm extends Component <SearchFormProps,any>{
  constructor(props){
    super(props)
    this.state = {
      value:''
    }
  }
  handleChange (value) {
    this.setState({
      value,
    })
  }
  onSubmit (e) {
    console.log(e)
    console.log(this.state.value)
  }
  onReset (e) {
    e.preventdefault()
    this.setState({
      value: '',
    })
  }
  render () {
    const { onSubmitHandler } = this.props
    const { value } = this.state
    return (
      <AtForm
        onSubmit={()=>{
          onSubmitHandler(value)
        }}
        onReset={this.onReset.bind(this)}
      >
          <AtInput 
            name='value' 
            type='text' 
            placeholder={`洗衣机维修`} 
            value={value} 
            onChange={this.handleChange.bind(this)} 
            className={`amst-sea-inp`}
            border={false}
          >
            <AtButton className={`amst-sea-subtn`}>
              搜索
            </AtButton>
          </AtInput>
        
      </AtForm>
    )
  }
}

export { SearchForm }