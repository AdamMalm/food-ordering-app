import Background from './children/Background';
import HeaderSecondary from './children/HeaderSecondary';
import OpenHours from './children/OpenHours';
import Navbar from './children/Navbar';
import MenuItems from "./children/MenuItems";
import { useSession } from "../contexts/SessionContext";


const Menu = () => {
    const { fooddata, orderTime } = useSession()

    return (
        <> 
            <HeaderSecondary/>
            <OpenHours text="Beräknad tid för leverans" time={orderTime + " minuter"} />
            <Navbar fooddata={fooddata}/>
            <MenuItems fooddata={fooddata}/>
            <Background height={"auto"}/>
        </>
    )
}

export default Menu
