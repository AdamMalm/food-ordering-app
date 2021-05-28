import { useSession } from "../../../contexts/SessionContext"
import { useColor } from "../../../contexts/ColorContext"

const CheckoutItem = ({ dish }) => {
    const { addToShoppingCart } = useSession()
    const { returnPrimary } = useColor()
    const handleOnClick = () => {
        addToShoppingCart(dish)
    }
    

    return (
        <div className="checkout-item-container">
            <p>{dish.name}</p>
            <div className="checkout-item-price"> 
                <p>{dish.price} kr</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" onClick={handleOnClick}>
                    <g id="noun_Plus_1807535" transform="translate(-1.103 4.949)">
                        <circle id="Ellipse_20" data-name="Ellipse 20" cx="11" cy="11" r="11" transform="translate(1.103 -4.949)" fill={returnPrimary()}/>
                        <g id="Group_174" data-name="Group 174" transform="translate(4.674 -1.086)">
                            <path id="Path_124" data-name="Path 124" d="M19.283,964.362a.958.958,0,0,0-.958.958v5.366H12.958a.958.958,0,1,0,0,1.916h5.366v5.366a.958.958,0,1,0,1.917,0V972.6h5.366a.958.958,0,1,0,0-1.916H20.241V965.32A.958.958,0,0,0,19.283,964.362Z" transform="translate(-12 -964.362)" fill="#fff"/>
                    </g>
                    </g>
                </svg>
            </div>


        </div>
    )
}

export default CheckoutItem
