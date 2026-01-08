import { useWindowDimensions } from "react-native";

export function useResponsive() {
    const { width, height } = useWindowDimensions();

    const shortEdge = Math.min(width, height);

    return {
        tiny: shortEdge < 360,
        small: shortEdge >= 360 && shortEdge < 380,
        medium: shortEdge >= 380 && shortEdge < 840,
        large: shortEdge >= 840,
        isLandscape: width > height,
        width,
        height,
        shortEdge,
    };
}
