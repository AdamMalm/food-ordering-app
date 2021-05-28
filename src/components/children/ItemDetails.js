import { useSession } from "../../contexts/SessionContext";
import { useColor } from "../../contexts/ColorContext";
import { useHistory } from "react-router-dom";
import { useCallback } from 'react'



const ItemDetails = () => {
    const { activeItem, orderTime, addToShoppingCart, shoppingCart } = useSession();
    const { returnPrimary } = useColor();
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push("/menu"), [history]);

    return (
        
        <>
            <div className="itemDetails-container">
                <div className="itemName">
                    <p>{activeItem.name}</p>
                </div>
                <div className="details-container">
                    <div className="description-div">
                        <div>
                            <p className="title">Beskrivning</p>
                            <p className="title">{activeItem.price}kr</p>
                        </div>
                        <p className="description-text">{activeItem.description}</p>
                        <p className="description-text">540 Kcal</p>
                    </div>
                    <div className="special-order">
                        <p className="title">Specialanpassa din beställning</p>
                        <div className="selected" style={{background:returnPrimary()}}>
                            <p>Standard</p>
                        </div>
                        <div className="not-selected">
                            <p>Inbakad</p>
                        </div>
                    </div>
                    <div className="special-order">
                        <p className="title">Allergianpassa din beställningg</p>
                        <div className="selected" style={{background:returnPrimary()}}>
                            <p>Ingen</p>
                        </div>
                        <div className="not-selected">
                            <p>Glutenfri</p>
                        </div>
                        <div className="not-selected">
                            <p>Laktosfri</p>
                        </div>
                    </div>
                    <div className="add-option">
                        <p className="title">Lägg till</p>
                        <div>
                            <div style={{border: `2px ${returnPrimary()} solid`}}></div>
                            <div>
                                <p>EKO Tomater</p>
                                <p>+10kr</p>
                            </div>
                        </div>
                        <div>
                            <div style={{border: `2px ${returnPrimary()} solid`}}></div>
                            <div>
                                <p>Valnötter</p>
                                <p>+10kr</p>
                            </div>
                        </div>
                        <div>
                            <div style={{border: `2px ${returnPrimary()} solid`}}></div>
                            <div>
                                <p>Grönsaker</p>
                                <p>+10kr</p>
                            </div>
                        </div>
                        <div>
                            <div style={{border: `2px ${returnPrimary()} solid`}}></div>
                            <div>
                                <p>Pestocreme</p>
                                <p>+10kr</p>
                            </div>
                        </div>
                        <div>
                            <div style={{border: `2px ${returnPrimary()} solid`}}></div>
                            <div>
                                <p>Svamp</p>
                                <p>+10kr</p>
                            </div>
                        </div>
                    </div>
                    <div className="number-of-items">
                        <div>
                        <p>Antal</p>
                        </div>
                        <div>
                            <div>
                                <p>-</p>
                            </div>
                            <div style={{border: `2px ${returnPrimary()} solid`}}>
                                <p>1</p>
                            </div>
                            <div>
                                <p>+</p>
                            </div>
                        </div>
                    </div>
                   <div className="order-container">
                        <p>Beräknad tid för leverans</p>
                        <p>{orderTime} minuter</p>
                    </div>
                    <div className="add-to-cart" style={{background:returnPrimary()}} onClick={() => { addToShoppingCart(activeItem); handleOnClick();}}>
                        <p>Lägg till i varukorg</p>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default ItemDetails
