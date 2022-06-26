
import React,{ useEffect, useState }  from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import '../index.css'
import { Link } from 'react-router-dom';
function Vaggies() {

    let [veggiesData, setVeggiesData]= useState([]);

    useEffect(()=>{
        

        const check = localStorage.getItem('veggies');
        
        if(check){
           
            setVeggiesData(JSON.parse(check));
           
        }else{

            
        const fetchData = async () =>{
            const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tag=vegetarian`);
            const data = await res.json()
            setVeggiesData(data.recipes)
            
            localStorage.setItem("veggies",JSON.stringify( data.recipes))
            
        }
            fetchData()
            
        }
        

    },[])


  return (
    <div className='main'>
    <h2>Our Vegetarian Picks</h2>
<Splide  options={ {
  
  pagination: false,
  perPage: 4,
  drag: "free",
  arrows: false,
  gap   : "5rem",
  
} }>
    
{veggiesData.map((recipe)=>{
   return(
      <SplideSlide key={recipe.id}>
         
            <Link to={'/information/' + recipe.id}>
            <div className='card'>
          <img src={recipe.image} alt="food" />
          <p>{recipe.title}</p>
          </div>
          </Link>
          
      </SplideSlide>
   );
})}
</Splide>
</div>
  )
}

export default Vaggies