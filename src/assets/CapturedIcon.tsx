import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const CapturedIcon = (props: SvgProps) => (
    <Svg
        fill="#000000"
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        {...props}
    >
        <Path d="M2,7V5A3,3,0,0,1,5,2H7A1,1,0,0,1,7,4H5A1,1,0,0,0,4,5V7A1,1,0,0,1,2,7ZM2,19a3,3,0,0,0,3,3H7a1,1,0,0,0,0-2H5a1,1,0,0,1-1-1V17a1,1,0,0,0-2,0Zm20-2a1,1,0,0,0-2,0v2a1,1,0,0,1-1,1H17a1,1,0,0,0,0,2h2a3,3,0,0,0,3-3ZM22,5a3,3,0,0,0-3-3H17a1,1,0,0,0,0,2h2a1,1,0,0,1,1,1V7a1,1,0,0,0,2,0Z" />
    </Svg>
);

export default CapturedIcon;
