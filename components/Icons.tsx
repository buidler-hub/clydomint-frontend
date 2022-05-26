const ArrowDown = ({ ...props }) => {
    return (
        <svg
            width="62"
            height="61"
            viewBox="0 0 62 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M31 3.8125C31.5139 3.8125 32.0067 4.01334 32.37 4.37083C32.7334 4.72832 32.9375 5.21318 32.9375 5.71875V50.6796L45.1283 38.6816C45.4921 38.3237 45.9855 38.1226 46.5 38.1226C47.0145 38.1226 47.5079 38.3237 47.8718 38.6816C48.2356 39.0396 48.44 39.525 48.44 40.0312C48.44 40.5375 48.2356 41.0229 47.8718 41.3809L32.3718 56.6309C32.1918 56.8084 31.978 56.9492 31.7426 57.0453C31.5072 57.1414 31.2549 57.1909 31 57.1909C30.7452 57.1909 30.4928 57.1414 30.2574 57.0453C30.022 56.9492 29.8082 56.8084 29.6283 56.6309L14.1283 41.3809C13.7644 41.0229 13.5601 40.5375 13.5601 40.0312C13.5601 39.525 13.7644 39.0396 14.1283 38.6816C14.4921 38.3237 14.9855 38.1226 15.5 38.1226C16.0145 38.1226 16.5079 38.3237 16.8718 38.6816L29.0625 50.6796V5.71875C29.0625 5.21318 29.2666 4.72832 29.63 4.37083C29.9933 4.01334 30.4861 3.8125 31 3.8125Z"
                fill="black"
            />
        </svg>
    );
};

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

export { ArrowDown, Blob };
