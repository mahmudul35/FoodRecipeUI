import React from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  ScrollView,
  StatusBar,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const RecipeDetailsScreen = ({ navigation, route }) => {
  const { item } = route.params;
  // console.log(item);

  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <StatusBar
        backgroundColor={item.statusbarColor}
        barStyle={"dark-content"}
      />
      <SafeAreaView
        style={{
          flexDirection: "row",
          marginVertical: 10,
          marginHorizontal: 14,
        }}
      >
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-circle-left" size={28} color="white" />
        </Pressable>
        <FontAwesome name="heart-o" size={24} color="white" />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 140,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={item.imag}
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
          />
        </View>
        <Text
          style={{
            marginTop: 160,
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Text>
        {/* recipe name */}
        <View style={{ flex: 1 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* recipe description */}
            <Text
              style={{ fontSize: 16, textAlign: "justify", marginVertical: 16 }}
            >
              {item.description}
            </Text>
            {/* extra details for recipe */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",

                // width: "100%",
              }}
            >
              <View
                style={{
                  backgroundColor: "rgba(255,0,0,0.38)",
                  // paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  width: 100,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>⏰</Text>
                <Text style={{ fontSize: 20, fontWeight: "400" }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(135,206,235,0.8)",
                  // paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  width: 100,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>🍜</Text>
                <Text style={{ fontSize: 20, fontWeight: "400" }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "rgba(255,165,0,0.48)",
                  // paddingHorizontal: 16,
                  paddingVertical: 26,
                  borderRadius: 8,
                  width: 100,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 40 }}>🔥</Text>
                <Text style={{ fontSize: 20, fontWeight: "400" }}>
                  {item.calories}
                </Text>
              </View>
            </View>
            {/* recipe ingredients */}
            <View style={{ alignSelf: "flex-start" }}>
              <View>
                <Text style={{ fontSize: 26, fontWeight: "600" }}>
                  Ingredients:
                </Text>
                {item.ingredients.map((ingredient, INDEX) => {
                  return (
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 6,
                      }}
                      key={INDEX}
                    >
                      <View
                        style={{
                          height: 10,
                          width: 10,
                          backgroundColor: "red",
                          borderRadius: 5,
                          marginHorizontal: 4,
                        }}
                      ></View>
                      <Text style={{ fontSize: 16 }}>{ingredient}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
            {/* recipe STEPS */}
            <View style={{ alignSelf: "flex-start" }}>
              <View>
                <Text
                  style={{ fontSize: 26, fontWeight: "600", marginBottom: 6 }}
                >
                  Steps:
                </Text>
                {item.steps.map((step, index) => {
                  return (
                    <Text
                      key={index}
                      style={{ fontSize: 16, marginVertical: 6 }}
                    >{`${index + 1}. ${step}`}</Text>
                  );
                })}
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default RecipeDetailsScreen;
