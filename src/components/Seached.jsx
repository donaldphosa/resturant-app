import React,{useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';


function Searched() {
    let params = useParams();
    const [searched, setSearched]= useState([])

   const getSearched = async(name)=>{
       const searchrMeal = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
       const data = await searchrMeal.json()
       setSearched(data.results)
   }

   useEffect(()=>{
    getSearched(params.searched)
       
   },[params.searched])


  return (
    <div className='cusine'>
        
        {
            searched.map((item)=>{
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

export default Searched;