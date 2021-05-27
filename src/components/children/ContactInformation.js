import { useSession } from "../../contexts/SessionContext"
import { useColor } from "../../contexts/ColorContext"

const ContactInformation = () => {
    const { sessionAddress, orderTime, totalPrice } = useSession()
    const { returnPrimary } = useColor()

    return (
        <div className="contact-container">
            <div className="form-container">
                <form>
                    <div className="form-title">
                        <label>Kontaktinformation</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.524" height="8.507" viewBox="0 0 13.524 8.507">
                            <g id="next" transform="translate(13.524 0) rotate(90)">
                                <g id="Group_88" data-name="Group 88">
                                <path id="Path_12" data-name="Path 12" d="M8.328,6.391,1.042.153a.684.684,0,0,0-.864,0A.474.474,0,0,0,.18.9L7.032,6.762.179,12.629a.473.473,0,0,0,0,.741.664.664,0,0,0,.432.154.664.664,0,0,0,.431-.153L8.328,7.133a.474.474,0,0,0,0-.742Z" fill="#4e4e4e"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <input type="text" name="kontakt" placeholder="Fyll i information..."/>
                </form>
                <form>
                    <div className="form-title">
                        <label>Leveransinformation</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.524" height="8.507" viewBox="0 0 13.524 8.507">
                            <g id="next" transform="translate(13.524 0) rotate(90)">
                                <g id="Group_88" data-name="Group 88">
                                <path id="Path_12" data-name="Path 12" d="M8.328,6.391,1.042.153a.684.684,0,0,0-.864,0A.474.474,0,0,0,.18.9L7.032,6.762.179,12.629a.473.473,0,0,0,0,.741.664.664,0,0,0,.432.154.664.664,0,0,0,.431-.153L8.328,7.133a.474.474,0,0,0,0-.742Z" fill="#4e4e4e"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <input type="text" name="leverans" className="order-info"  placeholder={sessionAddress}/>
                </form>
                <form>
                    <div className="form-title">
                        <label>Leveranstid</label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.524" height="8.507" viewBox="0 0 13.524 8.507">
                            <g id="next" transform="translate(13.524 0) rotate(90)">
                                <g id="Group_88" data-name="Group 88">
                                <path id="Path_12" data-name="Path 12" d="M8.328,6.391,1.042.153a.684.684,0,0,0-.864,0A.474.474,0,0,0,.18.9L7.032,6.762.179,12.629a.473.473,0,0,0,0,.741.664.664,0,0,0,.432.154.664.664,0,0,0,.431-.153L8.328,7.133a.474.474,0,0,0,0-.742Z" fill="#4e4e4e"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <input type="text" name="tid" className="order-time" placeholder="Today 14:29 (ASAP)"/>
                </form>
            </div>
            <div className="payment-method-container">
                <p>Betalsätt</p>
                <div className="payment-button">
                    <p>Klarna</p>
                </div>
                <div className="payment-button">
                    <p>Swish</p>
                </div>
                <div className="payment-button">
                    <p>Kort</p>
                </div>
            </div>
            <div className="order-container">
                <p>Beräknad tid för leverans</p>
                <p>{orderTime} minuter</p>
                <div className="order" style={{background: returnPrimary()}}>
                    <h2>Lägg beställning</h2>
                    <p>{totalPrice} kr</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInformation
