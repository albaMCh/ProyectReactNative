import React from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View, Image } from "react-native";
import Button from "../components/Button.component";

const BusinessScreen = ({ navigation, route }) => {
  return (
    <View>
      <Image source={route.params.logoUrl} style={styles.logo}></Image>
      <Text>{route.params.companyInfo.name}</Text>
      <Text>{route.params.companyInfo.description}</Text>
      <Text>{route.params.companyInfo.ubicacion}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 110,
    marginBottom: 8,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
});

export default BusinessScreen;
