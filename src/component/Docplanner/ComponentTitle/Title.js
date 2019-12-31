import React from 'react'
import './Title.css'

const Title = (props) =>{
   
    return(
        <div className="first-component">
            <div class="title-page">
                <img src="https://www.docplanner.com/img/sygnet.png" alt="logo-docplanner" />
                <h1>Making the healthcare experience more human</h1>
            </div>
            <div class="paragraphe">
            {props.listParagraph.map((el, i) => {return  <p key={i}> {el} </p>}) }
                 
            </div>
        </div>
    )
}
export default Title