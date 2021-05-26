import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
            {/* Gör en funktion för att det ska skifta
            mellan hamburgermeny och tillbaka knapp */}
            <div id = "hamburger-menu">
                <Link to="">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="31.471"
                    height="25.177"
                    viewBox="0 0 31.471 25.177"
                    >
                        <g
                            data-name="noun_hamburger menu_2178920"
                            transform="translate(55 71.359)"
                        >
                            <path
                            fill="#fff"
                            d="M1.139 3.441h-.016a1.145 1.145 0 000 2.289h29.225a1.145 1.145 0 000-2.289H1.139zm0 11.444h-.016a1.145 1.145 0 000 2.289h29.225a1.145 1.145 0 000-2.289H1.139zm0 11.444h-.016a1.145 1.145 0 000 2.289h29.225a1.145 1.145 0 000-2.289H1.139z"
                            data-name="Path 62"
                            transform="translate(-55 -74.8)"
                            ></path>
                        </g>
                    </svg>
                </Link>
            </div>
            <div id = "group-order">
                <Link to="">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="24" viewBox="0 0 30.467 16.906">
                        <g id="Group_144" data-name="Group 144" transform="translate(-73.213 -56)">
                            <g id="noun_profile_2455923" transform="translate(90.84 59.31)">
                                <g id="Group_127" data-name="Group 127" transform="translate(0)">
                                    <path id="Path_63" data-name="Path 63" d="M3.839,8.989C3.4,8.3,1.928,7.8,4.609,7.059A3.645,3.645,0,0,1,2.728,3.9V3.622a3.669,3.669,0,0,1,7.337,0V3.9A3.7,3.7,0,0,1,8.231,7.059a6.309,6.309,0,0,1,4.609,6.084.471.471,0,0,1-.941,0A5.446,5.446,0,0,0,6.4,7.709C3.386,7.709,3.932,8.317,3.839,8.989ZM6.4.929A2.744,2.744,0,0,0,3.669,3.622V3.9A2.744,2.744,0,0,0,6.4,6.595,2.713,2.713,0,0,0,9.125,3.9V3.622A2.713,2.713,0,0,0,6.4.929Z" fill="#fff"/>
                                </g>
                            </g>
                            <g id="noun_profile_2455923-2" data-name="noun_profile_2455923" transform="translate(80.508 56)">
                                <g id="Group_127-2" data-name="Group 127">
                                    <path id="Path_63-2" data-name="Path 63" d="M1.17,16.343a.585.585,0,0,1-1.17,0A7.845,7.845,0,0,1,5.732,8.778,4.532,4.532,0,0,1,3.392,4.851V4.5a4.562,4.562,0,0,1,9.124,0v.346a4.6,4.6,0,0,1-2.281,3.927,7.845,7.845,0,0,1,5.732,7.565.585.585,0,0,1-1.17,0A6.772,6.772,0,0,0,7.954,9.586,6.759,6.759,0,0,0,1.17,16.343ZM7.954,1.155A3.411,3.411,0,0,0,4.562,4.5v.346A3.411,3.411,0,0,0,7.954,8.2a3.373,3.373,0,0,0,3.392-3.349V4.5A3.373,3.373,0,0,0,7.954,1.155Z" fill="#fff"/>
                                </g>
                            </g>
                            <g id="noun_profile_2455923-3" data-name="noun_profile_2455923" transform="translate(74.213 58.955)">
                                <g id="Group_127-3" data-name="Group 127" transform="translate(0 0)">
                                    <path id="Path_63-3" data-name="Path 63" d="M11.9,9.036c.438-.687,1.74-1.233-.941-1.976A3.645,3.645,0,0,0,12.84,3.9V3.622a3.669,3.669,0,0,0-7.337,0V3.9A3.7,3.7,0,0,0,7.337,7.059a6.309,6.309,0,0,0-4.609,6.084.471.471,0,0,0,.941,0,5.446,5.446,0,0,1,5.5-5.434C12.182,7.709,11.806,8.364,11.9,9.036ZM9.172.929A2.744,2.744,0,0,1,11.9,3.622V3.9A2.744,2.744,0,0,1,9.172,6.595,2.713,2.713,0,0,1,6.444,3.9V3.622A2.713,2.713,0,0,1,9.172.929Z" transform="translate(-3.728)" fill="#fff"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                </Link>
            </div>
            <div id = "logo">
                <Link to="/">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64.446"
                    height="26.174"
                    viewBox="0 0 64.446 26.174"
                    >
                        <g fill="#fff">
                            <path
                            d="M0 1.51h4.016L7.1 22.453 10.177 1.51h3.8l-3.946 25.6H3.944z"
                            data-name="Path 55"
                            transform="translate(0 -1.224)"
                            ></path>
                            <path
                            d="M78.26 27.112V1.51h10.961v3.66h-6.945v7.123h5.518v3.66h-5.518v7.5h6.945v3.66z"
                            data-name="Path 56"
                            transform="translate(-63.426 -1.224)"
                            ></path>
                            <path
                            d="M142 27.112v-3.588l7.642-18.354h-7.263V1.51h11.411V5.1l-7.641 18.354h7.641v3.66z"
                            data-name="Path 57"
                            transform="translate(-115.085 -1.224)"
                            ></path>
                            <path
                            d="M209.48 27.112v-3.588l7.642-18.354h-7.267V1.51h11.409V5.1l-7.642 18.354h7.642v3.66z"
                            data-name="Path 58"
                            transform="translate(-169.774 -1.224)"
                            ></path>
                            <path
                            d="M275.54 19.747V6.427a6.684 6.684 0 011.573-4.75 6.963 6.963 0 019.066 0 6.71 6.71 0 011.579 4.75v13.32a6.684 6.684 0 01-1.573 4.75 6.963 6.963 0 01-9.066 0 6.687 6.687 0 01-1.579-4.75zm4.018.235q.017 2.513 2.1 2.532t2.085-2.532V6.175q0-2.515-2.085-2.515t-2.085 2.515z"
                            data-name="Path 59"
                            transform="translate(-223.313)"
                            ></path>
                        </g>
                    </svg>
                </Link>
            </div>
            <div id = "profile">
                <Link to="">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    >
                        <g transform="translate(-301 -119.01)">
                            <g data-name="Group 127" transform="translate(301 119.01)">
                            <path
                                fill="#fff"
                                d="M1.832 24.167a.92.92 0 01-1.832 0A11.724 11.724 0 018.974 12.98a6.657 6.657 0 01-3.663-5.807v-.512A6.923 6.923 0 0112.454 0 6.923 6.923 0 0119.6 6.661v.512a6.747 6.747 0 01-3.571 5.807A11.724 11.724 0 0125 24.167a.92.92 0 01-1.832 0c0-5.551-4.762-9.991-10.714-9.991-5.861 0-10.622 4.441-10.622 9.991zM12.454 1.708a5.2 5.2 0 00-5.311 4.953v.512a5.2 5.2 0 005.311 4.953 5.145 5.145 0 005.311-4.953v-.512a5.145 5.145 0 00-5.311-4.953z"
                                data-name="Path 63"
                            ></path>
                            </g>
                        </g>
                    </svg>
                </Link>
            </div>
            <div id = "shopping-cart">
                <Link to="">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22.948"
                    height="28.686"
                    viewBox="0 0 22.948 28.686"
                    >
                        <g transform="translate(262 52.303)">
                            <path
                            fill="#fff"
                            d="M38.549 17.106a.714.714 0 00-.7-.657h-3.818V14.03a5.561 5.561 0 00-11.122 0v2.419h-3.824a.712.712 0 00-.7.657L17 36.46a.846.846 0 00.174.518.658.658 0 00.521.207h21.549a.709.709 0 00.521-.207.6.6 0 00.174-.518zM24.3 14.03a4.171 4.171 0 018.342 0v2.419H24.3zM18.425 35.8l1.286-17.972h3.2v4.493a.7.7 0 001.39 0v-4.49h8.342v4.493a.7.7 0 001.39 0v-4.493h3.163L38.48 35.8z"
                            data-name="Path 61"
                            transform="translate(-279 -60.803)"
                            ></path>
                        </g>
                    </svg>
                </Link>
            </div>
        </header>
    )
}

export default Header