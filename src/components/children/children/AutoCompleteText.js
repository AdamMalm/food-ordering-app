import { FaArrowRight } from "react-icons/fa";
import { useState, useCallback } from 'react'
import { useHistory } from "react-router-dom"
import { useColor } from "../../../contexts/ColorContext"
import { useSession } from "../../../contexts/SessionContext"

const addresses = [
    {
        id: 1,
        text: 'Testvägen 13',
    },
    {
        id: 2,
        text: 'Testgränd 29',
    },
    {
        id: 3,
        text: 'Teknikvägen 2',
    },
    {
        id: 4,
        text: 'Testvägen 16',
    }
  ];

const AutoCompleteText = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push("/menu"), [history]);
    const { returnPrimary } = useColor()
    const { setSessionAddress } = useSession()

    return (
        <div className = "search-text-container">
            <div className="bar-button-container">
                <input onChange={(e) => {
                    setSearchTerm(e.target.value)
                }} type="text" name="search" placeholder="Skriv in din adress..." className="searchbar" value={searchTerm}/>
                <div className="search-button" onClick={() => { setSessionAddress(searchTerm); handleOnClick();}} style={{background: returnPrimary()}}>
                    <FaArrowRight size={20} opacity={0.58}/>
                </div>
            </div>
            <ul>
                {addresses.filter((val) => {
                    if (searchTerm === "") {
                        return null
                    } else if (val.text.toLowerCase().includes(searchTerm.toLowerCase())) {
                        if (val.text === searchTerm) {
                            return null
                        }
                        return val
                    }
                }).map((address) => (
                    <li key={address.id} onClick={() => setSearchTerm(address.text)}>{address.text}</li>
                ))}
            </ul> 
        </div>
    )
}

export default AutoCompleteText
