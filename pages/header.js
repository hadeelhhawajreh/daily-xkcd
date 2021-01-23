import Link from 'next/link'
import styles from '../styles.module.css'

export default function Header(){

    return(
      <>
     <Link href='/'>
            <a className={styles.links} >Home </a>
          </Link>
  
          <Link href='about'>
            <a className={styles.links}>About </a>
          </Link>
      </>
    );
  
  }