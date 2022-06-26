import React,{ useState, useEffect }  from 'react';
import { useParams } from 'react-router-dom';


function Information() {
    let [info, setInfo]=useState({})
    let params = useParams();
    let [currentTab, setCurrentTab] = useState('instruction');
   
    const getInfo= async()=>{
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const recipeData = await data.json();
        setInfo(recipeData);
        
    }
    useEffect(()=>{
        getInfo()
    },[params.name])
  

  return (
    <div className='infoWrapper'>
        <div className='leftside'>
        <h3>{info.title}</h3>
        <img src={info.image} alt=''/>
        </div>
        <div className="rightside">
            <div>
                <button className={currentTab==='instruction'? 'active' : ''}
                 onClick={()=>{
                setCurrentTab('instruction')
                }
                    }>Instruction</button>
                <button className={currentTab==='ingridients'? 'active' : ''}
                onClick={()=>{
                    setCurrentTab('ingridients')
                    }
                }
                >Ingridients</button>
            </div>
           {currentTab==='instruction' && (<div><h3 dangerouslySetInnerHTML={{__html:info.summary} }></h3>
            <h3 dangerouslySetInnerHTML={{__html:info.instructions} }></h3></div>)}

          {currentTab==='ingridients'&&(  <ul>
                {info.extendedIngredients.map((ingridient)=>{
                    return(
                        <li>{ingridient.original}</li>
                    )
                })}
            </ul>)}
        </div>
    </div>
  )
}

export default Information