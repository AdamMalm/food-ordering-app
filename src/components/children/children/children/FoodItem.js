import React from 'react'

const FoodItem = ({ dish }) => {
    return (
        <div className="food-container">
            <div className="image-container">
                <img src={dish.fileName} placeholder="image"/>
            </div>
            <div className="text-container">
                <div className="title">
                    <p>{dish.name}</p>
                </div>
                <div className="price">
                    <p>{dish.price} kr</p>
                </div>
                <div className="description">
                    <p>{dish.description} kr</p>
                </div>

            </div>
        </div>
    )
}

export default FoodItem
