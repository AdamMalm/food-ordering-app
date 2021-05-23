
const Background = () => {
    return (
        <div className = "bubble-container">
            <div id = "bubble-1">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="127.8%"
                height="100%"
                viewBox="0 0 547 534"
                >
                    <defs>
                        <linearGradient
                        id="linear-gradient"
                        x1="0.976"
                        x2="0.247"
                        y1="0.37"
                        y2="0.932"
                        gradientUnits="objectBoundingBox"
                        >
                        <stop offset="0" stopColor="#016b2e"></stop>
                        <stop offset="1" stopColor="#31923f" stopOpacity="0.902"></stop>
                        </linearGradient>
                    </defs>
                    <g data-name="Group 259" transform="translate(104 227)">
                        <g data-name="Group 258" transform="translate(1)">
                        <path
                            fill="url(#linear-gradient)"
                            d="M273.5 0C424.55 0 547 119.54 547 267S424.55 534 273.5 534 0 414.46 0 267 122.45 0 273.5 0z"
                            data-name="Path 232"
                            transform="translate(-105 -227)"
                        ></path>
                        </g>
                    </g>
                </svg>
            </div>
            <div id = "bubble-2">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="159.2%"
                height="100%"
                viewBox="0 0 787.36 721.71"
                >
                    <defs>
                        <linearGradient
                        id="linear-gradient"
                        x1="0.662"
                        x2="0.263"
                        y1="1.023"
                        y2="0.939"
                        gradientUnits="objectBoundingBox"
                        >
                        <stop offset="0" stopColor="#016b2e"></stop>
                        <stop offset="1" stopColor="#31923f" stopOpacity="0.902"></stop>
                        </linearGradient>
                    </defs>
                    <ellipse
                        cx="393.68"
                        cy="260.856"
                        fill="url(#linear-gradient)"
                        data-name="Ellipse 15"
                        rx="393.68"
                        ry="260.856"
                        transform="rotate(162 415.728 320.157)"
                    ></ellipse>
                </svg>
            </div>
        </div>
    )
}

export default Background
