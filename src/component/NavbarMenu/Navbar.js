import React from 'react'
import './Navbar.css' 

// nom du liens

const menuItem ={title: 'Home'}
const menuItem2 ={title: 'Services' , dropdown:['For entrepreneurs','For students','For hobbyists']}
const menuItem3 ={title: 'Contact' }

// construire tableau pour metre les liens

const menuItemsList=[menuItem,menuItem2,menuItem3]



//   appelle pour lien et dropdown

const NavMenu = (props) =>{
return(

        <div className="nav-menu">
           <ul className="sous-menu" >
             {
            props.ListOfItems.map((el,i)=> {
               return <li key={i}><a href="#"> {el.title}</a>
                  {(el.dropdown)&&

                    <ul className="dropdown">
                        {el.dropdown.map((drop,j)=> {return <li key={j}> {drop}</li>})}
                    </ul>
                  }
                </li>  
              }
         
              )}
            </ul>
        </div>

    )}

// affichage de liens navbar et dropdown
const NavItems = () => {
    return (
        <NavMenu ListOfItems={menuItemsList}/>
    )
}







export default NavItems