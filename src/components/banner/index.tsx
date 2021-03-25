import { Swiper, SwiperItem, Image } from '@tarojs/components'
import './style.scss'

interface enumItem {
    banner_src:string
    banner_id:string
    baner_name:string
    className?:string
}


interface BannerProps {
    item:enumItem[]
    indicatorDots:boolean // 是否显示指示点
    autoplay:boolean // 是否自动切换
    vertical:boolean // 是否切换成纵向
    indicatorColor?:string // 指示点颜色
    indicatorActiveColor?:string // 当前选中的指示点颜色
    interval?:number // 自动切换的时长
}

function Banner(props:BannerProps) {
    const {
        item,indicatorColor,indicatorActiveColor,indicatorDots,autoplay,
        vertical,interval
    } = props
    return (
            <Swiper
                className={`amst-banner`}
                indicatorColor={indicatorColor || '#999'}
                indicatorActiveColor={indicatorActiveColor || '#333'}
                circular
                indicatorDots={indicatorDots}
                autoplay={autoplay}
                vertical={vertical}
                interval={interval || 3000}
            >
                {
                    item.map(j => (
                        <SwiperItem key={j.banner_id} className={j.className}>
                            {
                                <Image  src={j.banner_src} style={{width:"100%",height:"100%"}} lazyLoad />
                            }
                        </SwiperItem>
                    ))
                }
            </Swiper>
    )
}
export {Banner}
