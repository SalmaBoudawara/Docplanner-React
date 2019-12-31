import React from 'react';
import './Exemple1.css'
const Chanteuses = [{
    name: 'Zaz',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-ftR2Sz4__lRs4k99uASSfgjHIjJhhcxXfgJDGFwBTpJb6J6_fA&s',
    wikipidiaPage:'https://fr.wikipedia.org/wiki/Zaz_(chanteuse)'
},
{
    name: 'Indila',
    image: 'https://img.nrj.fr/rg2P8ImKZqY5qy4g5ukGKxYQWHY=/800x450/smart/https%3A%2F%2Fimage-api.nrj.fr%2Fhttp%2Fmedia.nrj.fr%2F436x327%2F2014%2F10%2Findila-fiche_2030.jpg',
    wikipidiaPage:'https://fr.wikipedia.org/wiki/Indila',
}
]
function Chantes (props){
   
    const chansonList= props.objectList
    let tabChanteuse =[]
      tabChanteuse=chansonList.map((el,i)=>
        <div key={i} className="chanteuse">
        <a href={chansonList[i].wikipidiaPage}>
          <h3 className="nom">{chansonList[i].name}</h3>
          <img className ="image"src={chansonList[i].image} alt="chanteuse"/>
       </a>
   
      </div>)
    
   
     return tabChanteuse
}
const Link = (props) =>{
  return  <a className="link-color" href={props.to}>{props.children}</a>
}


const Header = () =>{
    return <div>
        <h1 className="title-principale">This is the first of my title component</h1>
        <p className="para">Hi go my code</p>

    </div>
}
class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            timer:0
        }
        setInterval(()=>{
       this.setState({
           timer:this.state.timer+1000
       })


        },1000
        )
    }
  render(){
  return<h1>{this.state.timer}</h1>
  }
    
}

const Hello = () => {
    return <div>
        <Header/>
        <Link text="Google" to="http://www.google.com">
            <h4>Google</h4>
           <p>the search engine</p>
        </Link>
        <Link to="http://www.facebook.com">Facebook </Link>
        <Link  to="http://www.gomycode.tn">Go my code</Link>
    <h2 className="title">Second title</h2>
    <p className="paragraphe"> This is the first of my exercice</p>
    <Chantes objectList={Chanteuses}/>
    {/* <Timer/> */}
    </div>
}
export default Hello