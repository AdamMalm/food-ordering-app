import React from 'react'
import FoodItem from "./children/FoodItem"

const Category = ({ category, dishes }) => {

    return (
        <div className="category-container">
            <div className="title-container">
                <p>{category.name}</p>
            </div>
            {
                dishes.map(item => {
                    return <FoodItem dish={item}/>
                })
            }
        </div>
    )
}

export default Category
