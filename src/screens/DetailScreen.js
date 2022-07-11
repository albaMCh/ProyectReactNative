import React from "react";
import { FlatList, StyleSheet, Text, ScrollView } from "react-native";
import { View, Image } from "react-native";
import Buttton from "../components/Button.component";

const DetailScreen = ({ navigation, route }) => {
  return (
    <View>
      <Image source={route.params.imageUrl} style={styles.image}></Image>
      <Text>{route.params.title}</Text>
      <Text>{route.params.content}</Text>
      <Buttton onPress={() => navigation.navigate("Perfil")}>
        Registrarse
      </Buttton>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 110,
    marginBottom: 8,
  },
});

export default DetailScreen;
