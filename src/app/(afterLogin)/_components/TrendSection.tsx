import Trend from "./Trend"
import style from "./trendSection.module.css"

export default function TrendSection(){
    return(
        <div className={style.trendBg}>
      <div className={style.trend}>
        <h3>Trend for me</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
    )
}