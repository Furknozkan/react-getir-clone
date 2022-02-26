import React from 'react'
import { CategoriesData } from '../../../App'
import './Categories.css'
const Categories = () => {
  return (
    <div className='categories'>
      <div className='categories-title'>Kategoriler</div>
        <div className='category-list'>
        {
            CategoriesData.map((categorie) =>(
                <div className='category' key={categorie.id}>
                <div className='category-image'>
                   <img src={categorie.url}/>
                </div>
                <h4>
                {categorie.categoryName}    
                </h4></div>
            ))
        }</div>
    </div>
  )
}

export default Categories