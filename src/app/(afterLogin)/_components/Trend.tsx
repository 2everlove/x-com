import Link from "next/link";
import style from './trend.module.css';

export default function Trend() {
  return (
    <Link href={`/search?q=trend`} className={style.container}>
      <div className={style.count}>Trend</div>
      <div className={style.title}>mik</div>
      <div className={style.count}>7,777 posts</div>
    </Link>
  )
}