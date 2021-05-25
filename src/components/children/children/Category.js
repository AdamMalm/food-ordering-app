import React from 'react'
import FoodItem from "./children/FoodItem"

const Category = ({ category, dishes }) => {

    return (
        <div className="category-container">
            <div className="title-container">
                <p>{category.name}</p>
            </div>
            <ul>
                {
                    dishes.map(item => {
                        return <li key={item.dishId}><FoodItem dish={item}/></li>
                    })
                }
            </ul>
        </div>
    )
}

export default Category
