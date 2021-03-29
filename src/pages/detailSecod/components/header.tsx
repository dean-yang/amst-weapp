import {AtNavBar
} from 'taro-ui'

interface HeaderProps {
  data:any
}
  function Header(props:HeaderProps) {
    console.log(props)
    return (
      <AtNavBar
        color='#000'
        title={props.data.text}
        leftIconType={'chevron-left'}
    />
    )
}
export {Header}
