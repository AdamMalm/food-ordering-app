import { FaArrowRight } from "react-icons/fa";
import useState from 'react'

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

const onTextChange = (e) => {
    /* const value = e.target.value;
    if (value.length === 0) {
        setSuggestions([])
    } else {
        const regex = new RegExp(`^${value}`, 'i');
        const suggestions = items.sort().filter(v => v.test(regex));
        setSuggestions(() => ({ suggestions }));
    } */
}

const AutoCompleteText = () => {
    // const [suggestions, setSuggestions] = useState([]);

    return (
        <div className = "search-text-container">
            <div className="bar-button-container">
                <input onChange={onTextChange} type="text" name="search" placeholder="Skriv in din adress..." className="searchbar"/>
                <div className="search-button">
                    <FaArrowRight size={20} opacity={0.58}/>
                    <p>mememem</p>
                </div>
            </div>
            <ul>
                {addresses.map((address) => (
                    <li key={address.id}>{address.text}</li>
                ))}
            </ul> 
        </div>
    )
}

export default AutoCompleteText
