import styles from '../styles.module.css'
import About from './about'
import Link from 'next/link'

export default function Home(props) {
  
  return (
    <>
        <Header/>
    <div className='container' >
    <h1>XKCD</h1>
     
      <h3>{props.xkcd.safe_title}</h3>
      <img src={props.xkcd.img}/>

      <Randomizer xxx={props}/>
    </div>
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

//   var ran = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009]
  var ran=[    2415,2414,2413,2412,2411,2410,2409,2408,2407,2406
  ]
  
  return(
    <>
    { ran.map( (num) => {

           return(   <li id='li' key = {num} style={{listStyle:'none' ,display:'inline-block' ,fontSize:20,marginTop:100,padding:10 ,paddingTop:20}}>
              <Link href="/xkcd/[num].js" as={`xkcd/${num}`}>
                <a>#{num} </a>
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
