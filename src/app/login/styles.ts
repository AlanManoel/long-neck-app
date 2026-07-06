import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/colors";
import { FONTS } from "../../themes/fonts";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    continerButtons: {
        marginTop: 40,
        gap: 20
    },

    h3: {
        fontSize: FONTS.h3,
        fontFamily: FONTS.bold,
        color: COLORS.primary,
    },

    body_small: {
        color: COLORS.primary_2,
        fontSize: FONTS.body_small,
        fontFamily: FONTS.regular
    },

    lightTop: {
        position: "absolute",
        width: 600,
        height: 600,
        top: -300,
        right: -300,
    },

    lightBottom: {
        position: "absolute",
        width: 600,
        height: 600,
        bottom: -300,
        left: -300,
    },

});