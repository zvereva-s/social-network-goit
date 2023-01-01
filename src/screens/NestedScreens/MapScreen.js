import React, { useLayoutEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

import Icon from "../../shared/components/Icon/Icon";

export default function MapScreen({ route, navigation }) {
  const { latitude, longitude, locationName } = route.params;
  const { navigate } = navigation;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ paddingLeft: 10 }}
          activeOpacity={0.8}
          onPress={() => navigate("Публікації")}
        >
          <Icon type="arrowLeft" focused={false} size="25" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.001,
          longitudeDelta: 0.006,
        }}
      >
        <Marker coordinate={{ latitude, longitude }} title={locationName} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
