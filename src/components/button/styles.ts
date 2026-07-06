import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts"

export const styles = StyleSheet.create({
    button: {
        width: 354,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
    },

    primary: {
        backgroundColor: COLORS.primary,
    },

    secondary: {
        backgroundColor: COLORS.background,
        borderWidth: 2,
        borderColor: COLORS.primary
    },

    text: {
        color: COLORS.background,
        fontSize: FONTS.button,
        fontFamily: FONTS.bold,
    },

    secondaryText: {
        color: COLORS.primary,
        fontSize: FONTS.button,
        fontFamily: FONTS.bold,
    },
});