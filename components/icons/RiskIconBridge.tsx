import React from "react";

interface IconProps {
    fill: string;
    width?: string;
    height?: string;
}

const RiskIconBridge: React.FC<IconProps> = ({
    fill,
    width = "22px",
    height = "22px",
}) => {
    return (
        <svg viewBox="0 0 22 22" width={width} height={height} style={{ fill }}>
            <g id="Group">
                <g id="Group_2">
                    <g id="XMLID_1_">
                        <path
                            id="Vector"
                            d="M14.6996 5.68623L8.63597 10.8725V8.03492C8.63597 7.89676 8.52851 7.77986 8.39035 7.77986L7.70468 7.76392C6.72734 7.72141 5.77047 7.82768 4.86477 8.08806C3.04313 8.646 1.66667 9.69281 0.5 11.441V10.6387C0.505117 10.6121 0.510234 10.5802 0.515351 10.543C0.515351 9.74595 0.658626 8.90638 0.919591 8.13057C1.85599 5.42055 4.39401 3.61387 7.24415 3.61387H7.27997H8.38012C8.51828 3.61387 8.62573 3.49696 8.62573 3.35881V0.5L14.6996 5.68623Z"
                        />
                        <path
                            id="Vector_2"
                            d="M21.5001 10.5747V11.3824C21.4899 11.409 21.4848 11.4409 21.4848 11.4727C21.4848 12.2698 21.3415 13.1094 21.0805 13.8852C20.1441 16.5952 17.6061 18.4019 14.756 18.4019C14.7457 18.4019 14.7304 18.4019 14.7201 18.4019H13.62C13.4818 18.4019 13.3693 18.5188 13.3693 18.6623V21.4998L7.30566 16.3189L13.3641 11.138V13.9755C13.3641 14.1137 13.4716 14.2306 13.6098 14.2359L14.2954 14.2518C15.2728 14.2943 16.2296 14.1881 17.1353 13.9277C18.957 13.3644 20.3283 12.3229 21.5001 10.5747Z"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default RiskIconBridge;
