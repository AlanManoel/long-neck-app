import { StyleSheet } from "react-native";
import { COLORS } from "../themes/colors"
import { FONTS } from "../themes/fonts"


export const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.background,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
    width: 350,
    height: 350,
    borderRadius: 175,
    backgroundColor: "#FF9900",
    opacity: 0.18,
    top: -180,
    right: -150,
  },

});