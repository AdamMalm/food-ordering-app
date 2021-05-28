import { useSession } from "../../contexts/SessionContext"
import CheckoutItem from "./children/CheckoutItem"

const ExtraItems = () => {
    const { fooddata } = useSession()
    const dishes = fooddata.dishes.filter((item) => (item.showAtCheckout === true))

    return (
        <>
            <div className="extra-title-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="15.844" height="24.571" viewBox="0 0 15.844 24.571" style={{fill: "yellow"}}>
                    <g id="noun_Fire_2898882" transform="translate(62.999 35.141)">
                        <g id="Group_146" data-name="Group 146" transform="translate(-62.999 -35.141)">
                        <path id="Path_92" data-name="Path 92" d="M20.193,53.067c-2.219-3.7,1.561-5.177,1.479-7.067C23.48,49.616,19.947,50.027,20.193,53.067Z" transform="translate(-17.892 -42.22)" fill="#d8710a" fillRule="evenodd"/>
                        <path id="Path_93" data-name="Path 93" d="M1.4,12.162A4.913,4.913,0,0,0,4.11,16.189c-2.137-3.7-1.15-7.478,1.561-9.039-.247.493-.575,1.561.164,2.054C8.054,6.821,8.63,3.041,8.136,0c2.794,2.712,4.355,6.492,2.547,9.861-1.233,2.383.74,4.684,1.808,0,4.931,4.684,4.766,12.9-2.794,14.71.657-.822,4.684-4.6.657-8.875.493,3.369-2.219,3.369-1.808,6.656-2.137-3.616,2.465-3.78-1.479-9.039.986,4.355-5.424,6.081-.9,11.176C-.574,23.092-1.149,16.846,1.4,12.162Z" transform="translate(-0.001)" fill="#d8710a" fillRule="evenodd"/>
                        </g>
                    </g>
                </svg>
                <p>Populära tillägg</p>

            </div>
            <div className="extra-items-container">
                <ul>
                    {
                        dishes.map((item) => {
                            return <li key={item.dishId}><CheckoutItem dish={item}/></li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default ExtraItems
