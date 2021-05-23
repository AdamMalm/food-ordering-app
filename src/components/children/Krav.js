import kravIcon from '../../image/krav_white@2x.png'
import klarnaIcon from '../../image/Group_134@2x.png'

const Krav = () => {
    return (
        <div id="footer">
            <div id="krav-container">
                <img src={kravIcon}/>
                <p>Vezzo är en KRAV-<br/>certifierad restaurang</p>
            </div>
            <div id="klarna-container">
                <img src={klarnaIcon}/>
            </div>
        </div>
    )
}

export default Krav
