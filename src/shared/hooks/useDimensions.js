import { useState } from "react";
import { Dimensions } from "react-native";

export default function useDimensions() {
  const [dimensions, setDimensions] = useState(
    Dimensions.get("window").width - 16 * 2
  );

  const onChange = () => {
    const width = Dimensions.get("window").width - 16 * 2;
    setDimensions(width);
  };
  let dimensionsHandler;
  const addListener = () => {
    return (dimensionsHandler = Dimensions.addEventListener(
      "change",
      onChange
    ));
  };
  const removeListener = () => {
    return dimensionsHandler.remove();
  };

  return { onChange, addListener, removeListener };
}
