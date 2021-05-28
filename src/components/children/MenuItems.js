import React from 'react'
import Category from "./children/Category"

const MenuItems = ({ fooddata }) => {
    const addDishes = (categoryId) => {
        const dishes = fooddata.dishes.filter((item) => (item.fkDish_CategoryId === categoryId))
        return dishes
    }
    
    return (
        <>
            <div className="menu-container">
                <ul>
                    {
                        fooddata.categories.map(item => {
                            return (<li key={item.categoryId}><Category category={item} dishes={addDishes(item.categoryId)}/></li>)
                        })
                    }
                </ul>
            </div>
        </>  
    )
}

export default MenuItems