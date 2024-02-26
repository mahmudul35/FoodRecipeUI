import React from "react";
import { View, Text, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
const SearchFilter = ({ icon, placeholder }) => {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingVertical: 16,
        flexDirection: "row",
        paddingHorizontal: 16,
        borderRadius: 8,
        marginVertical: 16,
        shadowColor: "#000",
        shadowRadius: 7,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
      }}
    >
      <FontAwesome name={icon} size={24} color="#f96163" />
      <TextInput
        placeholder={placeholder}
        style={{ fontSize: 16, color: "#808080", paddingLeft: 8 }}
      />
    </View>
  );
};

export default SearchFilter;
