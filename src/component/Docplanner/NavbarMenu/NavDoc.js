import React from 'react'
import './NavDoc.css'

// const item ={title: 'About us',isFixed :true}
const item2 ={title: 'Career',isFixed :false }
const item3 ={title: 'Departments', dropdown:['Marketing & PR','Customer Success & Sales','IT, Product, Design & UX','Finance & Administration','HR & more'],isFixed :false}

// construire tableau pour metre les liens

const menuItemsList=[item2,item3]



//   appelle pour lien et dropdown

const NavbarMenu = (props) =>{
return(

        <div className="navbar-menu">
             <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
            alt="Groupe Docplanner" />
           <ul className="sous-menu" >
             <li><a className="lien-fix">About us</a></li>
             {
            props.ListOfItems.map((el,i)=> {
               return <li key={i}><a className="lien-sous-menu" href=""> {el.title}</a>
                  {(el.dropdown)&&

                    <ul className="dropdown">
                        {el.dropdown.map((drop,j)=> {return <li key={j}><a className="dropdown-lien" href="#">{drop}</a> </li>})}
                    </ul>
                  }
                </li>  
              }
         
              )}
            </ul>
        </div>

    )}

 function NavDoc() {
    return (
        <div>
            <NavbarMenu ListOfItems={menuItemsList}/>
        </div>
    )
}
export default NavDoc