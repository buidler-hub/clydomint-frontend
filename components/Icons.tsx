const Blob = ({ ...props }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="277"
            height="244"
            fill="none"
            viewBox="0 0 277 244"
            {...props}
        >
            <g filter="url(#filter0_f_22_59)">
                <path
                    fill="#DBFD00"
                    fillOpacity="0.8"
                    fillRule="evenodd"
                    d="M81.633 30.607c50.532-28.676 108.718-21.974 146.22 7.9 37.12 29.57 49.693 79.77 22.217 126.275-26.66 45.124-83.731 67.1-135.971 66.258-51.242-.825-94.808-25.627-102.01-70.093C4.39 113.428 30.755 59.479 81.632 30.607z"
                    clipRule="evenodd"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_f_22_59"
                    width="278.136"
                    height="242.801"
                    x="-1.23"
                    y="0.262"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_22_59"
                        stdDeviation="6"
                    ></feGaussianBlur>
                </filter>
            </defs>
        </svg>
    );
};

export { Blob };
