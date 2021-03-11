import { AtGrid } from 'taro-ui'
import './style.scss'
interface NavGridProps {
  data:Array<{image:string,value:string,key:string | number}>,
  columnNum:number
}

function NavGrid(props:NavGridProps) {
  const {data,columnNum} = props
    return (
        <AtGrid data={data} className={`amst-navgrid`}  hasBorder={false}  columnNum={columnNum}/>
    )
}

export { NavGrid }
