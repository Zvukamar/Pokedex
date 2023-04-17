import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

const HeartIcon = (props: SvgProps) => (
    <Svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        {...props}
    >
        <G transform="translate(0 -1028.4)">
            <Path
                d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                fill="#e74c3c"
            />
        </G>
    </Svg>
);

export default HeartIcon;
