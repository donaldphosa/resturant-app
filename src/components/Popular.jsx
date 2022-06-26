
import React,{ useEffect, useState }  from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import '../index.css'
import { Link } from 'react-router-dom';

function Popular() {
let [popularData, setPopularData]= useState([]);

    useEffect(()=>{
        

        const check = localStorage.getItem('popular');
        
        if(check){
           
            setPopularData(JSON.parse(check));
           
        }else{

            
        const fetchData = async () =>{
            const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
            const data = await res.json()
            setPopularData(data.recipes)
            
            localStorage.setItem("popular",JSON.stringify( data.recipes))
            
        }
            fetchData()
            
        }
        

    },[])



  return (
      <div className='main'>
          <h2>Popular</h2>
    <Splide  options={ {
        
        pagination: false,
        perPage: 3,
        drag: "free",
        arrows: false,
        gap   : "5rem",
        
      } }>
          
     {popularData.map((recipe)=>{
         return(
            <SplideSlide key={recipe.id}>
                
                <Link to={'/information/' + recipe.id} >
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

export default Popular