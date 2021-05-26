import { useCallback } from 'react'
import { useHistory } from "react-router-dom"
import { useSession } from "../../../../contexts/SessionContext"

const FoodItem = ({ dish }) => {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push("/itempage"), [history]);
    const { setActiveItem } = useSession()

    return (
        <div className="food-container" onClick={() => { setActiveItem(dish); handleOnClick();}}>
            <div className="image-container">
                <img src={"https://order.vezzo.se/" + dish.fileName} placeholder="image"/>
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
