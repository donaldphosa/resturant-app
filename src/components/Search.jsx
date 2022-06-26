
import React,{ useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

function Search() {
    let [inputText, setInputText] = useState('');
    const navigage = useNavigate()

    function getInputText (e){
        setInputText(e.target.value);
        
    }

function handleSearch(e){
    e.preventDefault()
    navigage('/search/'+ inputText);
}

  return (
    <form onSubmit={handleSearch}>
        <div className='search'>
            <FaSearch />
        <input onChange={getInputText} value={inputText} type="text" />
        </div>
    </form>
    
  )
}

export default Search