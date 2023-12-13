import Image from 'next/image'
import styles from '@/app/page.module.css'
import Link from 'next/link'
import xLogo from '../../../public/xLogo.png'

export default function Home() {
  return (
    <>
      <div className={styles.left}>
        <Image src={xLogo} alt="logo" width={300} height={300}/>
      </div>
      <div className={styles.right}>
        <h1>now</h1>
        <h2>now register</h2>
        <Link href="/i/flow/signup" className={styles.signup}>Create Account</Link>
        <h3>Already register?</h3>
        <Link href="/login" className={styles.login}>Login</Link>
      </div>
    </>
    
  )
}
