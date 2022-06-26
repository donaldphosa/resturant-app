import React from 'react'
import Home from './Home'
import { Route ,Routes } from 'react-router-dom';
import Cusine from './cusine/Cusine';
import Searched from './Seached';
import Information from './Information';



function Pages() {
  return (
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/cusine/:type' element={<Cusine/>} />
    <Route path='/search/:searched' element={<Searched/>}/>
    <Route path='/information/:name' element={<Information/>}/>
    </Routes>
  )
}

export default Pages