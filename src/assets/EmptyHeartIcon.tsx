import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const EmptyHeartIcon = (props: SvgProps) => (
    <Svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        {...props}
    >
        <Path
            d='M12 4.528a6 6 0 0 0-8.243 8.715l6.829 6.828a2 2 0 0 0 2.828 0l6.829-6.828A6 6 0 0 0 12 4.528zm-1.172 1.644l.465.464a1 1 0 0 0 1.414 0l.465-.464a4 4 0 1 1 5.656 5.656L12 18.657l-6.828-6.829a4 4 0 0 1 5.656-5.656z'
            fill='#0D0D0D'
        />
    </Svg>
);

export default EmptyHeartIcon;