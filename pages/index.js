import styles from '../styles.module.css'
import About from './about'
import Link from 'next/link'

export default function Home(props) {
  
  return (
    <>

        <Header/>
     
      <h3>{props.xkcd.safe_title}</h3>
      <img src={props.xkcd.img}/>

      <Randomizer xxx={props}/>

    <About  txt='all copy are reserved @copy Xkcd'/>
    </>
  )
}

function Header(){

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

function Randomizer(props){
  var ran = [2413,2412,2411,2410,2409,2408,2407,2406,2405,2404]
  
  return(
    <>
    { ran.map( (num) => {

           return(   <li id='li' key = {num}>
              <Link href="/xkcd/[num].js" as={`xkcd/${num}`}>
                <a>{num} </a>
              </Link>
              </li>
              )
            })
         }
  </>
  )
}


export async function getServerSideProps(){
  const response = await fetch(`https://xkcd.com/info.0.json`);
  const jsonData  = await response.json();
  return {props: {xkcd: jsonData}}
}
