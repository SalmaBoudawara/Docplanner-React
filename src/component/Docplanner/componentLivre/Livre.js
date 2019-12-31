import React from 'react'
import './Livre.css'
export default function Livre(props) {
    return (
        <div  className="descript">
          {props.ListPart.map((el,i)=>(
             <div className="description">
               <h2 key={i}>{el.title}</h2>  
          <p key={i}>{el.paragraphe}</p>
             </div>

          ))}
        </div>
    )
}
