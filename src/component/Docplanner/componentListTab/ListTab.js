import React from 'react'
import './ListTab.css'
export default function ListTab(props) {
    return (
        <div className="tousbox">
            {/* {props.ListBoxes.map((el,i)=>(
                <div>
                    {el.marginTop}
                    </div>
            ))} */}
           {props.ListBoxes.map((el,i)=>(
              
              <div key={i} className={ el.marginTop?"box test":"box"}>
                  
               <img src={el.image}alt="logo"/>
               <h3 key={i}>{el.title}</h3>
               <p key={i}>{el.paragraphe}</p>
           </div>

           ))}
        </div>
    )
}
