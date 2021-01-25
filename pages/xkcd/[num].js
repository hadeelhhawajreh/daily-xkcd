import About from '../about'
import Header from '../header'


export default function xkcdDetails(props){
    return(
        <>
        <div className='cont'>
        <Header/>
        <h3 style={{textAlign:'center',marginLeft:100}}>{props.xkcd.safe_title}</h3>
      <img src={props.xkcd.img} style={{alignContent:'center'}}/>
      <About txt='all copy are reserved @copy Xkcd'/>
      </div>
        </>

    )
}

export async function getServerSideProps(context){
    const num = context.query.num;
    const response = await fetch(`https://xkcd.com/${num}/info.0.json`);
    const jsonData  = await response.json();
    return {props: {xkcd: jsonData}}
}