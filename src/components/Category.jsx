import React from 'react'
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiChopsticks, GiNoodles } from "react-icons/gi";
import { NavLink } from 'react-router-dom';

function Category() {

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "75px",
  height: "75px",
  borderRadius: "50%",
  color: "#fff",
  backgroundColor: "black",
  cursor: "pointer",
  textAlign: "center",
  
}

  return (
    
    <nav className='navbar'>

    <NavLink style={style} to={"/cusine/Thai"}>
      <div>
      <FaHamburger />
      <p>thai</p>
      </div>
    </NavLink>

    <NavLink style={style} to={"/cusine/American"}>
    <div>
      <FaPizzaSlice />
      <p>American</p>
      </div> 
    </NavLink>

    <NavLink style={style} to={"/cusine/European"}>
      <div>
      <GiChopsticks />
      <p>Japeneese</p>
      </div>
    </NavLink>

    <NavLink style={style} to={"/cusine/Italian"}>
      <div>
      <GiNoodles />
      <p>Italian</p>
      </div>
    </NavLink>
    </nav>
  )
}

export default Category