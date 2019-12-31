import React from 'react'
import './Table.css'
export default function Table(props) {

    return (
        <div className="contenu-page">
            {props.ListTab.map((el,i)=>{return<div className="first-table" style={{background:el.select? '#00CCB1':'#3D83DF'}}>
                <h4 key={i}>{el.title}</h4>
                <h2 key={i}>{el.text}</h2>
                <div className="selector" style={{marginLeft:el.select?0  :130}}>
                {(el.select)&&
                <select className="sel">
                     { el.select.map ((elm,j) => {return <option key={j}>{elm} </option>})}
                </select>}
                <img  key={i} src={el.image} alt="image"/>
            </div>

        </div>})}
        </div>
    )
}
