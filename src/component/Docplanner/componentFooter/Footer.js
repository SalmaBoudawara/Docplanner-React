import React from 'react'
import './Footer.css'
export default function Footer(props) {
    return (
        <div>
          {props.ListFooter.map((el,i)=>(
              <div className="footer">
                  <p key={i}>{el.paragraphe}
          <a className="listLink" key={i}href="">{el.links}</a> and <a href="">Chile</a></p>
          <p key={i}>{el.text}</p>
              </div>
          )
          )}
        </div>
    )
}
