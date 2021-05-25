import React from 'react'
import fooddata from "../../jsonconvert"
import Category from "./children/Category"

const MenuItems = () => {
    const addDishes = (categoryId) => {
        const dishes = fooddata.dishes.filter((item) => (item.fkDish_CategoryId == categoryId))
        return dishes
    }
    
    return (
        <div className="menu-container">
            {
                fooddata.categories.map(item => {
                    return (<Category category={item} dishes={addDishes(item.categoryId)}/>)
                })
            }
        </div>
    )
}

export default MenuItems
