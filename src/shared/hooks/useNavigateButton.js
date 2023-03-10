import { TouchableOpacity } from "react-native";

import Icon from "../components/Icon/Icon";

export default function useNavigateButton({
  navigation,
  func,
  where,
  icon,
  markup,
}) {
  const handleNavigateButton = () => {
    return navigation.setOptions({
      [where]: () => (
        <TouchableOpacity
          style={
            where === "headerLeft" ? { paddingLeft: 10 } : { paddingRight: 10 }
          }
          activeOpacity={0.8}
          onPress={() => func()}
        >
          {!markup && <Icon type={icon} focused={false} size="25" />}
          {markup}
        </TouchableOpacity>
      ),
    });
  };
  return { handleNavigateButton };
}
