import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.green[300],
    borderRadius: 8,
    },
    
    title: {
        color: colors.green[900],
        fontSize: 16,
        fontWeight: "600",
    },
});
