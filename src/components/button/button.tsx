import { Pressable, Text } from "react-native";
import { styles } from "./styles";

type ButtonProps = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary";
};

export default function Button({
    title,
    onPress,
    variant = "primary",
}: ButtonProps) {
    return (
        <Pressable
            onPress={onPress}
            style={[
                styles.button,
                variant === "primary" && styles.primary,
                variant === "secondary" && styles.secondary,
            ]}
        >
            <Text
                style={[
                    styles.text,
                    variant === "secondary" && styles.secondaryText,
                ]}
            >
                {title}
            </Text>
        </Pressable>
    );
}