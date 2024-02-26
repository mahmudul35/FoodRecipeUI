import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const Header = ({ hederText, headerIcon }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ flex: 1, fontSize: 22, fontWeight: "700" }}>
        {hederText}
      </Text>
      <FontAwesome name={headerIcon} size={24} color="#f96163" />
    </View>
  );
};

export default Header;
