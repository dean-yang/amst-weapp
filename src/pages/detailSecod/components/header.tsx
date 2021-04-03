import {AtNavBar
} from 'taro-ui'

interface HeaderProps {
  data:any,
  onClickLeftIcon:()=>void
}
  function Header(props:HeaderProps) {
    const {data,onClickLeftIcon} = props
    return (
      <AtNavBar
        color='#000'
        title={data.text}
        leftIconType={'chevron-left'}
        onClickLeftIcon={onClickLeftIcon}
    />
    )
}
export {Header}
