import React from 'react'
import './Picture.css'
export default function Picture(props) {
    return (
        <div className="pictures">
           {props.ListPic.map((el,i)=>(
               <a href="" className="cadre">
               <div className="shadow">
                   <img src={el.image} alt="image pays"/>
                   <div className="affiche-img">
                      <h5 key={i}>{el.name}</h5>
                       <button key={i}>{el.boutton}</button>
                   </div>
               </div>
               </a>
           ))}
        </div>
    )
}
