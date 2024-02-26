import React from "react";
import { View, Text, ScrollView } from "react-native";
// import { categories, colors } from "../../Constant";

const CategoriesFilter = () => {
  const colors = {
    COLOR_PRIMARY: "#f96163",
    COLOR_LIGHT: "#fff",
    COLOR_DARK: "#000",
    COLOR_DARK_ALT: "#262626",
  };

  const categories = [
    {
      id: "01",
      category: "Breakfast",
    },
    {
      id: "02",
      category: "Lunch",
    },
    {
      id: "03",
      category: "Dinner",
    },
    {
      id: "04",
      category: "Asian",
    },
    {
      id: "05",
      category: "Italian",
    },
    {
      id: "06",
      category: "Desserts",
    },
    {
      id: "07",
      category: "Vegetarian",
    },
    {
      id: "08",
      category: "Seafood",
    },
  ];

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        {categories.map((category, index) => {
          return (
            <View
              style={{
                backgroundColor:
                  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
                marginVertical: 16,
                shadowColor: "#000",
                shadowRadius: 7,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
              }}
              key={index}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: index === 0 && colors.COLOR_LIGHT,
                }}
              >
                {category.category}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;
