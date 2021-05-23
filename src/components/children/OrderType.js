import { useState } from 'react';
import foodIcon from '../../image/noun_Food_750655@2x.png';
import bagIcon from '../../image/Path_25@2x.png';
import deliveryIcon from '../../image/delivery-man@2x.png';
import GrayCover from './children/Graycover';
import AutoCompleteText from './children/AutoCompleteText';

const OrderType = () => {
    const [isClicked, setIsClicked] = useState(false);

    const toggleSearchButton = () => {
        setIsClicked(true)
    }
    
    const toggleSearchCover = () => {
        setIsClicked(false)
    }

    return (
        <div className="order-type-container">
            {isClicked ? <GrayCover onClick={toggleSearchCover}/> : null }
            <p>Välj typ av beställning</p>
            
            <div className="button-container">
                <div className="button"><img src={foodIcon} id ="food"/><p>Äta här</p></div>
                <div className="button"><img src={bagIcon} id="bag"/><p>Avhämtning</p></div>
                <div 
                    className={isClicked ? "search" : "button"} 
                    onClick={toggleSearchButton}
                >
                    
                    <img src={deliveryIcon} id="delivery"/>
                    <div className="searchbar">
                        <AutoCompleteText/>
                    </div>
                    <p>Hemleverans</p>
                    </div>
            </div>
        </div>
    )
}

export default OrderType
