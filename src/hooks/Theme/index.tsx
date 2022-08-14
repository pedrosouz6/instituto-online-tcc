import { useContext } from "react";
import { ContextTheme } from "../../contexts/Theme";

export function useTheme() {
    return useContext(ContextTheme);
}