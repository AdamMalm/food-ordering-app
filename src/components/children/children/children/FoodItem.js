import React from 'react'

const FoodItem = ({ dish }) => {
    return (
        <div>
            <p style={{fontSize: "8px"}}>{dish.name}</p>
        </div>
    )
}

export default FoodItem
