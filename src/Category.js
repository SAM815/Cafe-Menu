//Category.js
import React from 'react'
//we have just passed the props here
//in App.js there is actual functions

function Category({ categories, filterItems }) {
    return (
        <div className='btn-container'>
            {categories.map((category, index) => {
                return (
                    <button type="button"
                    onClick = {()=>filterItems(category)}
                    className="filter-btn"
                    key={index}
                    >
                     {category} 
                  </button>
                )
            })}


        </div>
    )
}

export default Category
