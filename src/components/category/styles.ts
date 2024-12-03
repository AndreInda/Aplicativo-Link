import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap:5
    },
    name:{
        fontSize: 16,
        fontWeight: "600",
        color: colors.gray[400],
    }
})