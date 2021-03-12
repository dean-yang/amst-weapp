import { AtGrid } from 'taro-ui'
import './style.scss'
interface NavGridProps {
  data:Array<{image:string,value:string,key:string | number,}>,
  columnNum:number,
  className?:string
}

function NavGrid(props:NavGridProps) {
  const {data,columnNum,className} = props
    return (
        <AtGrid data={data} className={`amst-navgrid ${className}`}  hasBorder={false}  columnNum={columnNum}/>
    )
}

export { NavGrid }
