import { TouchableOpacity, TouchableOpacityProps } from "react-native"
import BaseText from "./BaseText"

interface BaseButtonProps extends TouchableOpacityProps {
    text: string;
    onPress: () => void;
}

const BaseButton = ({ text, ...props }: BaseButtonProps) => {
    return (
        <TouchableOpacity
            hitSlop={{ right: 10, left: 10, top: 10, bottom: 10 }}
            activeOpacity={0.7}
            {...props}>
            <BaseText>{text}</BaseText>
        </TouchableOpacity>
    )
}

export default BaseButton;