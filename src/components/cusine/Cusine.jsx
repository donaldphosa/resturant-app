import React,{useState ,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'


function Cusine() {
    let params = useParams();
    const [cuisine, setCuisine]= useState([])

   const getCusine = async(name)=>{
       const cusine = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
       const data = await cusine.json()
       setCuisine(data.results)
   }

   useEffect(()=>{
    getCusine(params.type)
       
   },[params.type])


  return (
    <div className='cusine'>
        {
            cuisine.map((item)=>{
                return(
                    <Link to={'/information/' + item.id}>
                <div >
                   
                    <img src={item.image} alt=""/>
                    <h4>{item.title}</h4>
                    
                </div>
                </Link>);
            })
        }
    </div>
  )
}

export default Cusine