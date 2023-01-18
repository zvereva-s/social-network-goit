import { useRef, useState, useEffect } from "react";

import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from "react-native";

import useSwitchTheme from "../../hooks/useSwitchTheme";

export default function Dropdown({ data, onSelect, OS, isEn }) {
  const { colors } = useSwitchTheme();
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(
    isEn === data[0].value ? data[1] : data[0]
  );

  const [dropdownTop, setDropdownTop] = useState(0);

  //! delete
  console.log({ selected });
  console.log({ isEn });

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item.value);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ ...styles.item, borderColor: colors.textColor }}
      onPress={() => onItemPress(item)}
    >
      <Text style={{ color: colors.textColor }}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}
        >
          <View
            style={[
              styles.dropdown,
              { top: dropdownTop + (OS === "iOS" ? 10 : -18) },
              { backgroundColor: colors.background },
            ]}
          >
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <TouchableOpacity ref={DropdownButton} onPress={toggleDropdown}>
      {renderDropdown()}
      <Text>{selected.label.split(" ")[0]}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  dropdown: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    shadowColor: "#000000",
    shadowRadius: 4,
  },
  overlay: {
    width: "100%",
    height: "100%",
  },
  item: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
  },
});
