import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const WelcomeScreen = (props) => {
  return (
    <View style={{ flex: 1, alignItems: "center", paddingHorizontal: 10 }}>
      <View>
        <Image style={{}} source={require("../../assets/last (2).png")} />
      </View>
      <Text style={{ fontSize: 22, fontWeight: "bold", color: "#f96163" }}>
        40K+ Premium Receipie
      </Text>
      <Text
        style={{
          fontSize: 38,
          fontWeight: "bold",
          color: "#3c444c",
          // marginTop: 20,
          marginBottom: 20,
        }}
      >
        Cook Like a Shef
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("RecipeList")}
        style={{
          backgroundColor: "#f96163",
          width: "80%",
          paddingVertical: 18,
          borderRadius: 15,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, color: "#fff", fontWeight: "700" }}>
          Let's Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
