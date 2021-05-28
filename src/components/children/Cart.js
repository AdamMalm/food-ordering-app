import { useSession } from "../../contexts/SessionContext"
import { useColor } from "../../contexts/ColorContext"

const Cart = () => {
    const { shoppingCart, totalPrice } = useSession()
    const { returnPrimary } = useColor()

    return (
        <div className="cart-container">
            <p>Din Varukorg</p>
            <div className="current-cart-container">
                <div className="cart-items">
                    <ul>
                        { 
                            shoppingCart.map((dish, index) => (
                                <li key={index}><p>{dish.name}</p><p>{dish.price} kr</p><p>1 st</p></li>
                            ))
                        }
                    </ul>     
                </div>
                <hr/>
                <div className="cart-total">
                    <p>Produkter: {totalPrice} kr</p>
                    <p>Utkörning: 99 kr</p>
                    <p>Totalt: {totalPrice + 99} kr</p>
                </div>
                <div className="discount" style={{background: returnPrimary()}}>
                    <p>Lägg till en rabattkod</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.045" height="9.759" viewBox="0 0 16.045 9.759">
                        <g id="noun_back_1973349" transform="translate(0 9.759) rotate(-90)">
                            <path id="Path_104" data-name="Path 104" d="M8.754,0a1,1,0,0,0-.7.268l-7.723,7a1,1,0,0,0,0,1.482l7.725,7A1,1,0,1,0,9.4,14.274l-6.9-6.262L9.4,1.75A1,1,0,0,0,8.755,0Z" fill="#fff"/>
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Cart
