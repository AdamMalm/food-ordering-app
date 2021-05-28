import HeaderSecondary from './children/HeaderSecondary';
import Background from './children/Background';
import ContactInformation from "./children/ContactInformation";
import Cart from "./children/Cart";
import ExtraItems from "./children/ExtraItems";

const ShoppingCart = () => {

    return (
        <>
            <HeaderSecondary/>
            <Cart/>
            <ExtraItems/>
            <ContactInformation/>
            <Background height={"150vh"}/>
        </>
    )
}

export default ShoppingCart
