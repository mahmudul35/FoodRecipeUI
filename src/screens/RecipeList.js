import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";
import Header from "../component/Header";
import SearchFilter from "../component/SearchFilter";
import CategoriesFilter from "../component/CategoriesFilter";
import RecipeCard from "../component/RecipeCard";
const RecipeList = () => {
  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16, marginVertical: 5 }}>
      {/* render header */}
      <Header hederText="Hi, John" headerIcon="bell-o" />
      <SearchFilter icon="search" placeholder="Enter Your Favourite Recipe" />
      {/* Categories list start here */}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Categories</Text>
        <CategoriesFilter />
      </View>

      {/* recipeList */}
      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Recipes</Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default RecipeList;
