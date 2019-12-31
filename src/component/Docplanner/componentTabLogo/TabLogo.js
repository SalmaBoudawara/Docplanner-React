import React from 'react'
import './TabLogo.css'
import ListTab from '../componentListTab/ListTab'



export default function TabLogo(props) {
    return (
        <div className="part-platform">
           {props.ListTitle.map((el,i)=>{return(<div>
           <h2 key={i}>{el.title}</h2>
           <p key={i}>{el.paragraphe}</p>
           </div>
           )
        }
        )}
        <ListTab ListBoxes={props.ListBoxes}/>
        </div>
    )
}
