import React from 'react'
import './Lien.css'
export default function Lien(props) {
    return (
        <div className="global-company">
           <p id="style-p">We are a global company<br/> with local culture</p>
           <ul className="global-company-lien">
    {props.ListLien.map((el,i)=>{return<li><a key={i}><svg xmlns="http://www.w3.org/2000/svg" width="200" height="32" viewBox="0 0 200 32"><path d={el.text}></path></svg></a></li>})}
    </ul>
    
        </div>
    )
}
